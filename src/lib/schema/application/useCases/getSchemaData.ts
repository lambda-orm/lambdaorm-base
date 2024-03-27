import { Type } from 'typ3s'
import { SchemaData } from '../../domain'
import { InterpretSchemaDataService } from '../services/interpretSchemaDataService'

export class GetSchemaSchema {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly interpretSchemaDataService:InterpretSchemaDataService
	) {}

	public getData (data:any| any[], name:string, type: Type): SchemaData {
		const schemaData = { entities: [] }
		this.interpretSchemaDataService.completeSchemaData(data, name, type, schemaData)
		return schemaData
	}
}
