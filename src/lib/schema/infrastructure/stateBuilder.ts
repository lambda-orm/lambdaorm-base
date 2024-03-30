import { SchemaFacade, SchemaState } from '../application'
import { FileSchemaService } from './fileSchemaService'
import { SchemaFileHelper } from './schemaFileHelper'
import { H3lp } from 'h3lp'
export class SchemaStateBuilder {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly facade:SchemaFacade,
		private readonly helper: H3lp
	) {}

	public build ():SchemaState {
		const fileSchemaService = new FileSchemaService(new SchemaFileHelper(this.helper), this.helper)
		return new SchemaState(this.facade, fileSchemaService, this.helper)
	}
}
