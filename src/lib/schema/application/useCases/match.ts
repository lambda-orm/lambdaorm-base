import { Entity, EntityMapping, Mapping, MatchOptions, Property, RelationType, Schema, SchemaError } from '../../domain'
import { SchemaHelper } from '../services/helper'
import { SchemaService } from '../services/schemaService'

export class MatchSchema {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly schemaService:SchemaService,
		private readonly helper:SchemaHelper) {}

	public match (schema: Schema, mappings:Mapping[], options:MatchOptions):void {
		if (!schema.infrastructure) {
			schema.infrastructure = this.schemaService.newInfrastructure()
		}
		if (!schema.infrastructure.mappings) {
			schema.infrastructure.mappings = []
		}
		const entitiesToRemove:string[] = []
		for (const mapping of mappings) {
			let currentMapping = schema.infrastructure.mappings.find(p => this.helper.equalName(p.name, mapping.name))
			if (currentMapping === undefined) {
				currentMapping = { name: mapping.name, entities: [] }
				schema.infrastructure.mappings.push(currentMapping)
			} else if (!currentMapping.entities) {
				currentMapping.entities = []
			}
			const toRemove = this.matchMapping(schema.domain.entities, currentMapping, mapping, options)
			entitiesToRemove.push(...toRemove.filter(p => !entitiesToRemove.includes(p)))
		}
		// remove entities and properties
		this.removeEntitiesAndProperties(schema, mappings, entitiesToRemove, options)
	}

	private matchMapping (entities:Entity[], currentMapping: Mapping, mapping:Mapping, options:MatchOptions = {}):string[] {
		if (mapping.entities === undefined) {
			return []
		}
		// create and update entities and properties
		for (const entityMapping of mapping.entities) {
			const currentEntityMapping = currentMapping.entities
				?.find(p => this.helper.equalName(p.mapping, entityMapping.mapping) ||
				this.helper.equalName(p.name, entityMapping.name))
			// Si existe busca por el mapeo actual , sino busca por el nombre del nuevo mapeo
			const currentEntity = currentEntityMapping
				? entities.find(p => p.name === currentEntityMapping.name)
				: entities.find(p => this.helper.equalName(p.name, entityMapping.name))
			// if not exists create entity
			if (!currentEntity) {
				this.createEntity(entities, currentMapping, entityMapping)
			} else {
				this.mergeValues(currentEntity.primaryKey || [], entityMapping.primaryKey || [])
				this.mergeValues(currentEntity.uniqueKey || [], entityMapping.uniqueKey || [])
				currentEntity.view = entityMapping.view
				this.upsertProperties(entityMapping, currentEntity, currentEntityMapping)
				this.mergeIndexes(entityMapping, currentEntity)
				this.mergeRelations(entityMapping, currentEntity, options)
				if (currentEntityMapping) {
					this.updateEntityMapping(currentEntityMapping, entityMapping)
				} else {
					this.createEntityMapping(currentMapping, currentEntity, entityMapping)
				}
			}
		}
		// remove entities mapping and properties
		const entitiesToRemove = this.removeEntityMappingsAndProperties(entities, currentMapping, mapping.entities, options)
		return entitiesToRemove
	}

	private createEntity (entities:Entity[], currentMapping:Mapping, entityMapping:EntityMapping):void {
		const newEntity:Entity = { name: entityMapping.name, properties: [], relations: [], primaryKey: entityMapping.primaryKey, uniqueKey: entityMapping.uniqueKey }
		const newEntityMapping:EntityMapping = { name: entityMapping.name, mapping: entityMapping.mapping, properties: [] }
		for (const propertyMapping of entityMapping.properties || []) {
			if (propertyMapping.name !== propertyMapping.mapping) {
				newEntityMapping.properties?.push({ name: propertyMapping.name, mapping: propertyMapping.mapping })
			}
			newEntity.properties?.push(this.propertyFromPropertyMapping(propertyMapping))
		}
		if (entityMapping.relations) {
			for (const relation of entityMapping.relations) {
				const newRelation = {
					name: relation.name,
					type: relation.type,
					from: relation.from,
					entity: this.helper.entityName(relation.entity),
					to: relation.to
				}
				newEntity.relations?.push(newRelation)
			}
		}
		entities.push(newEntity)
		if (newEntityMapping.mapping || (newEntityMapping.properties?.length || 0) > 0) {
			currentMapping.entities?.push(newEntityMapping)
		}
	}

	private createEntityMapping (currentMapping: Mapping, currentEntity:Entity, entityMapping:EntityMapping) {
		const newEntityMapping:EntityMapping = { name: currentEntity.name, mapping: entityMapping.mapping, sequence: entityMapping.sequence, properties: [] }
		for (const propertyMapping of entityMapping.properties || []) {
			const currentProperty = currentEntity.properties?.find(p => this.helper.equalName(p.name, propertyMapping.name))
			if (!currentProperty) {
				throw new SchemaError(`Property ${propertyMapping.name} not found in entity ${currentEntity.name}`)
			}
			if (currentProperty.name !== propertyMapping.mapping) {
				newEntityMapping.properties?.push({ name: currentProperty.name, mapping: propertyMapping.mapping })
			}
		}
		if ((newEntityMapping.name !== newEntityMapping.mapping) || newEntityMapping.sequence || (newEntityMapping.properties?.length || 0) > 0) {
			if (newEntityMapping.properties?.length === 0) {
				newEntityMapping.properties = undefined
			}
			currentMapping.entities?.push(newEntityMapping)
		}
	}

	private upsertProperties (entityMapping:EntityMapping, currentEntity:Entity, currentEntityMapping?:EntityMapping):void {
		for (const propertyMapping of entityMapping.properties || []) {
			// en el caso que exista el mapeo actual, busca la propiedad en el mapeo actual por el mapping,
			// sino busca la propiedad en la entidad por el nombre
			const currentProperty = currentEntityMapping
				? currentEntityMapping.properties?.find(p => this.helper.equalName(p.mapping, propertyMapping.mapping))
				: currentEntity.properties?.find(p => this.helper.equalName(p.name, propertyMapping.name))
			// si no existe la propiedad la agrega , sino actualiza los valores
			if (!currentProperty) {
				currentEntity.properties?.push(this.propertyFromPropertyMapping(propertyMapping))
			} else {
				currentProperty.type = this.helper.type(propertyMapping.type)
				currentProperty.length = this.helper.length(propertyMapping.length)
				currentProperty.required = propertyMapping.required ? true : undefined
				currentProperty.autoIncrement = propertyMapping.autoIncrement ? true : undefined
				currentProperty.view = propertyMapping.view
			}
		}
	}

	private propertyFromPropertyMapping (propertyMapping:Property):Property {
		return {
			name: this.helper.propertyName(propertyMapping.name),
			type: this.helper.type(propertyMapping.type),
			length: this.helper.length(propertyMapping.length),
			required: propertyMapping.required ? true : undefined,
			autoIncrement: propertyMapping.autoIncrement ? true : undefined,
			view: propertyMapping.view
		}
	}

	private mergeIndexes (entityMapping:EntityMapping, currentEntity:Entity):void {
		// Upsert indexes
		if (entityMapping.indexes) {
			for (const index of entityMapping.indexes) {
				if (!currentEntity.indexes)currentEntity.indexes = []
				const currentIndex = currentEntity.indexes.find(p => this.helper.equalName(p.name, index.name))
				if (!currentIndex) {
					currentEntity.indexes.push(index)
				} else {
					this.mergeValues(currentIndex.fields, index.fields)
				}
			}
		}
		// Remove indexes
		if (currentEntity.indexes) {
			const indexesToRemove:string[] = []
			for (const index of currentEntity.indexes) {
				const currentIndex = entityMapping.indexes?.find(p => this.helper.equalName(p.name, index.name))
				if (!currentIndex) {
					indexesToRemove.push(index.name)
				}
			}
			currentEntity.indexes = currentEntity.indexes.filter(p => !indexesToRemove.includes(p.name))
		}
	}

	private mergeRelations (entityMapping:EntityMapping, currentEntity:Entity, options:MatchOptions):void {
		// Upsert relations
		if (entityMapping.relations) {
			for (const relation of entityMapping.relations) {
				if (!currentEntity.relations)currentEntity.relations = []
				const currentRelation = currentEntity.relations.find(p => this.helper.equalName(p.name, relation.name))
				if (!currentRelation) {
					relation.entity = this.helper.entityName(relation.entity)
					currentEntity.relations.push(relation)
				} else {
					if (!this.helper.equalName(currentRelation.type, relation.type)) {
						currentRelation.type = relation.type
					}
					if (!this.helper.equalName(currentRelation.from, relation.from)) {
						currentRelation.from = relation.from
					}
					if (!this.helper.equalName(currentRelation.entity, relation.entity)) {
						currentRelation.entity = this.helper.entityName(relation.entity)
					}
					if (!this.helper.equalName(currentRelation.to, relation.to)) {
						currentRelation.to = relation.to
					}
				}
			}
		}
		// Remove relations
		if (options.removeRelations && currentEntity.relations) {
			const relationsToRemove:string[] = []
			for (const relation of currentEntity.relations.filter(p => p.type === RelationType.oneToMany)) {
				const currentRelation = entityMapping.relations?.find(p => this.helper.equalName(p.name, relation.name))
				if (!currentRelation) {
					relationsToRemove.push(relation.name)
				}
			}
			currentEntity.relations = currentEntity.relations.filter(p => !relationsToRemove.includes(p.name))
		}
	}

	private updateEntityMapping (currentEntityMapping:EntityMapping, entityMapping:EntityMapping):void {
		currentEntityMapping.mapping = entityMapping.mapping
		currentEntityMapping.sequence = entityMapping.sequence
		for (const property of entityMapping.properties || []) {
			const currentProperty = currentEntityMapping.properties?.find(p => this.helper.equalName(p.mapping, property.mapping))
			if (currentProperty) {
				currentProperty.mapping = property.mapping
			} else if (property.name !== property.mapping) {
				currentEntityMapping.properties?.push({ name: property.name, mapping: property.mapping })
			}
		}
	}

	private removeEntitiesAndProperties (schema:Schema, mappings:Mapping[], entitiesToRemove:string [], options:MatchOptions) {
		if (options.removeEntities) {
			// remove entities from domain
			for (const entityToRemove of entitiesToRemove) {
				const entity = schema.domain.entities.find(p => this.helper.equalName(p.name, entityToRemove))
				if (entity) {
					// remove entity if not used in other mappings
					const existsInOtherMappings = schema.infrastructure?.mappings?.some(p => p.entities?.some(q => this.helper.equalName(q.name, entityToRemove)))
					const existsInMappings = mappings.some(p => p.entities?.some(q => this.helper.equalName(q.name, entityToRemove)))
					if (!existsInOtherMappings && existsInMappings) {
						schema.domain.entities = schema.domain.entities.filter(p => !this.helper.equalName(p.name, entityToRemove))
					}
				}
			}
		}
	}

	private removeEntityMappingsAndProperties (entities:Entity[], currentMapping:Mapping, entitiesMapping:EntityMapping[], options:MatchOptions):string[] {
		const entitiesToRemove:string[] = []
		if (currentMapping.entities && (options.removeEntities || options.removeProperties)) {
			for (const currentEntityMapping of currentMapping.entities) {
				const entityMapping = entitiesMapping.find(p => this.helper.equalName(p.mapping, currentEntityMapping.mapping))
				if (!entityMapping) {
					if (options.removeEntities) {
						entitiesToRemove.push(currentEntityMapping.name)
					}
				} else if (options.removeProperties) {
					const currentEntity = entities.find(p => p.name === currentEntityMapping.name)
					if (currentEntity) {
						this.removeProperties(currentEntity, currentEntityMapping, entityMapping)
					}
				}
			}
			// remove entities mappings
			currentMapping.entities = currentMapping.entities.filter(p => !entitiesToRemove.includes(p.name))
		}
		return entitiesToRemove
	}

	private removeProperties (currentEntity:Entity, currentEntityMapping:EntityMapping, entityMapping:EntityMapping) {
		const propertiesToRemove:string[] = []
		for (const currentProperty of currentEntity.properties || []) {
			const currentPropertyMapping = currentEntityMapping.properties?.find(p => p.name === currentProperty.name)
			if (currentPropertyMapping) {
				// si existe la propiedad en el mapeo actual y no existe en el nuevo mapeo lo setea para eliminar
				if (!entityMapping.properties?.some(p => this.helper.equalName(p.mapping, currentPropertyMapping.mapping))) {
					propertiesToRemove.push(currentProperty.name)
				}
			// si no existe la propiedad en el mapeo actual , busca la propiedad en la entidad de dominio, si no existe la setea para eliminar
			} else if (!entityMapping.properties?.some(p => this.helper.equalName(p.name, currentProperty.name))) {
				propertiesToRemove.push(currentProperty.name)
			}
		}
		currentEntityMapping.properties = currentEntityMapping.properties?.filter(p => !propertiesToRemove.includes(p.name))
		currentEntity.properties = currentEntity.properties?.filter(p => !propertiesToRemove.includes(p.name))
	}

	private mergeValues (current:string[], change:string[]):void {
		const currentLowerCase = current.map(p => p.toLowerCase())
		const changeLowerCase = change.map(p => p.toLowerCase())
		const newValues = change.filter(p => !currentLowerCase.includes(p.toLowerCase()))
		const removeValues = current.filter(p => !changeLowerCase.includes(p.toLowerCase()))
		current.push(...newValues)
		current = current.filter(p => !removeValues.includes(p))
	}
}
