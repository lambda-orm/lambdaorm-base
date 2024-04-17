import { Schema, SchemaData, Dialect, Mapping, MatchOptions, InitializeSchemaArgs, SchemaInfo } from '../domain'
import { SchemaExtender } from './services/schemaExtender'
import { CreateSchema } from './useCases/create'
import { UpdateSchema } from './useCases/update'
import { SchemaService } from './services/schemaService'
import { GetSchemaSchema } from './useCases/getSchemaData'
import { Type } from 'typ3s'
import { MatchSchema } from './useCases/match'
import { InitializeSchema } from './useCases/initialize'
import { IFileSchemaService } from './ports/fileSchemaService'
export class SchemaFacade {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		public readonly schemaService:SchemaService,
		private readonly getSchemaData: GetSchemaSchema,
		private readonly extender:SchemaExtender,
		private readonly createSchema: CreateSchema,
		private readonly initializeSchema: InitializeSchema,
		private readonly updateSchema: UpdateSchema,
		private readonly matchSchema: MatchSchema,
		private readonly fileService:IFileSchemaService
	) {}

	public create (dialect?: Dialect, connection?: any): Schema {
		return this.createSchema.create(dialect, connection)
	}

	public initialize (schema: Schema, args: InitializeSchemaArgs): Schema {
		return this.initializeSchema.initialize(schema, args)
	}

	public introspect (schema: Schema, data: any | any[], name:string): SchemaData {
		const type = this.updateSchema.update(schema, data, name)
		const schemaData = this.schemaData(data, name, type)
		return schemaData
	}

	public updateFromMapping (schema: Schema, mappings:Mapping[], options:MatchOptions = {}): void {
		this.matchSchema.match(schema, mappings, options)
	}

	public schemaData (source:any, name:string, type: Type): SchemaData {
		return this.getSchemaData.getData(source, name, type)
	}

	public complete (schema: Schema): void {
		this.schemaService.complete(schema)
		this.extender.complete(schema)
		this.extender.extend(schema)
	}

	public async read (workspace:string) : Promise<SchemaInfo|null> {
		return await this.fileService.read(workspace)
	}

	public async write (schema:Schema, path:string) : Promise<void> {
		await this.fileService.write(schema, path)
	}
}
