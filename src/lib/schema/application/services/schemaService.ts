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
		const key = this.getKey(objType)
		const primaryKey = key ? [key.name] : []
		const entity:Entity = { name, primaryKey, properties: [], uniqueKey: [], required: [], indexes: [], relations: [], dependents: [] }
		for (const prop of objType.properties) {
			if (prop.type && Type.isPrimitive(prop.type)) {
				const property: Property = { name: prop.name, type: prop.type.primitive, required: (prop.type.nullable === false && prop.type.undefinable === false) }
				entity.properties.push(property)
			} else if (prop.type && Type.isObj(prop.type) && prop.type.obj) {
				const fk = this.getKey(prop.type.obj)
				if (fk && fk.type) {
					const propertyName = prop.name + fk.name
					const entityName = this.helper.str.capitalize(prop.name)
					const property: Property = { name: propertyName, type: fk.type.primitive, required: (prop.type.nullable === false && prop.type.undefinable === false) }
					const relation:Relation = {
						name: prop.name,
						type: RelationType.oneToOne,
						from: propertyName,
						entity: entityName,
						to: fk.name
					}
					entity.properties.push(property)
					entity.relations.push(relation)
					const relatedEntities = this.typeToEntities(entityName, prop.type)
					if (relatedEntities && relatedEntities.length > 0) {
						entities.push(...relatedEntities)
					}
				}
			} else if (prop.type && Type.isList(prop.type) && prop.type.list?.items.obj) {
				const fk = this.getKey(prop.type.list.items.obj)
				if (fk && fk.type) {
					const propertyName = prop.name + fk.name
					const entityName = this.helper.str.capitalize(prop.name)
					const property: Property = { name: propertyName, type: fk.type.primitive, required: (prop.type.nullable === false && prop.type.undefinable === false) }
					const relation:Relation = {
						name: prop.name,
						type: RelationType.manyToOne,
						from: propertyName,
						entity: entityName,
						to: fk.name
					}
					entity.properties.push(property)
					entity.relations.push(relation)
					const relatedEntities = this.typeToEntities(entityName, prop.type)
					if (relatedEntities && relatedEntities.length > 0) {
						entities.push(...relatedEntities)
					}
				}
			}
		}
		entities.push(entity)
		return entities
	}

	private getKey (objType:ObjType): PropertyType | undefined {
		const uniques = objType.properties.filter(p => p.type?.unique === true)
		if (uniques.length === 1) {
			return uniques[0]
		} else if (uniques.length > 1) {
			const id = uniques.find(p => ['id', 'name', 'code', 'key'].includes(p.name.toLowerCase()))
			if (id) {
				return id
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
