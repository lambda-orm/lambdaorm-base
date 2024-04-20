import { H3lp } from 'h3lp'
import { SchemaHelper } from '../../schema/infrastructure'
import { Logger } from '../application/ports/logger'
const YAML = require('js-yaml')
const UUID = require('uuid')
const SqlString = require('sqlstring')

class YamlWrapper {
	public load (yaml?:string|null):any {
		if (!yaml) return undefined
		return YAML.load(yaml)
	}

	public dump (obj?:any|null):string {
		return YAML.dump(obj)
	}
}

class SqlStringWrapper {
	public escapeId (name:string):string {
		return SqlString.escapeId(name)
	}

	public escape (name:string):string {
		return SqlString.escape(name)
	}

	public arrayToList (array:any[], timeZone:string):string {
		return SqlString.arrayToList(array, timeZone)
	}

	public format (sql:string, values:any[], stringifyObjects:string, timeZone:string):string {
		return SqlString.format(sql, values, stringifyObjects, timeZone)
	}

	public dateToString (date:Date, timeZone:string):string {
		return SqlString.dateToString(date, timeZone)
	}

	public bufferToString (buffer:Buffer):string {
		return SqlString.bufferToString(buffer)
	}

	public raw (sql:string):string {
		return SqlString.raw(sql)
	}
}

class UUIDWrapper {
	public uuidv4 ():string {
		return UUID.uuidv4()
	}

	public isUuid (id:string):boolean {
		return UUID.isUuid(id)
	}

	public empty ():string {
		return UUID.empty()
	}

	public fromString (text: string, namespace?: string): string {
		return UUID.fromString(text, namespace)
	}

	public jsonSchema ():any {
		return UUID.jsonSchema()
	}
}

export class SchemaH3lp extends H3lp {
	public schema:SchemaHelper
	public yaml:YamlWrapper
	public sqlString:SqlStringWrapper
	public uuid:UUIDWrapper
	constructor (h3lp: H3lp, public readonly logger:Logger) {
		super(h3lp.utils, h3lp.val, h3lp.fs, h3lp.http, h3lp.obj, h3lp.str, h3lp.test, h3lp.array)
		this.schema = new SchemaHelper(this.str)
		this.yaml = new YamlWrapper()
		this.sqlString = new SqlStringWrapper()
		this.uuid = new UUIDWrapper()
	}
}
