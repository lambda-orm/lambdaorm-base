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

export class QueryHelper {
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

	public dateFormat (value:any, format:string = 'iso'):string {
		if (!format) {
			throw new Error('Format is required')
		}
		if (!value) {
			throw new Error('Value is required')
		}
		if (format.toLowerCase() === 'utc') {
			return new Date(value).toUTCString()
		} else {
			const iso = new Date(value).toISOString()
			if (format.toLowerCase() === 'iso') {
				return LUXON.DateTime.fromISO(iso).toISO()
			} else {
				return LUXON.DateTime.fromISO(iso).toFormat(format)
			}
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

	public getSentenceType (action:SentenceAction): SentenceType {
		switch (action) {
		case SentenceAction.select:
			return SentenceType.dql
		case SentenceAction.objects:
		case SentenceAction.tables:
		case SentenceAction.views:
		case SentenceAction.foreignKeys:
		case SentenceAction.primaryKeys:
		case SentenceAction.uniqueKeys:
		case SentenceAction.indexes:
		case SentenceAction.sequences:
		case SentenceAction.partitions:
			return SentenceType.metadata
		case SentenceAction.insert:
		case SentenceAction.insertConditional:
		case SentenceAction.bulkInsert:
		case SentenceAction.bulkDelete:
		case SentenceAction.update:
		case SentenceAction.delete:
		case SentenceAction.merge:
		case SentenceAction.bulkMerge:
		case SentenceAction.upsert:
			return SentenceType.dml
		case SentenceAction.truncateEntity:
		case SentenceAction.createEntity:
		case SentenceAction.createSequence:
		case SentenceAction.createFk:
		case SentenceAction.createIndex:
		case SentenceAction.alterProperty:
		case SentenceAction.addProperty:
		case SentenceAction.addPk:
		case SentenceAction.addUk:
		case SentenceAction.addFk:
		case SentenceAction.dropSequence:
		case SentenceAction.dropEntity:
		case SentenceAction.dropProperty:
		case SentenceAction.dropPk:
		case SentenceAction.dropUk:
		case SentenceAction.dropFk:
		case SentenceAction.dropIndex:
			return SentenceType.ddl
		default:
			throw new Error(`Invalid action ${action}`)
		}
	}

	public getSentenceCategory (action:SentenceAction): SentenceCategory {
		switch (action) {
		case SentenceAction.select:
		case SentenceAction.objects:
		case SentenceAction.tables:
		case SentenceAction.views:
		case SentenceAction.foreignKeys:
		case SentenceAction.primaryKeys:
		case SentenceAction.uniqueKeys:
		case SentenceAction.indexes:
		case SentenceAction.sequences:
		case SentenceAction.partitions:
			return SentenceCategory.select
		case SentenceAction.insert:
		case SentenceAction.insertConditional:
		case SentenceAction.bulkInsert:
			return SentenceCategory.insert
		case SentenceAction.bulkDelete:
		case SentenceAction.delete:
			return SentenceCategory.delete
		case SentenceAction.update:
			return SentenceCategory.update
		case SentenceAction.merge:
		case SentenceAction.bulkMerge:
		case SentenceAction.upsert:
			return SentenceCategory.upsert
		case SentenceAction.truncateEntity:
			return SentenceCategory.truncate
		case SentenceAction.createEntity:
		case SentenceAction.createSequence:
		case SentenceAction.createFk:
		case SentenceAction.createIndex:
			return SentenceCategory.create
		case SentenceAction.alterProperty:
			return SentenceCategory.alter
		case SentenceAction.addProperty:
		case SentenceAction.addPk:
		case SentenceAction.addUk:
		case SentenceAction.addFk:
			return SentenceCategory.add
		case SentenceAction.dropSequence:
		case SentenceAction.dropEntity:
		case SentenceAction.dropProperty:
		case SentenceAction.dropPk:
		case SentenceAction.dropUk:
		case SentenceAction.dropFk:
		case SentenceAction.dropIndex:
			return SentenceCategory.drop
		case SentenceAction.undefined:
			return SentenceCategory.undefined
		default:
			throw new Error(`Invalid action ${action}`)
		}
	}

	public getInfo (action:SentenceAction, entity:string, type?:SentenceType): SentenceInfo {
		const category = this.getSentenceCategory(action)
		const _type = type || this.getSentenceType(action)
		return {
			entity,
			action,
			category,
			type: _type,
			// for retro-compatibility
			read: category === SentenceCategory.select,
			write: category !== SentenceCategory.select,
			ddl: _type === SentenceType.ddl,
			dml: _type === SentenceType.dml || _type === SentenceType.dql
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
	public query:QueryHelper
	public uuid:UUIDWrapper
	constructor (h3lp: H3lp, public readonly logger:Logger) {
		super(h3lp)
		this.schema = new SchemaHelper(this.str)
		this.yaml = new YamlWrapper()
		this.query = new QueryHelper(h3lp.str)
		this.uuid = new UUIDWrapper()
	}
}
