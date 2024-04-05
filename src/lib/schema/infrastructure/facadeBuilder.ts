import { Expressions } from '3xpr'
import { SchemaFacade, CreateEntitiesService, SchemaExtender, CreateSchema, UpdateSchema, GetSchemaSchema, MatchSchema } from '../application'
import { SchemaService } from '../application/services/schemaService'
import { InterpretSchemaDataService } from '../application/services/interpretSchemaDataService'
import { SchemaH3lp } from '../../shared'
export class SchemaFacadeBuilder {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly expressions: Expressions,
		private readonly helper: SchemaH3lp
	) {}

	public build ():SchemaFacade {
		const schemaService = new SchemaService()
		const createEntitiesService = new CreateEntitiesService(this.helper.schema)
		const interpretSchemaDataService = new InterpretSchemaDataService(this.helper.schema)
		const extender = new SchemaExtender(this.expressions, this.helper)
		const createSchema = new CreateSchema(schemaService)
		const updateSchema = new UpdateSchema(createEntitiesService)
		const matchSchema = new MatchSchema(schemaService, this.helper.schema)
		const getSchemaData = new GetSchemaSchema(interpretSchemaDataService)
		return new SchemaFacade(schemaService, getSchemaData, extender, createSchema, updateSchema, matchSchema)
	}
}
