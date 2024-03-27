import { Schema } from '../../domain'
import { CreateSchemaService } from '../services/createSchemaService'
import { Type } from 'typ3s'
import { SchemaService } from '../services/schemaService'

export class CreateSchema {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly schemaService:SchemaService,
		private readonly createSchemaService:CreateSchemaService
	) {}

	public create (data: any | any[], name:string):[Schema, Type] {
		if (!data || typeof data !== 'object') {
			throw new Error('Invalid argument data')
		}
		if (typeof name !== 'string') {
			throw new Error('Argument name undefined')
		}
		const type = Type.type(data, { info: true, describe: true })
		const types = [{ name, type }]
		const schema = this.schemaService.newSchema()
		if (types && types.length > 0) {
			this.createSchemaService.addEntityType(schema, name, type)
		}
		return [schema, type]
	}

	// const source = {}
	// if (Array.isArray(data)) {
	// const type = Type.type(data, { info: true, describe: true })
	// source[name] = data
	// const types = [{ name, type }]
	// return [this._create(types), types]
	// } else if (typeof data === 'object') {
	// const types: EntityType[] = []
	// for (const key in data) {
	// const type = Type.type(data[key], { info: true, describe: true })
	// types.push({ name: key, type })
	// source[key] = data[key]
	// }
	// return [this._create(types), types]
	// }
	// }
	// private _create (types: EntityType[]):Schema {
	// const schema = this.schemaService.newSchema()
	// if (types && types.length > 0) {
	// this.createSchemaService.addEntityType(schema, types)
	// }
	// return schema
	// }
}
