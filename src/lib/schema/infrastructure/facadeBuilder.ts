import { Expressions } from '3xpr'
import { SchemaFacade, CreateEntitiesService, SchemaExtender, CreateSchema, InitializeSchema, UpdateSchema, GetSchemaSchema, MatchSchema } from '../application'
import { SchemaService } from '../application/services/schemaService'
import { InterpretSchemaDataService } from '../application/services/interpretSchemaDataService'
import { OrmBaseH3lp } from '../../shared'
import { FileSchemaService } from './fileSchemaService'
import { SchemaFileHelper } from './schemaFileHelper'
export class SchemaFacadeBuilder {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly exp: Expressions,
		private readonly helper: OrmBaseH3lp
	) {}

	public build ():SchemaFacade {
		const schemaService = new SchemaService()
		const createEntitiesService = new CreateEntitiesService(this.helper.schema)
		const interpretSchemaDataService = new InterpretSchemaDataService(this.helper.schema)
		const extender = new SchemaExtender(this.exp, this.helper)
		const createSchema = new CreateSchema(schemaService)
		const initializeSchema = new InitializeSchema(schemaService)
		const updateSchema = new UpdateSchema(createEntitiesService)
		const matchSchema = new MatchSchema(schemaService, this.helper.schema)
		const getSchemaData = new GetSchemaSchema(interpretSchemaDataService)
		const fileSchemaService = new FileSchemaService(new SchemaFileHelper(this.helper), this.helper)
		return new SchemaFacade(schemaService, getSchemaData, extender, createSchema, initializeSchema, updateSchema, matchSchema, fileSchemaService)
	}
}
