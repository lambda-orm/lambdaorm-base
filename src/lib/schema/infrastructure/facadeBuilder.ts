import { Expressions } from '3xpr'
import {
	DataSourceConfigService, MappingsConfigService, DomainConfigService, SchemaFacade, StageConfigService, ViewsConfigService,
	SchemaService, RouteService, SchemaExtender, LoadSchema, CreateSchema, GetSchema, CompleteSchema, UpdateSchema
} from '../application'
import { FileSchemaReader } from './fileSchemaReader'
import { SchemaFileHelper } from './schemaFileHelper'
import { H3lp } from 'h3lp'

export class SchemaFacadeBuilder {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly expressions: Expressions,
		private readonly helper: H3lp
	) {}

	public build ():SchemaFacade {
		const source = new DataSourceConfigService()
		const model = new DomainConfigService()
		const mapping = new MappingsConfigService()
		const stage = new StageConfigService()
		const view = new ViewsConfigService()
		const schemaService = new SchemaService(this.helper)
		const routeService = new RouteService(stage, this.expressions)
		const extender = new SchemaExtender(this.expressions, this.helper)
		const loadSchema = new LoadSchema(source, model, mapping, stage, view, extender, this.helper)
		const createSchema = new CreateSchema(schemaService)
		const updateSchema = new UpdateSchema(schemaService)
		const getSchema = new GetSchema(new FileSchemaReader(new SchemaFileHelper(this.helper), this.helper))
		const completeSchema = new CompleteSchema(schemaService)
		return new SchemaFacade(source, model, mapping, stage, view, schemaService, routeService, extender, createSchema, updateSchema, loadSchema, getSchema, completeSchema)
	}
}
