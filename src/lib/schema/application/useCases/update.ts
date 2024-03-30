import { Type } from 'typ3s'
import { Schema } from '../../domain'
import { CreateEntitiesService } from '../services/createEntitiesService'
import { SchemaService } from '../services/schemaService'

export class UpdateSchema {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly schemaService:SchemaService,
		private readonly createEntitiesService:CreateEntitiesService) {}

	public update (schema: Schema, data: any | any[], name:string):Type {
		if (!data || typeof data !== 'object') {
			throw new Error('Invalid argument data')
		}
		if (typeof name !== 'string') {
			throw new Error('Argument name undefined')
		}
		const type = Type.type(data, { info: true, describe: true })
		const entities = this.createEntitiesService.getEntities(name, type)
		this.schemaService.updateEntities(schema, entities)
		return type
	}
}
