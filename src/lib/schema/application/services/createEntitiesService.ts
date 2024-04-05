import { Entity, Property, Relation, RelationType } from '../../domain'
import { ObjType, Type } from 'typ3s'
import { SchemaHelper } from './helper'

export class CreateEntitiesService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly helper: SchemaHelper) {}

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
		const pk = this.helper.getPk(objType)
		const primaryKey = pk ? [pk.name] : []
		const entityName = this.helper.entityName(name)
		const entity:Entity = { name: entityName, primaryKey, properties: [] }
		for (const prop of objType.properties) {
			if (prop.type && Type.isPrimitive(prop.type)) {
				const required = (prop.type.nullable === false && prop.type.undefinable === false)
				const length = this.helper.lengthFromType(prop.type)
				const type = this.helper.type(prop.type.primitive, length)
				const property: Property = { name: prop.name, type, required, length }
				entity.properties?.push(property)
				if (prop.type.unique && (pk === undefined || pk.name !== prop.name)) {
					if (!entity.uniqueKey) entity.uniqueKey = []
					entity.uniqueKey.push(prop.name)
				}
			} else if (prop.type && Type.isObj(prop.type) && prop.type.obj) {
				const fk = this.helper.getFk(prop.type.obj)
				if (fk && fk.type) {
					const propertyName = prop.name + this.helper.capitalize(fk.name)
					const entityName = this.helper.entityName(prop.name)
					const required = (prop.type.nullable === false && prop.type.undefinable === false)
					const length = this.helper.lengthFromType(fk.type)
					const type = this.helper.type(fk.type.primitive, length)
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
					entity.properties?.push(property)
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
					const entityName = this.helper.entityName(prop.name)
					const relatedEntities = this.typeToEntities(entityName, prop.type)
					const relatedEntity = relatedEntities.find(p => p.name === entityName)
					if (relatedEntity) {
						if (prop.type && prop.type.repeatRate && prop.type.repeatRate > 0.02) {
							const rpk = this.helper.getFk(prop.type.list?.items.obj)
							if (rpk && rpk.type) {
								// hay que crear una tabla intermediaria con el id de la entidad y el id de la entidad relacionada
								const parentPropertyName = this.helper.refPropertyName(entity.name, pk.name)
								const parentPropertyLength = this.helper.lengthFromType(pk.type)
								const parentPropertyType = this.helper.type(pk.type.primitive, parentPropertyLength)
								const parentProperty: Property = { name: parentPropertyName, type: parentPropertyType, length: parentPropertyLength, required: true }
								const childPropertyName = this.helper.refPropertyName(relatedEntity.name, rpk.name)
								const childPropertyLength = this.helper.lengthFromType(rpk.type)
								const childPropertyType = this.helper.type(rpk.type.primitive, childPropertyLength)
								const childProperty: Property = { name: childPropertyName, type: childPropertyType, length: childPropertyLength, required: true }
								const intermediaEntityName = entity.name + this.helper.capitalize(prop.name)
								const intermediaPropertyPk: Property = { name: 'id', type: 'integer', required: true, autoIncrement: true }
								const intermediaEntity:Entity = { name: intermediaEntityName, intermediate: true, primaryKey: ['id'], properties: [intermediaPropertyPk, childProperty, parentProperty], uniqueKey: [parentProperty.name, childProperty.name] }
								const parentRelation:Relation = {
									name: this.helper.relationName(entity.name),
									type: RelationType.oneToMany,
									from: parentPropertyName,
									entity: entity.name,
									to: pk.name,
									target: this.helper.relationName(intermediaEntityName)
								}
								const childRelation:Relation = {
									name: this.helper.relationName(relatedEntity.name),
									type: RelationType.oneToMany,
									from: childPropertyName,
									entity: relatedEntity.name,
									to: rpk.name,
									target: this.helper.relationName(intermediaEntityName)
								}
								if (!intermediaEntity.relations) intermediaEntity.relations = []
								intermediaEntity.relations.push(parentRelation)
								intermediaEntity.relations.push(childRelation)
								entities.push(intermediaEntity)
							}
						} else {
							const propertyName = this.helper.refPropertyName(entity.name, pk.name)
							const relatedPropertyLength = this.helper.lengthFromType(pk.type)
							const relatedPropertyType = this.helper.type(pk.type.primitive, relatedPropertyLength)
							const relatedProperty: Property = { name: propertyName, type: relatedPropertyType, length: relatedPropertyLength, required: true }
							const composite = prop.type && prop.type.repeated !== undefined && prop.type.repeated === 0
							const relation:Relation = {
								name: this.helper.relationName(entity.name),
								type: RelationType.oneToMany,
								from: propertyName,
								entity: entity.name,
								to: pk.name,
								target: composite ? undefined : prop.name
							}
							if (relatedEntity.properties === undefined) {
								relatedEntity.properties = []
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
