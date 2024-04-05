import { Expressions } from '3xpr'
import { SchemaFacade, CreateEntitiesService, SchemaExtender, CreateSchema, UpdateSchema, GetSchemaSchema, MatchSchema } from '../application'
import { SchemaService } from '../application/services/schemaService'
import { InterpretSchemaDataService } from '../application/services/interpretSchemaDataService'
import { Helper } from '../../shared'
export class SchemaFacadeBuilder {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly expressions: Expressions,
		private readonly helper: Helper
	) {}

	public build ():SchemaFacade {
		const schemaService = new SchemaService(this.helper)
		const createEntitiesService = new CreateEntitiesService(this.helper)
		const interpretSchemaDataService = new InterpretSchemaDataService(this.helper)
		const extender = new SchemaExtender(this.expressions, this.helper)
		const createSchema = new CreateSchema(schemaService)
		const updateSchema = new UpdateSchema(createEntitiesService)
		const matchSchema = new MatchSchema(schemaService, this.helper)
		const getSchemaData = new GetSchemaSchema(interpretSchemaDataService)
		return new SchemaFacade(schemaService, getSchemaData, extender, createSchema, updateSchema, matchSchema)
	}
}
