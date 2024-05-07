import { Expressions } from '3xpr'
import {
	DataSourceConfigService, SchemaState, MappingsConfigService, DomainConfigService, SchemaFacade, StageConfigService, ViewsConfigService,
	RouteService, LoadSchema
} from '../application'
import { OrmBaseH3lp } from '../../shared'
export class SchemaStateBuilder {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly exp: Expressions,
		private readonly facade:SchemaFacade,
		private readonly helper: OrmBaseH3lp
	) {}

	public build ():SchemaState {
		const source = new DataSourceConfigService()
		const model = new DomainConfigService()
		const mapping = new MappingsConfigService()
		const stage = new StageConfigService()
		const view = new ViewsConfigService()
		const routeService = new RouteService(stage, this.exp)
		const loadSchema = new LoadSchema(source, model, mapping, stage, view, this.helper)
		return new SchemaState(source, model, mapping, stage, view, routeService, this.facade, loadSchema, this.helper)
	}
}
