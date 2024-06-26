import { Schema, SchemaError, SchemaData, SourceRule, Mapping, MatchOptions, InitializeSchemaArgs, DomainSchema, Entity, Enum, EntityMapping, Stage, SentenceInfo } from '../domain'
import { DataSourceConfigService } from './services/config/dataSourceConfigService'
import { MappingsConfigService } from './services/config/mappingsConfigService'
import { DomainConfigService } from './services/config/domainConfigService'
import { StageConfigService } from './services/config/stageConfigService'
import { ViewsConfigService } from './services/config/viewsConfigService'
import { RouteService } from './services/routeService'
import { SchemaFacade } from './facade'
import { OrmBaseH3lp } from '../../shared'
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
		private readonly helper: OrmBaseH3lp
	) {
		this.originalSchema = this.facade.create()
		this.schema = helper.obj.clone(this.originalSchema)
	}

	public async initialize (args: InitializeSchemaArgs): Promise<Schema> {
		const workspace = args.workspace || process.cwd()
		const schemaInfo = await this.facade.read(workspace)
		if (schemaInfo === null) {
			this.originalSchema = this.facade.create()
			if (await this.helper.fs.isDirectory(workspace)) {
				this.schemaPath = path.join(workspace, 'lambdaORM.yaml')
			} else {
				this.schemaPath = workspace
			}
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

	public async introspect (data: any | any[], name:string): Promise<SchemaData> {
		const schemaData = this.facade.introspect(this.originalSchema, data, name)
		if (this.schemaPath) {
			await this.facade.write(this.originalSchema, this.schemaPath)
		}
		this.schema = this.toSchema(this.originalSchema)
		return schemaData
	}

	public async match (mappings:Mapping[], options:MatchOptions = { removeEntities: true, removeProperties: true, removeRelations: true }): Promise<void> {
		this.facade.match(this.originalSchema, mappings, options)
		if (this.schemaPath) {
			await this.facade.write(this.originalSchema, this.schemaPath)
		}
		this.schema = this.toSchema(this.originalSchema)
	}

	public evalSourceRule (rule:SourceRule, info: SentenceInfo):boolean {
		return this.routeService.eval(rule, info)
	}

	public getSource (info: SentenceInfo, stage?: string):string {
		return this.routeService.getSource(info, stage)
	}

	public getSchemaSources (): { name: string; dialect: string }[] {
		return this.schema.infrastructure?.sources?.map(s => ({ name: s.name, dialect: s.dialect })) || []
	}

	public getSchemaSource (source:string): { name: string; dialect: string } {
		const sources = this.getSchemaSources()
		if (sources !== undefined) {
			return sources.find(s => s.name === source) || { name: source, dialect: 'unknown' }
		} else {
			return { name: source, dialect: 'unknown' }
		}
	}

	public getSchemaVersion (): { version: string } {
		return { version: this.schema.version || '0.0.0' }
	}

	public getSchemaDomain (): DomainSchema {
		return this.schema.domain
	}

	public getSchemaEntities (): Entity[] {
		return this.schema.domain.entities || []
	}

	public getSchemaEntity (entity: string): Entity | undefined {
		return this.schema.domain.entities.find(e => e.name === entity)
	}

	public getSchemaEnums (): Enum[] {
		return this.schema.domain.enums || []
	}

	public getSchemaEnum (_enum: string): Enum | undefined {
		return this.schema.domain.enums?.find(e => e.name === _enum)
	}

	public getSchemaMappings (): Mapping[] {
		return this.schema.infrastructure?.mappings || []
	}

	public getSchemaMapping (mapping: string): Mapping | undefined {
		if (this.schema.infrastructure === undefined || this.schema.infrastructure.mappings === undefined) {
			return undefined
		}
		return this.schema.infrastructure.mappings.find(m => m.name === mapping)
	}

	public getSchemaEntityMapping (mapping: string, entity: string): EntityMapping | undefined {
		if (this.schema.infrastructure === undefined || this.schema.infrastructure.mappings === undefined) {
			return undefined
		}
		return this.schema.infrastructure.mappings.find(m => m.name === mapping)?.entities?.find(e => e.name === entity)
	}

	public getSchemaStages (): Stage[] {
		return this.schema.infrastructure?.stages || []
	}

	public getSchemaStage (stage: string): Stage | undefined {
		if (this.schema.infrastructure === undefined || this.schema.infrastructure.stages === undefined) {
			return undefined
		}
		return this.schema.infrastructure?.stages.find(s => s.name === stage)
	}

	public getSchemaViews (): string[] {
		return this.schema.infrastructure?.views?.map(p => p.name) || []
	}

	private toSchema (originalSchema: Schema): Schema {
		const _schema = this.helper.obj.clone(originalSchema)
		this.facade.complete(_schema)
		return this.loadSchema.load(_schema)
	}
}
