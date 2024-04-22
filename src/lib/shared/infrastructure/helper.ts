import { H3lp, IStringHelper } from 'h3lp'
import { ExprH3lp } from '3xpr'
import { SchemaHelper } from '../../schema/infrastructure'
import { Logger } from '../application/ports/logger'
import { SentenceAction, SentenceCategory, SentenceInfo, SentenceType } from '../../schema/domain'
const YAML = require('js-yaml')
const UUID = require('uuid')
const SqlString = require('sqlstring')
const LUXON = require('luxon')

export class YamlWrapper {
	public load (yaml?:string|null):any {
		if (!yaml) return undefined
		return YAML.load(yaml)
	}

	public dump (obj?:any|null, options?:any):string {
		return YAML.dump(obj, options)
	}
}

export class SqlHelper {
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

	public getInfo (action:SentenceAction, entity:string): SentenceInfo {
		switch (action) {
		case SentenceAction.select:
			return { entity, action, category: SentenceCategory.select, type: SentenceType.dql }
		case SentenceAction.insert:
			return { entity, action, category: SentenceCategory.insert, type: SentenceType.dml }
		case SentenceAction.insertConditional:
			return { entity, action, category: SentenceCategory.insert, type: SentenceType.dml }
		case SentenceAction.update:
			return { entity, action, category: SentenceCategory.update, type: SentenceType.dml }
		case SentenceAction.delete:
			return { entity, action, category: SentenceCategory.delete, type: SentenceType.dml }
		case SentenceAction.merge:
			return { entity, action, category: SentenceCategory.upsert, type: SentenceType.dml }
		case SentenceAction.bulkInsert:
			return { entity, action, category: SentenceCategory.insert, type: SentenceType.dml }
		case SentenceAction.bulkDelete:
			return { entity, action, category: SentenceCategory.delete, type: SentenceType.dml }
		case SentenceAction.upsert:
			return { entity, action, category: SentenceCategory.upsert, type: SentenceType.dml }
		case SentenceAction.bulkMerge:
			return { entity, action, category: SentenceCategory.upsert, type: SentenceType.dml }
		case SentenceAction.truncateEntity:
			return { entity, action, category: SentenceCategory.truncate, type: SentenceType.ddl }
		case SentenceAction.createEntity:
			return { entity, action, category: SentenceCategory.create, type: SentenceType.ddl }
		case SentenceAction.createSequence:
			return { entity, action, category: SentenceCategory.create, type: SentenceType.ddl }
		case SentenceAction.createFk:
			return { entity, action, category: SentenceCategory.create, type: SentenceType.ddl }
		case SentenceAction.createIndex:
			return { entity, action, category: SentenceCategory.create, type: SentenceType.ddl }
		case SentenceAction.alterProperty:
			return { entity, action, category: SentenceCategory.alter, type: SentenceType.ddl }
		case SentenceAction.addProperty:
			return { entity, action, category: SentenceCategory.add, type: SentenceType.ddl }
		case SentenceAction.addPk:
			return { entity, action, category: SentenceCategory.add, type: SentenceType.ddl }
		case SentenceAction.addUk:
			return { entity, action, category: SentenceCategory.add, type: SentenceType.ddl }
		case SentenceAction.addFk:
			return { entity, action, category: SentenceCategory.add, type: SentenceType.ddl }
		case SentenceAction.dropSequence:
			return { entity, action, category: SentenceCategory.drop, type: SentenceType.ddl }
		case SentenceAction.dropEntity:
			return { entity, action, category: SentenceCategory.drop, type: SentenceType.ddl }
		case SentenceAction.dropProperty:
			return { entity, action, category: SentenceCategory.drop, type: SentenceType.ddl }
		case SentenceAction.dropPk:
			return { entity, action, category: SentenceCategory.drop, type: SentenceType.ddl }
		case SentenceAction.dropUk:
			return { entity, action, category: SentenceCategory.drop, type: SentenceType.ddl }
		case SentenceAction.dropFk:
			return { entity, action, category: SentenceCategory.drop, type: SentenceType.ddl }
		case SentenceAction.dropIndex:
			return { entity, action, category: SentenceCategory.drop, type: SentenceType.ddl }
		case SentenceAction.objects:
			return { entity, action, category: SentenceCategory.select, type: SentenceType.metadata }
		case SentenceAction.tables:
			return { entity, action, category: SentenceCategory.select, type: SentenceType.metadata }
		case SentenceAction.views:
			return { entity, action, category: SentenceCategory.select, type: SentenceType.metadata }
		case SentenceAction.foreignKeys:
			return { entity, action, category: SentenceCategory.select, type: SentenceType.metadata }
		case SentenceAction.primaryKeys:
			return { entity, action, category: SentenceCategory.select, type: SentenceType.metadata }
		case SentenceAction.uniqueKeys:
			return { entity, action, category: SentenceCategory.select, type: SentenceType.metadata }
		case SentenceAction.indexes:
			return { entity, action, category: SentenceCategory.select, type: SentenceType.metadata }
		case SentenceAction.sequences:
			return { entity, action, category: SentenceCategory.select, type: SentenceType.metadata }
		case SentenceAction.partitions:
			return { entity, action, category: SentenceCategory.select, type: SentenceType.metadata }
		default:
			throw new Error(`Invalid action ${action}`)
		}
	}
}

export class UUIDWrapper {
	public v4 ():string {
		return UUID.v4()
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
	public sql:SqlHelper
	public uuid:UUIDWrapper
	constructor (h3lp: H3lp, public readonly logger:Logger) {
		super(h3lp)
		this.schema = new SchemaHelper(this.str)
		this.yaml = new YamlWrapper()
		this.sql = new SqlHelper(h3lp.str)
		this.uuid = new UUIDWrapper()
	}
}
