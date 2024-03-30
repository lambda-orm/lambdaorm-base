import { Expressions } from '3xpr'
import {
	DataSourceConfigService, MappingsConfigService, DomainConfigService, SchemaFacade, StageConfigService, ViewsConfigService,
	CreateEntitiesService, RouteService, SchemaExtender, LoadSchema, CreateSchema, CompleteSchema, UpdateSchema, GetSchemaSchema
} from '../application'
import { H3lp } from 'h3lp'
import { SchemaService } from '../application/services/schemaService'
import { InterpretSchemaDataService } from '../application/services/interpretSchemaDataService'
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
		const createEntitiesService = new CreateEntitiesService(schemaService, this.helper)
		const interpretSchemaDataService = new InterpretSchemaDataService(schemaService, this.helper)
		const routeService = new RouteService(stage, this.expressions)
		const extender = new SchemaExtender(this.expressions, this.helper)
		const loadSchema = new LoadSchema(source, model, mapping, stage, view, extender, this.helper)
		const createSchema = new CreateSchema(schemaService)
		const updateSchema = new UpdateSchema(schemaService, createEntitiesService)
		const completeSchema = new CompleteSchema(schemaService)
		const getSchemaData = new GetSchemaSchema(interpretSchemaDataService)
		return new SchemaFacade(source, model, mapping, stage, view, schemaService, getSchemaData, routeService, extender, createSchema, updateSchema, loadSchema, completeSchema)
	}
}
