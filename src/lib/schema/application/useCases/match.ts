import { H3lp } from 'h3lp'
import { Entity, Mapping, MatchOptions, Schema } from '../../domain'
import { SchemaService } from '../services/schemaService'

export class MatchSchema {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly schemaService:SchemaService,
		private readonly helper:H3lp) {}

	public match (schema: Schema, mappings:Mapping[], options:MatchOptions):void {
		if (!schema.infrastructure) {
			schema.infrastructure = this.schemaService.newInfrastructure()
		}
		if (!schema.infrastructure.mappings) {
			schema.infrastructure.mappings = []
		}
		const entitiesToRemove:string[] = []
		for (const mapping of mappings) {
			let currentMapping = schema.infrastructure.mappings.find(p => p.name === mapping.name)
			if (currentMapping === undefined) {
				currentMapping = { name: mapping.name, entities: [] }
			} else if (!currentMapping.entities) {
				currentMapping.entities = []
			}
			const toRemove = this.matchMapping(schema.domain.entities, currentMapping, mapping, options)
			entitiesToRemove.push(...toRemove.filter(p => !entitiesToRemove.includes(p)))
		}
		// remove entities and properties
		if (options.removeEntities) {
			// remove entities from domain
			for (const entityToRemove of entitiesToRemove) {
				const entity = schema.domain.entities.find(p => p.name === entityToRemove)
				if (entity) {
					// remove entity if not used in other mappings
					const existsInOtherMappings = schema.infrastructure.mappings.some(p => p.entities?.some(q => q.name === entityToRemove))
					const existsInMappings = mappings.some(p => p.entities?.some(q => q.name === entityToRemove))
					if (!existsInOtherMappings && existsInMappings) {
						schema.domain.entities = schema.domain.entities.filter(p => p.name !== entityToRemove)
					}
				}
			}
		}
	}

	private matchMapping (entities:Entity[], currentMapping: Mapping, mapping:Mapping, options:MatchOptions = {}):string[] {
		if (mapping.entities === undefined) {
			return []
		}
		if (currentMapping === undefined) {
			currentMapping = { name: mapping.name, entities: [] }
		} else if (!currentMapping.entities) {
			currentMapping.entities = []
		}
		// create and update entities and properties
		for (const entityMapping of mapping.entities) {
			const currentEntity = entities.find(p => p.name === entityMapping.name)
			if (currentEntity) {
				currentEntity.primaryKey = entityMapping.primaryKey
				currentEntity.uniqueKey = entityMapping.uniqueKey
				currentEntity.view = entityMapping.view
				for (const property of entityMapping.properties) {
					const currentProperty = currentEntity.properties.find(p => p.name === property.name)
					if (!currentProperty) {
						currentEntity.properties.push(property)
					} else {
						currentProperty.type = property.type
						currentProperty.length = property.length
						currentProperty.required = property.required
						currentProperty.primaryKey = property.primaryKey
						currentProperty.autoIncrement = property.autoIncrement
						currentProperty.view = property.view
					}
				}
				if (entityMapping.indexes) {
					for (const index of entityMapping.indexes) {
						if (!currentEntity.indexes)currentEntity.indexes = []
						const currentIndex = currentEntity.indexes.find(p => p.name === index.name)
						if (!currentIndex) {
							currentEntity.indexes.push(index)
						} else {
							currentIndex.fields = index.fields
						}
					}
				}
			} else {
				if (entityMapping.name !== entityMapping.mapping) {
					const currentEntityMapping = currentMapping.entities?.find(p => p.name === entityMapping.name)
					if (currentEntityMapping) {
						currentEntityMapping.mapping = entityMapping.mapping
						currentEntityMapping.sequence = entityMapping.sequence
					} else {
						currentMapping.entities?.push(entityMapping)
					}
				}
				const newEntity = this.helper.obj.clone(entityMapping)
				delete newEntity.mapping
				delete newEntity.sequence
				entities.push(newEntity)
			}
		}
		// remove properties
		const entitiesToRemove:string[] = []
		if (currentMapping.entities && (options.removeEntities || options.removeProperties)) {
			for (const currentEntity of currentMapping.entities) {
				const entityMapping = mapping.entities.find(p => p.name === currentEntity.name)
				if (!entityMapping) {
					if (options.removeEntities) {
						entitiesToRemove.push(currentEntity.name)
					}
				} else if (options.removeProperties) {
					currentEntity.properties = currentEntity.properties.filter(p => entityMapping.properties.find(q => q.name === p.name))
				}
			}
			currentMapping.entities = currentMapping.entities.filter(p => !entitiesToRemove.includes(p.name))
		}
		return entitiesToRemove
	}
}
