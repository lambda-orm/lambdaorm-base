import { ClauseInfo, SourceRule, Schema, SchemaError, SchemaData } from '../domain'
import { DataSourceConfigService } from './services/config/dataSourceConfigService'
import { MappingsConfigService } from './services/config/mappingsConfigService'
import { DomainConfigService } from './services/config/domainConfigService'
import { StageConfigService } from './services/config/stageConfigService'
import { ViewsConfigService } from './services/config/viewsConfigService'
import { RouteService } from './services/routeService'
import { SchemaExtender } from './services/schemaExtender'
import { CreateSchemaService } from './services/createSchemaService'
import { CompleteSchema } from './useCases/complete'
import { GetSchema } from './useCases/get'
import { LoadSchema } from './useCases/load'
import { CreateSchema } from './useCases/create'
import { UpdateSchema } from './useCases/update'
import { SchemaService } from './services/schemaService'
import { GetSchemaSchema } from './useCases/getSchemaData'
import { Type } from 'typ3s'
export class SchemaFacade {
	public schema: Schema
	constructor (
		public readonly source:DataSourceConfigService,
		public readonly domain:DomainConfigService,
		public readonly mapping:MappingsConfigService,
		public readonly stage:StageConfigService,
		public readonly view:ViewsConfigService,
		public readonly schemaService:SchemaService,
		private readonly createSchemaService:CreateSchemaService,
		private readonly getSchemaData: GetSchemaSchema,
		private readonly routeService:RouteService,
		private readonly extender:SchemaExtender,
		private readonly createSchema: CreateSchema,
		private readonly updateSchema: UpdateSchema,
		private readonly loadSchema: LoadSchema,
		private readonly getSchema: GetSchema,
		private readonly completeSchema:CompleteSchema
	) {
		this.schema = this.schemaService.newSchema()
	}

	public evalSourceRule (rule:SourceRule, clauseInfo: ClauseInfo):boolean {
		return this.routeService.eval(rule, clauseInfo)
	}

	public getSource (clauseInfo: ClauseInfo, stage?: string):string {
		return this.routeService.getSource(clauseInfo, stage)
	}

	public create (data: any | any[], name:string):[Schema, Type] {
		return this.createSchema.create(data, name)
	}

	public update (schema: Schema, name:string, type: Type): void {
		this.updateSchema.update(schema, name, type)
	}

	public schemaData (source:any, name:string, type: Type): SchemaData {
		return this.getSchemaData.getData(source, name, type)
	}

	public createAndSchemaData (data: any | any[], name: string):[Schema, SchemaData] {
		const [schema, type] = this.create(data, name)
		const schemaData = this.schemaData(data, name, type)
		return [schema, schemaData]
	}

	public async get (source: string): Promise<Schema|null> {
		return this.getSchema.get(source)
	}

	public async initialize (source: string | Schema): Promise<Schema> {
		const schema = await this.getSchema.get(source)
		if (schema === null) {
			throw new SchemaError(`Schema: ${source} not supported`)
		}
		this.completeSchema.complete(schema)
		this.schema = this.loadSchema.load(schema)
		return this.schema
	}

	public complete (schema: Schema): void {
		this.extender.complete(schema)
	}
}
