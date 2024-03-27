import { Type } from 'typ3s'
import { Schema } from '../../domain'
import { CreateSchemaService } from '../services/createSchemaService'

export class UpdateSchema {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly createSchemaService:CreateSchemaService) {}

	public update (schema: Schema, name:string, type: Type):void {
		this.createSchemaService.addEntityType(schema, name, type)
	}
}
