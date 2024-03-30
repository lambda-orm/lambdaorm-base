import { ClauseInfo, SourceRule, Schema, SchemaData, Dialect } from '../domain'
import { DataSourceConfigService } from './services/config/dataSourceConfigService'
import { MappingsConfigService } from './services/config/mappingsConfigService'
import { DomainConfigService } from './services/config/domainConfigService'
import { StageConfigService } from './services/config/stageConfigService'
import { ViewsConfigService } from './services/config/viewsConfigService'
import { RouteService } from './services/routeService'
import { SchemaExtender } from './services/schemaExtender'
import { CompleteSchema } from './useCases/complete'
import { LoadSchema } from './useCases/load'
import { CreateSchema } from './useCases/create'
import { UpdateSchema } from './useCases/update'
import { SchemaService } from './services/schemaService'
import { GetSchemaSchema } from './useCases/getSchemaData'
import { Type } from 'typ3s'
export class SchemaFacade {
	// eslint-disable-next-line no-useless-constructor
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
		private readonly completeSchema:CompleteSchema
	) {}

	public create (dialect?: Dialect, connection?: any): Schema {
		return this.createSchema.create(dialect, connection)
	}

	public updateFromData (schema: Schema, data: any | any[], name:string): SchemaData {
		const type = this.updateSchema.update(schema, data, name)
		const schemaData = this.schemaData(data, name, type)
		return schemaData
	}

	public schemaData (source:any, name:string, type: Type): SchemaData {
		return this.getSchemaData.getData(source, name, type)
	}

	public solve (schema: Schema): Schema {
		this.completeSchema.complete(schema)
		return this.loadSchema.load(schema)
	}

	public complete (schema: Schema): void {
		this.extender.complete(schema)
	}

	public evalSourceRule (rule:SourceRule, clauseInfo: ClauseInfo):boolean {
		return this.routeService.eval(rule, clauseInfo)
	}

	public getSource (clauseInfo: ClauseInfo, stage?: string):string {
		return this.routeService.getSource(clauseInfo, stage)
	}
}
