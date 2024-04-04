import { H3lp, IStringHelper } from 'h3lp'

export class SchemaHelper {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly str:IStringHelper) {}

	public equalName (name1?:string, name2?:string):boolean {
		if (name1 === undefined && name2 === undefined) return true
		if (name1 === undefined || name2 === undefined) return false
		return name1.toLowerCase() === name2.toLowerCase()
	}

	public entityName (name:string):string {
		return this.str.capitalize(name)
	}
}

export class Helper extends H3lp {
	public schema:SchemaHelper
	constructor (h3lp: H3lp) {
		super(h3lp.utils, h3lp.val, h3lp.fs, h3lp.http, h3lp.obj, h3lp.str, h3lp.test, h3lp.array)
		this.schema = new SchemaHelper(this.str)
	}
}
