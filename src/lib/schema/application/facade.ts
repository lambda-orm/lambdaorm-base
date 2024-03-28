import { ClauseInfo, SourceRule, Schema, SchemaError, SchemaData, Dialect } from '../domain'
import { DataSourceConfigService } from './services/config/dataSourceConfigService'
import { MappingsConfigService } from './services/config/mappingsConfigService'
import { DomainConfigService } from './services/config/domainConfigService'
import { StageConfigService } from './services/config/stageConfigService'
import { ViewsConfigService } from './services/config/viewsConfigService'
import { RouteService } from './services/routeService'
import { SchemaExtender } from './services/schemaExtender'
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
	public schemaPath?: string
	constructor (
		public readonly source:DataSourceConfigService,
		public readonly domain:DomainConfigService,
		public readonly mapping:MappingsConfigService,
		public readonly stage:StageConfigService,
		public readonly view:ViewsConfigService,
		public readonly schemaService:SchemaService,
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

	public new (dialect?: Dialect, connection?: any): Schema {
		const schema = this.schemaService.newSchema()
		if (dialect && connection) {
			schema.infrastructure = this.schemaService.newInfrastructure()
			schema.infrastructure.sources = []
			schema.infrastructure.sources.push({ name: 'default', mapping: 'default', dialect, connection })
			schema.infrastructure.mappings = [{ name: 'default', entities: [] }]
		}
		return schema
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

	public update (schema: Schema, data: any | any[], name:string): Type {
		return this.updateSchema.update(schema, data, name)
	}

	public schemaData (source:any, name:string, type: Type): SchemaData {
		return this.getSchemaData.getData(source, name, type)
	}

	public createAndSchemaData (data: any | any[], name: string):[Schema, SchemaData] {
		const [schema, type] = this.create(data, name)
		const schemaData = this.schemaData(data, name, type)
		return [schema, schemaData]
	}

	public updateAndSchemaData (schema: Schema, data: any | any[], name: string):SchemaData {
		const type = this.updateSchema.update(schema, data, name)
		const schemaData = this.schemaData(data, name, type)
		return schemaData
	}

	public async get (source: string): Promise<Schema|null> {
		const schemaInfo = await this.getSchema.get(source)
		if (schemaInfo === null) {
			return null
		}
		return schemaInfo.schema
	}

	public async initialize (source: string | Schema): Promise<Schema> {
		const schemaInfo = await this.getSchema.get(source)
		if (schemaInfo === null) {
			throw new SchemaError(`Schema: ${source} not supported`)
		}
		this.schema = schemaInfo.schema
		this.schemaPath = schemaInfo.path
		this.completeSchema.complete(this.schema)
		this.schema = this.loadSchema.load(this.schema)
		return this.schema
	}

	public complete (schema: Schema): void {
		this.extender.complete(schema)
	}
}
