import { Expressions } from '3xpr'
import {
	DataSourceConfigService, SchemaState, MappingsConfigService, DomainConfigService, SchemaFacade, StageConfigService, ViewsConfigService,
	RouteService, SchemaExtender, LoadSchema
} from '../application'
import { FileSchemaService } from './fileSchemaService'
import { SchemaFileHelper } from './schemaFileHelper'
import { H3lp } from 'h3lp'
import { SchemaService } from '../application/services/schemaService'
export class SchemaStateBuilder {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly expressions: Expressions,
		private readonly facade:SchemaFacade,
		private readonly helper: H3lp
	) {}

	public build ():SchemaState {
		const source = new DataSourceConfigService()
		const model = new DomainConfigService()
		const mapping = new MappingsConfigService()
		const stage = new StageConfigService()
		const view = new ViewsConfigService()
		const extender = new SchemaExtender(this.expressions, this.helper)
		const routeService = new RouteService(stage, this.expressions)
		const loadSchema = new LoadSchema(source, model, mapping, stage, view, extender, this.helper)
		const fileSchemaService = new FileSchemaService(new SchemaFileHelper(this.helper), this.helper)
		const schemaService = new SchemaService(this.helper)
		return new SchemaState(source, model, mapping, stage, view, routeService, loadSchema, this.facade, schemaService, fileSchemaService, this.helper)
	}
}
