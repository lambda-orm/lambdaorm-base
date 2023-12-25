import { Schema } from '../../domain'
import { SchemaCreateService } from '../services/createService'

export class CreateSchema {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly schemaService:SchemaCreateService) {}

	public async create ():Promise<Schema> {
		return this.schemaService.newSchema()
	}
}
