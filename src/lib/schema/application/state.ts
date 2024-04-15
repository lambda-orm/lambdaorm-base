import { Schema, SchemaError, SchemaData, ClauseInfo, SourceRule, Mapping, MatchOptions, InitializeSchemaArgs } from '../domain'
import { DataSourceConfigService } from './services/config/dataSourceConfigService'
import { MappingsConfigService } from './services/config/mappingsConfigService'
import { DomainConfigService } from './services/config/domainConfigService'
import { StageConfigService } from './services/config/stageConfigService'
import { ViewsConfigService } from './services/config/viewsConfigService'
import { RouteService } from './services/routeService'
import { SchemaFacade } from './facade'
import { SchemaH3lp } from '../../shared'
import path from 'path'
import { LoadSchema } from './useCases/load'

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
		private readonly facade:SchemaFacade,
		private readonly loadSchema:LoadSchema,
		private readonly helper: SchemaH3lp
	) {
		this.originalSchema = this.facade.create()
		this.schema = helper.obj.clone(this.originalSchema)
	}

	public async initialize (args: InitializeSchemaArgs): Promise<Schema> {
		const workspace = args.workspace || process.cwd()
		const schemaInfo = await this.facade.read(workspace)
		if (schemaInfo === null) {
			this.originalSchema = this.facade.create()
			this.schemaPath = workspace
		} else {
			this.originalSchema = schemaInfo.schema
			this.schemaPath = schemaInfo.path
		}
		this.originalSchema = this.facade.initialize(this.originalSchema, args)
		if (this.schemaPath) {
			await this.facade.write(this.originalSchema, this.schemaPath)
		}
		if (args.dataPath) {
			await this.helper.fs.create(path.join(workspace, args.dataPath))
		}
		this.schema = this.toSchema(this.originalSchema)
		return this.schema
	}

	public async load (source: string | Schema): Promise<Schema> {
		if (typeof source === 'string') {
			const schemaInfo = await this.facade.read(source)
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
		this.schema = this.toSchema(this.originalSchema)
		return this.schema
	}

	public async updateFromData (data: any | any[], name:string): Promise<SchemaData> {
		const schemaData = this.facade.updateFromData(this.originalSchema, data, name)
		if (this.schemaPath) {
			await this.facade.write(this.originalSchema, this.schemaPath)
		}
		this.schema = this.toSchema(this.originalSchema)
		return schemaData
	}

	public async updateFromMapping (mappings:Mapping[], options:MatchOptions = { removeEntities: true, removeProperties: true, removeRelations: true }): Promise<void> {
		this.facade.updateFromMapping(this.originalSchema, mappings, options)
		if (this.schemaPath) {
			await this.facade.write(this.originalSchema, this.schemaPath)
		}
		this.schema = this.toSchema(this.originalSchema)
	}

	public evalSourceRule (rule:SourceRule, clauseInfo: ClauseInfo):boolean {
		return this.routeService.eval(rule, clauseInfo)
	}

	public getSource (clauseInfo: ClauseInfo, stage?: string):string {
		return this.routeService.getSource(clauseInfo, stage)
	}

	private toSchema (originalSchema: Schema): Schema {
		const _schema = this.helper.obj.clone(originalSchema)
		this.facade.complete(_schema)
		return this.loadSchema.load(_schema)
	}
}
