import { Schema, EntityType } from '../../domain'
import { SchemaService } from '../services/schemaService'

export class UpdateSchema {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly schemaService:SchemaService) {}

	public update (schema: Schema, types: EntityType[]):void {
		this.schemaService.addEntityTypes(schema, types)
	}
}
