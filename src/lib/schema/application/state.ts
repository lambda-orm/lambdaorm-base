import { Schema, SchemaError, SchemaData, ClauseInfo, SourceRule, Mapping, MatchOptions } from '../domain'
import { DataSourceConfigService } from './services/config/dataSourceConfigService'
import { MappingsConfigService } from './services/config/mappingsConfigService'
import { DomainConfigService } from './services/config/domainConfigService'
import { StageConfigService } from './services/config/stageConfigService'
import { ViewsConfigService } from './services/config/viewsConfigService'
import { RouteService } from './services/routeService'
import { LoadSchema } from './useCases/load'
import { SchemaService } from './services/schemaService'
import { SchemaFacade } from './facade'
import { IFileSchemaService } from './ports/fileSchemaService'
import { H3lp } from 'h3lp'

export class SchemaState {
	public schema: Schema
	public originalSchema: Schema
	public schemaPath?: string
	constructor (
		public readonly source:DataSourceConfigService,
		public readonly domain:DomainConfigService,
		public readonly mapping:MappingsConfigService,
		public readonly stage:StageConfigService,
		public readonly view:ViewsConfigService,
		private readonly routeService:RouteService,
		private readonly loadSchema: LoadSchema,
		private readonly facade:SchemaFacade,
		private readonly schemaService:SchemaService,
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
		this.schema = this.solve(this.schema)
		return this.schema
	}

	public async updateFromData (data: any | any[], name:string): Promise<SchemaData> {
		const schemaData = this.facade.updateFromData(this.originalSchema, data, name)
		if (this.schemaPath) {
			await this.fileService.write(this.originalSchema, this.schemaPath)
		}
		this.schema = this.helper.obj.clone(this.originalSchema)
		this.schema = this.solve(this.schema)
		return schemaData
	}

	public async updateFromMapping (mappings:Mapping[]): Promise<void> {
		const options:MatchOptions = { removeEntities: true, removeProperties: true }
		this.facade.updateFromMapping(this.originalSchema, mappings, options)
		if (this.schemaPath) {
			await this.fileService.write(this.originalSchema, this.schemaPath)
		}
		this.schema = this.helper.obj.clone(this.originalSchema)
		this.schema = this.solve(this.schema)
	}

	public evalSourceRule (rule:SourceRule, clauseInfo: ClauseInfo):boolean {
		return this.routeService.eval(rule, clauseInfo)
	}

	public getSource (clauseInfo: ClauseInfo, stage?: string):string {
		return this.routeService.getSource(clauseInfo, stage)
	}

	private solve (schema: Schema): Schema {
		this.schemaService.complete(schema)
		return this.loadSchema.load(schema)
	}
}
