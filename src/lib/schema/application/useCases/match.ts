import { H3lp } from 'h3lp'
import { Entity, EntityMapping, Mapping, MatchOptions, RelationType, Schema } from '../../domain'
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
			let currentMapping = schema.infrastructure.mappings.find(p => this.equalName(p.name, mapping.name))
			if (currentMapping === undefined) {
				currentMapping = { name: mapping.name, entities: [] }
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
				?.find(p => this.equalName(p.mapping, entityMapping.mapping) ||
				this.equalName(p.name, entityMapping.name))
			// Si existe busca por el mapeo actual , sino busca por el nombre del nuevo mapeo
			const currentEntity = currentEntityMapping
				? entities.find(p => p.name === currentEntityMapping.name)
				: entities.find(p => this.equalName(p.name, entityMapping.name))
			// if exists update and merge properties
			if (currentEntity) {
				this.mergeValues(currentEntity.primaryKey || [], entityMapping.primaryKey || [])
				this.mergeValues(currentEntity.uniqueKey || [], entityMapping.uniqueKey || [])
				currentEntity.view = entityMapping.view
				this.upsertProperties(entityMapping, currentEntity, currentEntityMapping)
				this.mergeIndexes(entityMapping, currentEntity)
				this.mergeRelations(entityMapping, currentEntity, options)
			}
			if (currentEntityMapping) {
				this.updateEntityMapping(currentEntityMapping, entityMapping)
			} else if (entityMapping.name !== entityMapping.mapping || entityMapping.sequence) {
				currentMapping.entities?.push(entityMapping)
			}
			// if not exists create entity
			if (!currentEntity) {
				entityMapping.name = this.entityName(entityMapping.name)
				this.addEntity(entities, entityMapping)
			}
		}
		// remove entities mapping and properties
		const entitiesToRemove = this.removeEntityMappingsAndProperties(entities, currentMapping, mapping.entities, options)
		return entitiesToRemove
	}

	private upsertProperties (entityMapping:EntityMapping, currentEntity:Entity, currentEntityMapping?:EntityMapping):void {
		for (const propertyMapping of entityMapping.properties) {
			// en el caso que exista el mapeo actual, busca la propiedad en el mapeo actual por el mapping,
			// sino busca la propiedad en la entidad por el nombre
			const currentProperty = currentEntityMapping
				? currentEntityMapping.properties.find(p => this.equalName(p.mapping, propertyMapping.mapping))
				: currentEntity.properties.find(p => this.equalName(p.name, propertyMapping.name))
			// si no existe la propiedad la agrega , sino actualiza los valores
			if (!currentProperty) {
				const newProperty = {
					name: propertyMapping.name,
					type: propertyMapping.type,
					length: propertyMapping.length,
					required: propertyMapping.required ? true : undefined,
					autoIncrement: propertyMapping.autoIncrement ? true : undefined,
					view: propertyMapping.view
				}
				currentEntity.properties.push(newProperty)
			} else {
				currentProperty.type = propertyMapping.type
				currentProperty.length = propertyMapping.length
				currentProperty.required = propertyMapping.required ? true : undefined
				currentProperty.autoIncrement = propertyMapping.autoIncrement ? true : undefined
				currentProperty.view = propertyMapping.view
			}
		}
	}

	private mergeIndexes (entityMapping:EntityMapping, currentEntity:Entity):void {
		// Upsert indexes
		if (entityMapping.indexes) {
			for (const index of entityMapping.indexes) {
				if (!currentEntity.indexes)currentEntity.indexes = []
				const currentIndex = currentEntity.indexes.find(p => this.equalName(p.name, index.name))
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
				const currentIndex = entityMapping.indexes?.find(p => this.equalName(p.name, index.name))
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
				const currentRelation = currentEntity.relations.find(p => this.equalName(p.name, relation.name))
				if (!currentRelation) {
					relation.entity = this.entityName(relation.entity)
					currentEntity.relations.push(relation)
				} else {
					if (!this.equalName(currentRelation.type, relation.type)) {
						currentRelation.type = relation.type
					}
					if (!this.equalName(currentRelation.from, relation.from)) {
						currentRelation.from = relation.from
					}
					if (!this.equalName(currentRelation.entity, relation.entity)) {
						currentRelation.entity = this.entityName(relation.entity)
					}
					if (!this.equalName(currentRelation.to, relation.to)) {
						currentRelation.to = relation.to
					}
				}
			}
		}
		// Remove relations
		if (options.removeRelations && currentEntity.relations) {
			const relationsToRemove:string[] = []
			for (const relation of currentEntity.relations.filter(p => p.type === RelationType.oneToMany)) {
				const currentRelation = entityMapping.relations?.find(p => this.equalName(p.name, relation.name))
				if (!currentRelation) {
					relationsToRemove.push(relation.name)
				}
			}
			currentEntity.relations = currentEntity.relations.filter(p => !relationsToRemove.includes(p.name))
		}
	}

	private updateEntityMapping (currentEntityMapping:EntityMapping, entityMapping:EntityMapping):void {
		if (!this.equalName(currentEntityMapping.mapping, entityMapping.mapping)) {
			currentEntityMapping.mapping = entityMapping.mapping
		}
		if (!this.equalName(currentEntityMapping.sequence, entityMapping.sequence)) {
			currentEntityMapping.sequence = entityMapping.sequence
		}
	}

	private addEntity (entities:Entity[], entityMapping:EntityMapping):void {
		const newEntity = this.helper.obj.clone(entityMapping)
		delete newEntity.mapping
		delete newEntity.sequence
		for (const property of newEntity.properties) {
			delete property.mapping
		}
		entities.push(newEntity)
	}

	private removeEntitiesAndProperties (schema:Schema, mappings:Mapping[], entitiesToRemove:string [], options:MatchOptions) {
		if (options.removeEntities) {
			// remove entities from domain
			for (const entityToRemove of entitiesToRemove) {
				const entity = schema.domain.entities.find(p => this.equalName(p.name, entityToRemove))
				if (entity) {
					// remove entity if not used in other mappings
					const existsInOtherMappings = schema.infrastructure?.mappings?.some(p => p.entities?.some(q => this.equalName(q.name, entityToRemove)))
					const existsInMappings = mappings.some(p => p.entities?.some(q => this.equalName(q.name, entityToRemove)))
					if (!existsInOtherMappings && existsInMappings) {
						schema.domain.entities = schema.domain.entities.filter(p => !this.equalName(p.name, entityToRemove))
					}
				}
			}
		}
	}

	private removeEntityMappingsAndProperties (entities:Entity[], currentMapping:Mapping, entitiesMapping:EntityMapping[], options:MatchOptions):string[] {
		const entitiesToRemove:string[] = []
		if (currentMapping.entities && (options.removeEntities || options.removeProperties)) {
			for (const currentEntityMapping of currentMapping.entities) {
				const entityMapping = entitiesMapping.find(p => this.equalName(p.mapping, currentEntityMapping.mapping))
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
		for (const currentProperty of currentEntity.properties) {
			const currentPropertyMapping = currentEntityMapping.properties.find(p => p.name === currentProperty.name)
			if (currentPropertyMapping) {
				// si existe la propiedad en el mapeo actual y no existe en el nuevo mapeo lo setea para eliminar
				if (!entityMapping.properties.some(p => this.equalName(p.mapping, currentPropertyMapping.mapping))) {
					propertiesToRemove.push(currentProperty.name)
				}
			// si no existe la propiedad en el mapeo actual , busca la propiedad en la entidad de dominio, si no existe la setea para eliminar
			} else if (!entityMapping.properties.some(p => this.equalName(p.name, currentEntity.name))) {
				propertiesToRemove.push(currentProperty.name)
			}
		}
		currentEntityMapping.properties = currentEntityMapping.properties.filter(p => !propertiesToRemove.includes(p.name))
		currentEntity.properties = currentEntity.properties.filter(p => !propertiesToRemove.includes(p.name))
	}

	private mergeValues (current:string[], change:string[]):void {
		const currentLowerCase = current.map(p => p.toLowerCase())
		const changeLowerCase = change.map(p => p.toLowerCase())
		const newValues = change.filter(p => !currentLowerCase.includes(p.toLowerCase()))
		const removeValues = current.filter(p => !changeLowerCase.includes(p.toLowerCase()))
		current.push(...newValues)
		current = current.filter(p => !removeValues.includes(p))
	}

	private equalName (name1?:string, name2?:string):boolean {
		if (name1 === undefined && name2 === undefined) return true
		if (name1 === undefined || name2 === undefined) return false
		return name1.toLowerCase() === name2.toLowerCase()
	}

	private entityName (name:string):string {
		return this.helper.str.capitalize(name)
	}
}
