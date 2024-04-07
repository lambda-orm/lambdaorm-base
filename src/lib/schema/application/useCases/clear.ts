import { Entity, EntityMapping, Schema } from '../../domain'
import { SchemaHelper } from '../services/helper'

export class ClearSchema {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly helper: SchemaHelper) {}

	public clear (schema: Schema) {
		for (const entity of schema.domain.entities) {
			this.clearEntity(entity)
		}
		if (schema.domain.enums && schema.domain.enums.length === 0) schema.domain.enums = undefined
		if (schema.infrastructure) {
			if (schema.infrastructure.paths) {
				if (schema.infrastructure.paths.src === '') schema.infrastructure.paths.src = undefined
				if (schema.infrastructure.paths.data === '') schema.infrastructure.paths.data = undefined
				if (schema.infrastructure.paths.domain === '') schema.infrastructure.paths.domain = undefined
			}
			if (schema.infrastructure.mappings && schema.infrastructure.mappings.length === 0) {
				schema.infrastructure.mappings = undefined
			} else if (schema.infrastructure.mappings) {
				if (schema.infrastructure.mappings.length === 0) {
					schema.infrastructure.mappings = undefined
				} else {
					for (const mapping of schema.infrastructure.mappings) {
						if (mapping.extends === '') mapping.extends = undefined
						if (mapping.mapping === '') mapping.mapping = undefined
						if (mapping.entities && mapping.entities.length === 0) {
							mapping.entities = undefined
						} else if (mapping.entities) {
							for (const entityMapping of mapping.entities) {
								this.clearEntityMapping(entityMapping)
							}
						}
					}
				}
			}
			if (schema.infrastructure.views && schema.infrastructure.views.length === 0) schema.infrastructure.views = undefined
			if (schema.infrastructure.sources && schema.infrastructure.sources.length === 0) schema.infrastructure.sources = undefined
			if (schema.infrastructure.stages && schema.infrastructure.stages.length === 0) schema.infrastructure.stages = undefined
		}
	}

	private clearEntity (entity: Entity) {
		if (entity.abstract === false) entity.abstract = undefined
		if (entity.singular === '') entity.singular = undefined
		if (entity.view === false) entity.view = undefined
		if (entity.composite === false) entity.composite = undefined
		if (entity.intermediate === false) entity.intermediate = undefined
		if (entity.hadReadExps === false) entity.hadReadExps = undefined
		if (entity.hadWriteExps === false) entity.hadWriteExps = undefined
		if (entity.hadReadValues === false) entity.hadReadValues = undefined
		if (entity.hadWriteValues === false) entity.hadWriteValues = undefined
		if (entity.hadDefaults === false) entity.hadDefaults = undefined
		if (entity.hadViewReadExp === false) entity.hadViewReadExp = undefined
		if (entity.extends === '') entity.extends = undefined
		if (entity.required && entity.required.length === 0) entity.required = undefined
		if (entity.primaryKey && entity.primaryKey.length === 0) entity.primaryKey = undefined
		if (entity.uniqueKey && entity.uniqueKey.length === 0) entity.uniqueKey = undefined
		if (entity.indexes && entity.indexes.length === 0) entity.indexes = undefined
		if (entity.relations && entity.relations.length === 0) {
			entity.relations = undefined
		} else if (entity.relations) {
			for (const relation of entity.relations) {
				if (relation.composite === false) relation.composite = undefined
				if (relation.weak === false) relation.weak = undefined
				if (relation.target === '') relation.target = undefined
			}
		}
		if (entity.constraints && entity.constraints.length === 0) entity.constraints = undefined
		if (entity.dependents && entity.dependents.length === 0) entity.dependents = undefined
		for (const property of entity.properties || []) {
			if (property.length === 0 || (property.type === 'string' && property.length === this.helper.DEFAULT_LENGTH)) property.length = undefined
			if (property.required === false) property.required = undefined
			if (property.primaryKey === false) property.primaryKey = undefined
			if (property.autoIncrement === false) property.autoIncrement = undefined
			if (property.view === false) property.view = undefined
			if (property.readExp === '') property.readExp = undefined
			if (property.writeValue === '') property.writeValue = undefined
			if (property.readValue === '') property.readValue = undefined
			if (property.writeExp === '') property.writeExp = undefined
			if (property.default === '') property.default = undefined
			if (property.enum === '') property.enum = undefined
			if (property.key === '') property.key = undefined
		}
	}

	private clearEntityMapping (entity: EntityMapping) {
		if (entity.extends === '') entity.extends = undefined
		if (entity.mapping === '') entity.mapping = undefined
		if (entity.filter === '') entity.filter = undefined
		if (entity.hadKeys === false) entity.hadKeys = undefined
		if (entity.hadReadMappingExp === false) entity.hadReadMappingExp = undefined
		if (entity.sequence === '') entity.sequence = undefined
	}
}
