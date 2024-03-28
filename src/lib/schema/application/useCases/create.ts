import { Schema } from '../../domain'
import { CreateEntitiesService } from '../services/createEntitiesService'
import { Type } from 'typ3s'
import { SchemaService } from '../services/schemaService'

export class CreateSchema {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly schemaService:SchemaService,
		private readonly createEntitiesService:CreateEntitiesService
	) {}

	public create (data: any | any[], name:string):[Schema, Type] {
		if (!data || typeof data !== 'object') {
			throw new Error('Invalid argument data')
		}
		if (typeof name !== 'string') {
			throw new Error('Argument name undefined')
		}
		const type = Type.type(data, { info: true, describe: true })
		const entities = this.createEntitiesService.getEntities(name, type)
		const schema = this.schemaService.newSchema()
		this.schemaService.updateSchema(schema, entities)
		return [schema, type]
	}
}
