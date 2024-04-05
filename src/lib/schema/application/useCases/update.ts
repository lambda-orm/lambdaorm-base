import { Type } from 'typ3s'
import { Entity, Schema } from '../../domain'
import { CreateEntitiesService } from '../services/createEntitiesService'

export class UpdateSchema {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly createEntitiesService:CreateEntitiesService) {}

	public update (schema: Schema, data: any | any[], name:string):Type {
		if (!data || typeof data !== 'object') {
			throw new Error('Invalid argument data')
		}
		if (typeof name !== 'string') {
			throw new Error('Argument name undefined')
		}
		const type = Type.type(data, { info: true, describe: true })
		const entities = this.createEntitiesService.getEntities(name, type)
		this.updateEntities(schema, entities)
		return type
	}

	private updateEntities (schema: Schema, entities:Entity[]):void {
		for (const entity of entities) {
			const currentEntity = schema.domain.entities.find(p => p.name === entity.name)
			if (currentEntity) {
				currentEntity.abstract = entity.abstract
				currentEntity.singular = entity.singular
				currentEntity.view = entity.view
				currentEntity.composite = entity.composite
				currentEntity.intermediate = entity.intermediate

				for (const property of entity.properties || []) {
					const currentProperty = currentEntity.properties?.find(p => p.name === property.name)
					if (!currentProperty) {
						currentEntity.properties?.push(property)
					} else {
						currentProperty.type = property.type
						currentProperty.length = property.length
						currentProperty.required = property.required
						currentProperty.primaryKey = property.primaryKey
						currentProperty.autoIncrement = property.autoIncrement
						currentProperty.view = property.view
						currentProperty.readExp = property.readExp
						currentProperty.writeValue = property.writeValue
						currentProperty.readValue = property.readValue
						currentProperty.writeExp = property.writeExp
						currentProperty.default = property.default
						currentProperty.enum = property.enum
						currentProperty.key = property.key
					}
				}
				if (entity.required) {
					currentEntity.required = entity.required
				}
				if (entity.primaryKey) {
					currentEntity.primaryKey = entity.primaryKey
				}
				if (entity.uniqueKey) {
					currentEntity.uniqueKey = entity.uniqueKey
				}
				if (entity.indexes) {
					for (const index of entity.indexes) {
						if (!currentEntity.indexes)currentEntity.indexes = []
						const currentIndex = currentEntity.indexes.find(p => p.name === index.name)
						if (!currentIndex) {
							currentEntity.indexes.push(index)
						} else {
							currentIndex.fields = index.fields
						}
					}
				}
				if (entity.relations) {
					for (const relation of entity.relations) {
						if (!currentEntity.relations)currentEntity.relations = []
						const currentRelation = currentEntity.relations.find(p => p.name === relation.name)
						if (!currentRelation) {
							currentEntity.relations.push(relation)
						} else {
							currentRelation.type = relation.type
							currentRelation.entity = relation.entity
							currentRelation.from = relation.from
							currentRelation.to = relation.to
							currentRelation.target = relation.target
							currentRelation.weak = relation.weak
							currentRelation.composite = relation.composite
						}
					}
				}
				if (entity.constraints) {
					for (const constraint of entity.constraints) {
						if (!currentEntity.constraints)currentEntity.constraints = []
						const currentConstraint = currentEntity.constraints?.find(p => p.message === constraint.message)
						if (!currentConstraint) {
							currentEntity.constraints.push(constraint)
						} else {
							currentConstraint.condition = constraint.condition
						}
					}
				}
			} else {
				schema.domain.entities.push(entity)
			}
		}
	}
}
