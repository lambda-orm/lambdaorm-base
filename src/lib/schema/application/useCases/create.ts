import { Schema, EntityType } from '../../domain'
import { SchemaService } from '../services/schemaService'
import { Type } from 'typ3s'

export class CreateSchema {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly schemaService:SchemaService) {}

	public create (data: any):Schema
	public create (data: any[], name?:string):Schema
	public create (data: any | any[], name?:string):Schema {
		if (Array.isArray(data)) {
			if (typeof name !== 'string') {
				throw new Error('Argument name undefined')
			}
			const type = Type.type(data, { info: true, describe: true })
			return this._create([{ name, type }])
		} else if (typeof data === 'object') {
			const types: EntityType[] = []
			for (const key in data) {
				const type = Type.type(data[key], { info: true, describe: true })
				types.push({ name: key, type })
			}
			return this._create(types)
		} else {
			throw new Error('Invalid data')
		}
	}

	private _create (types?: EntityType[]):Schema {
		const schema = this.schemaService.newSchema()
		if (types && types.length > 0) {
			this.schemaService.addEntityTypes(schema, types)
		}
		return schema
	}
}
