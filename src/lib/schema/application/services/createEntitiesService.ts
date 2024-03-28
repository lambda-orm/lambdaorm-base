import { Entity, Property, Relation, RelationType } from '../../domain'
import { ObjType, Type } from 'typ3s'
import { H3lp } from 'h3lp'
import { SchemaService } from './schemaService'

export class CreateEntitiesService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly schemaService:SchemaService, private readonly helper: H3lp) {}

	public getEntities (name:string, type: Type):Entity[] {
		return this.typeToEntities(name, type)
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
		const pk = this.schemaService.getPk(objType)
		const primaryKey = pk ? [pk.name] : []
		const entityName = this.schemaService.getEntityName(name)
		const entity:Entity = { name: entityName, primaryKey, properties: [] }
		for (const prop of objType.properties) {
			if (prop.type && Type.isPrimitive(prop.type)) {
				const required = (prop.type.nullable === false && prop.type.undefinable === false)
				const length = this.schemaService.getLength(prop.type)
				const type = prop.type.primitive === 'string' && length === undefined ? 'text' : prop.type.primitive
				const property: Property = { name: prop.name, type, required, length }
				entity.properties.push(property)
				if (prop.type.unique && (pk === undefined || pk.name !== prop.name)) {
					if (!entity.uniqueKey) entity.uniqueKey = []
					entity.uniqueKey.push(prop.name)
				}
			} else if (prop.type && Type.isObj(prop.type) && prop.type.obj) {
				const fk = this.schemaService.getFk(prop.type.obj)
				if (fk && fk.type) {
					const propertyName = prop.name + this.helper.str.capitalize(fk.name)
					const entityName = this.schemaService.getEntityName(prop.name)
					const required = (prop.type.nullable === false && prop.type.undefinable === false)
					const length = this.schemaService.getLength(fk.type)
					const type = fk.type.primitive === 'string' && length === undefined ? 'text' : fk.type.primitive
					const property: Property = { name: propertyName, type, required, length }
					const composite = prop.type && prop.type.repeated !== undefined && prop.type.repeated === 0 ? true : undefined
					const relation:Relation = {
						name: prop.name,
						type: RelationType.oneToMany,
						from: propertyName,
						entity: entityName,
						to: fk.name,
						composite
					}
					entity.properties.push(property)
					if (!entity.relations) entity.relations = []
					entity.relations.push(relation)
					const relatedEntities = this.typeToEntities(entityName, prop.type)
					const relatedEntity = relatedEntities.find(p => p.name === entityName)
					if (relatedEntity && (!relatedEntity.primaryKey || relatedEntity.primaryKey.length === 0)) {
						relatedEntity.primaryKey = [fk.name]
					}
					if (relatedEntities && relatedEntities.length > 0) {
						entities.push(...relatedEntities)
					}
				}
			} else if (prop.type && Type.isList(prop.type) && prop.type.list?.items.obj) {
				if (pk && pk.type) {
					const entityName = this.schemaService.getEntityName(prop.name)
					const relatedEntities = this.typeToEntities(entityName, prop.type)
					const relatedEntity = relatedEntities.find(p => p.name === entityName)
					if (relatedEntity) {
						if (prop.type && prop.type.repeatRate && prop.type.repeatRate > 0.02) {
							const rpk = this.schemaService.getFk(prop.type.list?.items.obj)
							if (rpk && rpk.type) {
								// hay que crear una tabla intermediaria con el id de la entidad y el id de la entidad relacionada
								const parentPropertyName = this.helper.str.notation(entity.name, 'camel') + this.helper.str.capitalize(pk.name)
								const parentPropertyLength = this.schemaService.getLength(pk.type)
								const parentPropertyType = pk.type.primitive === 'string' && parentPropertyLength === undefined ? 'text' : pk.type.primitive
								const parentProperty: Property = { name: parentPropertyName, type: parentPropertyType, length: parentPropertyLength, required: true }
								const childPropertyName = this.helper.str.singular(this.helper.str.notation(relatedEntity.name, 'camel')) + this.helper.str.capitalize(rpk.name)
								const childPropertyLength = this.schemaService.getLength(rpk.type)
								const childPropertyType = rpk.type.primitive === 'string' && childPropertyLength === undefined ? 'text' : rpk.type.primitive
								const childProperty: Property = { name: childPropertyName, type: childPropertyType, length: childPropertyLength, required: true }
								const intermediaEntityName = entity.name + this.helper.str.capitalize(prop.name)
								const intermediaPropertyPk: Property = { name: 'id', type: 'integer', required: true, autoIncrement: true }
								const intermediaEntity:Entity = { name: intermediaEntityName, intermediate: true, primaryKey: ['id'], properties: [intermediaPropertyPk, childProperty, parentProperty], uniqueKey: [parentProperty.name, childProperty.name] }
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
								if (!intermediaEntity.relations) intermediaEntity.relations = []
								intermediaEntity.relations.push(parentRelation)
								intermediaEntity.relations.push(childRelation)
								entities.push(intermediaEntity)
							}
						} else {
							const propertyName = this.helper.str.notation(entity.name, 'camel') + this.helper.str.capitalize(pk.name)
							const relatedProperty: Property = { name: propertyName, type: pk.type.primitive, required: true }
							const composite = prop.type && prop.type.repeated !== undefined && prop.type.repeated === 0
							const relation:Relation = {
								name: this.helper.str.notation(entity.name, 'camel'),
								type: RelationType.oneToMany,
								from: propertyName,
								entity: entity.name,
								to: pk.name,
								target: composite ? undefined : prop.name
							}
							relatedEntity.properties.push(relatedProperty)
							if (!relatedEntity.relations)relatedEntity.relations = []
							relatedEntity.relations.push(relation)
							if (composite) {
								const compositeRelation:Relation = {
									name: prop.name,
									type: RelationType.manyToOne,
									from: pk.name,
									entity: relatedEntity.name,
									to: propertyName,
									composite
								}
								if (!entity.relations)entity.relations = []
								entity.relations.push(compositeRelation)
							}
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
}
