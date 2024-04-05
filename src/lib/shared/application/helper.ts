import { H3lp } from 'h3lp'
import { SchemaHelper } from '../../schema/application'

export class SchemaH3lp extends H3lp {
	public schema:SchemaHelper
	constructor (h3lp: H3lp) {
		super(h3lp.utils, h3lp.val, h3lp.fs, h3lp.http, h3lp.obj, h3lp.str, h3lp.test, h3lp.array)
		this.schema = new SchemaHelper(this.str)
	}
}
