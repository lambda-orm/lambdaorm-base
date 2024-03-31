import { Expressions } from '3xpr'
import { SchemaFacade, CreateEntitiesService, SchemaExtender, CreateSchema, UpdateSchema, GetSchemaSchema } from '../application'
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
		const schemaService = new SchemaService(this.helper)
		const createEntitiesService = new CreateEntitiesService(schemaService, this.helper)
		const interpretSchemaDataService = new InterpretSchemaDataService(schemaService, this.helper)
		const extender = new SchemaExtender(this.expressions, this.helper)
		const createSchema = new CreateSchema(schemaService)
		const updateSchema = new UpdateSchema(schemaService, createEntitiesService)
		const getSchemaData = new GetSchemaSchema(interpretSchemaDataService)
		return new SchemaFacade(schemaService, getSchemaData, extender, createSchema, updateSchema)
	}
}
