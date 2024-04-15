import { Dialect, Schema } from '../../domain'
import { SchemaService } from '../services/schemaService'

export class CreateSchema {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly schemaService:SchemaService
	) {}

	public create (dialect?:Dialect, connection?:any):Schema {
		const schema = this.schemaService.newSchema()
		if (dialect && connection) {
			schema.infrastructure = this.schemaService.newInfrastructure()
			schema.infrastructure.sources = []
			schema.infrastructure.sources.push({ name: 'default', mapping: 'default', dialect, connection })
			schema.infrastructure.mappings = [{ name: 'default', entities: [] }]
		}
		return schema
	}
}
