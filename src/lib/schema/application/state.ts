import { Schema, SchemaError, SchemaData } from '../domain'
import { SchemaFacade } from './facade'
import { IFileSchemaService } from './ports/fileSchemaService'
import { H3lp } from 'h3lp'

export class SchemaState {
	public schema: Schema
	public originalSchema: Schema
	public schemaPath?: string
	constructor (public readonly facade:SchemaFacade,
		private readonly fileService:IFileSchemaService,
		private readonly helper: H3lp
	) {
		this.originalSchema = this.facade.create()
		this.schema = helper.obj.clone(this.originalSchema)
	}

	public async load (source: string | Schema): Promise<Schema> {
		if (typeof source === 'string') {
			const schemaInfo = await this.fileService.read(source)
			if (schemaInfo === null) {
				throw new SchemaError(`Schema: ${source} not found`)
			}
			this.originalSchema = schemaInfo.schema
			this.schemaPath = schemaInfo.path
		} else if (typeof source === 'object') {
			this.originalSchema = source
		} else {
			throw new SchemaError(`Schema: ${source} not supported`)
		}
		this.schema = this.helper.obj.clone(this.originalSchema)
		this.schema = this.facade.solve(this.schema)
		return this.schema
	}

	public async updateFromData (data: any | any[], name:string): Promise<SchemaData> {
		const schemaData = this.facade.updateFromData(this.originalSchema, data, name)
		if (this.schemaPath) {
			await this.fileService.write(this.originalSchema, this.schemaPath)
		}
		this.schema = this.helper.obj.clone(this.originalSchema)
		this.schema = this.facade.solve(this.schema)
		return schemaData
	}
}
