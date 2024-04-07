import { Expressions } from '3xpr'
import {
	DataSourceConfigService, SchemaState, MappingsConfigService, DomainConfigService, SchemaFacade, StageConfigService, ViewsConfigService,
	RouteService, LoadSchema
} from '../application'
import { FileSchemaService } from './fileSchemaService'
import { SchemaFileHelper } from './schemaFileHelper'
import { SchemaH3lp } from '../../shared'
export class SchemaStateBuilder {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly expressions: Expressions,
		private readonly facade:SchemaFacade,
		private readonly helper: SchemaH3lp
	) {}

	public build ():SchemaState {
		const source = new DataSourceConfigService()
		const model = new DomainConfigService()
		const mapping = new MappingsConfigService()
		const stage = new StageConfigService()
		const view = new ViewsConfigService()
		const routeService = new RouteService(stage, this.expressions)
		const loadSchema = new LoadSchema(source, model, mapping, stage, view, this.helper)
		const fileSchemaService = new FileSchemaService(new SchemaFileHelper(this.helper), this.helper)
		return new SchemaState(source, model, mapping, stage, view, routeService, this.facade, loadSchema, fileSchemaService, this.helper)
	}
}
