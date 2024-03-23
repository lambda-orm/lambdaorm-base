import {
	AppPathsConfig, ApplicationSchema, InfrastructureSchema, DomainSchema, Schema, Entity, Property,
	Relation, RelationType, EntityType
} from '../../domain'
import { ObjType, PropertyType, Type } from 'typ3s'
import { H3lp } from 'h3lp'

export class SchemaService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly helper: H3lp) {}

	public newSchema ():Schema {
		return { version: '0.0.1', application: this.newApplication(), domain: this.newDomain(), infrastructure: this.newInfrastructure() }
	}

	public newInfrastructure (): InfrastructureSchema {
		return { paths: this.newPathsApp(), mappings: [], sources: [], stages: [], views: [] }
	}

	public newDomain (): DomainSchema {
		return { version: '0.0.1', enums: [], entities: [] }
	}

	public newApplication ():ApplicationSchema {
		return { start: [], end: [], listeners: [] }
	}

	public newPathsApp (): AppPathsConfig {
		return { src: 'src', data: 'data', domain: 'domain' }
	}

	public addEntityTypes (schema: Schema, types: EntityType[]):void {
		if (types && types.length > 0) {
			for (const entityType of types) {
				const entities = this.typeToEntities(entityType.name, entityType.type)
				for (const entity of entities) {
					const currentEntity = schema.domain.entities.find(p => p.name === entity.name)
					if (currentEntity) {
						for (const prop of entity.properties) {
							const currentProp = currentEntity.properties.find(p => p.name === prop.name)
							if (!currentProp) {
								currentEntity.properties.push(prop)
							}
						}
					} else {
						schema.domain.entities.push(entity)
					}
				}
			}
		}
	}

	private typeToEntities (name:string, type:Type): Entity[] {
		if (Type.isList(type) && type.list && Type.isObj(type.list.items) && type.list.items.obj) {
			return this.objTypeToEntities(name, type.list.items.obj)
		} else if (Type.isObj(type) && type.obj) {
			return this.objTypeToEntities(name, type.obj)
		} else {
			return []
		}
	}

	private objTypeToEntities (name:string, objType:ObjType): Entity[] {
		const entities:Entity[] = []
		const pk = this.getPk(objType)
		const primaryKey = pk ? [pk.name] : []
		const entity:Entity = { name, primaryKey, properties: [], uniqueKey: [], required: [], indexes: [], relations: [], dependents: [] }
		for (const prop of objType.properties) {
			if (prop.type && Type.isPrimitive(prop.type)) {
				const required = (prop.type.nullable === false && prop.type.undefinable === false)
				const length = this.getLength(prop.type)
				const type = prop.type.primitive === 'string' && length === undefined ? 'text' : prop.type.primitive
				const property: Property = { name: prop.name, type, required, length }
				entity.properties.push(property)
				if (prop.type.unique && (pk === undefined || pk.name !== prop.name)) {
					entity.uniqueKey.push(prop.name)
				}
			} else if (prop.type && Type.isObj(prop.type) && prop.type.obj) {
				const fk = this.getFk(prop.type.obj)
				if (fk && fk.type) {
					const propertyName = prop.name + this.helper.str.capitalize(fk.name)
					const entityName = this.helper.str.capitalize(prop.name)
					const required = (prop.type.nullable === false && prop.type.undefinable === false)
					const length = this.getLength(fk.type)
					const type = fk.type.primitive === 'string' && length === undefined ? 'text' : fk.type.primitive
					const property: Property = { name: propertyName, type, required, length }
					const relation:Relation = {
						name: prop.name,
						type: RelationType.oneToMany,
						from: propertyName,
						entity: entityName,
						to: fk.name
					}
					entity.properties.push(property)
					entity.relations.push(relation)
					const relatedEntities = this.typeToEntities(entityName, prop.type)
					const relatedEntity = relatedEntities.find(p => p.name === entityName)
					if (relatedEntity && relatedEntity.primaryKey.length === 0) {
						relatedEntity.primaryKey = [fk.name]
					}
					if (relatedEntities && relatedEntities.length > 0) {
						entities.push(...relatedEntities)
					}
				}
			} else if (prop.type && Type.isList(prop.type) && prop.type.list?.items.obj) {
				if (pk && pk.type) {
					const entityName = this.helper.str.capitalize(prop.name)
					const relatedEntities = this.typeToEntities(entityName, prop.type)
					const relatedEntity = relatedEntities.find(p => p.name === entityName)
					if (relatedEntity) {
						if (prop.type && prop.type.repeatRate && prop.type.repeatRate > 0.02) {
							const rpk = this.getFk(prop.type.list?.items.obj)
							if (rpk && rpk.type) {
								// hay que crear una tabla intermediaria con el id de la entidad y el id de la entidad relacionada
								const parentPropertyName = this.helper.str.notation(entity.name, 'camel') + this.helper.str.capitalize(pk.name)
								const parentPropertyLength = this.getLength(pk.type)
								const parentPropertyType = pk.type.primitive === 'string' && parentPropertyLength === undefined ? 'text' : pk.type.primitive
								const parentProperty: Property = { name: parentPropertyName, type: parentPropertyType, length: parentPropertyLength, required: true }
								const childPropertyName = this.helper.str.singular(this.helper.str.notation(relatedEntity.name, 'camel')) + this.helper.str.capitalize(rpk.name)
								const childPropertyLength = this.getLength(rpk.type)
								const childPropertyType = rpk.type.primitive === 'string' && childPropertyLength === undefined ? 'text' : rpk.type.primitive
								const childProperty: Property = { name: childPropertyName, type: childPropertyType, length: childPropertyLength, required: true }
								const intermediaEntityName = entity.name + this.helper.str.capitalize(prop.name)
								const intermediaPropertyPk: Property = { name: 'id', type: 'integer', required: true, autoIncrement: true }
								const intermediaEntity:Entity = { intermediate: true, name: intermediaEntityName, primaryKey: ['id'], properties: [intermediaPropertyPk, childProperty, parentProperty], uniqueKey: [parentProperty.name, childProperty.name], required: [], indexes: [], relations: [], dependents: [] }
								const parentRelation:Relation = {
									name: this.helper.str.notation(entity.name, 'camel'),
									type: RelationType.oneToMany,
									from: parentPropertyName,
									entity: entity.name,
									to: pk.name,
									target: this.helper.str.notation(intermediaEntityName, 'camel')
								}
								const childRelation:Relation = {
									name: this.helper.str.notation(relatedEntity.name, 'camel'),
									type: RelationType.oneToMany,
									from: childPropertyName,
									entity: relatedEntity.name,
									to: rpk.name,
									target: this.helper.str.notation(intermediaEntityName, 'camel')
								}
								intermediaEntity.relations.push(parentRelation)
								intermediaEntity.relations.push(childRelation)
								entities.push(intermediaEntity)
							}
						} else {
							const propertyName = this.helper.str.notation(entity.name, 'camel') + this.helper.str.capitalize(pk.name)
							const relatedProperty: Property = { name: propertyName, type: pk.type.primitive, required: true }
							const relation:Relation = {
								name: this.helper.str.notation(entity.name, 'camel'),
								type: RelationType.oneToMany,
								from: propertyName,
								entity: entity.name,
								to: pk.name,
								target: prop.name
							}
							relatedEntity.properties.push(relatedProperty)
							relatedEntity.relations.push(relation)
						}
					}
					if (relatedEntities && relatedEntities.length > 0) {
						entities.push(...relatedEntities)
					}
				}
			}
		}
		entities.push(entity)
		return entities
	}

	private getLength (type:Type): number | undefined {
		if (type.primitive !== 'string') {
			return undefined
		}
		if (!type.maxLen) {
			return 80
		}
		if (type.maxLen < 8) {
			if (type.maxLen === type.minLen) {
				return type.maxLen
			}
			return Math.round(type.maxLen * 1.3)
		}
		const length = Math.round(type.maxLen * 1.3)
		if (length < 16) {
			return 16
		} else if (length < 32) {
			return 32
		} else if (length < 64) {
			return 64
		} else if (length < 128) {
			return 128
		} else if (length < 256) {
			return 256
		} else if (length < 512) {
			return 512
		} else if (length < 1024) {
			return 1024
		} else if (length < 2048) {
			return 2048
		} else if (length < 4096) {
			return 4096
		} else {
			return undefined
		}
	}

	private getPk (objType:ObjType): PropertyType | undefined {
		const uniques = objType.properties.filter(p => p.type?.unique === true)
		return this.getKey(uniques)
	}

	private getFk (objType:ObjType): PropertyType | undefined {
		const uniques = objType.properties.filter(p => p.type?.onParentDistinctUnique === true)
		const result = this.getKey(uniques)
		return result
	}

	private getKey (uniques:PropertyType[]): PropertyType | undefined {
		if (uniques.length === 1) {
			return uniques[0]
		} else if (uniques.length > 1) {
			for (const keyName of ['id', 'code', 'key', 'name']) {
				const id = uniques.find(p => p.name.toLowerCase() === keyName)
				if (id) {
					return id
				}
			}
			const idNumber = uniques.find(p => p.type?.primitive === 'number' || p.type?.primitive === 'integer')
			if (idNumber) {
				return idNumber
			}
			return uniques[0]
		} else {
			return undefined
		}
	}
}
