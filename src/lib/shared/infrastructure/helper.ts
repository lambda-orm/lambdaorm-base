import { H3lp, IStringHelper } from 'h3lp'
import { ExprH3lp } from '3xpr'
import { SchemaHelper } from '../../schema/infrastructure'
import { Logger } from '../application/ports/logger'
const YAML = require('js-yaml')
const UUID = require('uuid')
const SqlString = require('sqlstring')
const LUXON = require('luxon')

class YamlWrapper {
	public load (yaml?:string|null):any {
		if (!yaml) return undefined
		return YAML.load(yaml)
	}

	public dump (obj?:any|null, options?:any):string {
		return YAML.dump(obj, options)
	}
}

class SqlStringHelper {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly str:IStringHelper) {}

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

	public dateToString (date:Date, timeZone:string = 'local'):string {
		return SqlString.dateToString(date, timeZone)
	}

	public dateFormat (value:any, format:string = 'ISO'):string {
		const iso = new Date(value).toISOString()
		if (format === 'ISO') {
			return LUXON.DateTime.fromISO(iso).toISO()
		} else {
			return LUXON.DateTime.fromISO(iso).toFormat(format)
		}
	}

	public bufferToString (buffer:Buffer):string {
		return SqlString.bufferToString(buffer)
	}

	public raw (sql:string):string {
		return SqlString.raw(sql)
	}

	public transformParameter (name:string) {
		return this.str.replace(name, '.', '_')
		// con la siguiente opción falla cuando se hace value=Helper.str.replace(value,"\\'","\\''")
		// return string.replace(new RegExp(search, 'g'), replace)
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

export class OrmBaseH3lp extends ExprH3lp {
	public schema:SchemaHelper
	public yaml:YamlWrapper
	public sqlString:SqlStringHelper
	public uuid:UUIDWrapper
	constructor (h3lp: H3lp, public readonly logger:Logger) {
		super(h3lp)
		this.schema = new SchemaHelper(this.str)
		this.yaml = new YamlWrapper()
		this.sqlString = new SqlStringHelper(h3lp.str)
		this.uuid = new UUIDWrapper()
	}
}
