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
			return this.createInfo(entity, action, SentenceCategory.select, SentenceType.dql)
		case SentenceAction.insert:
			return this.createInfo(entity, action, SentenceCategory.insert, SentenceType.dml)
		case SentenceAction.insertConditional:
			return this.createInfo(entity, action, SentenceCategory.insert, SentenceType.dml)
		case SentenceAction.update:
			return this.createInfo(entity, action, SentenceCategory.update, SentenceType.dml)
		case SentenceAction.delete:
			return this.createInfo(entity, action, SentenceCategory.delete, SentenceType.dml)
		case SentenceAction.merge:
			return this.createInfo(entity, action, SentenceCategory.upsert, SentenceType.dml)
		case SentenceAction.bulkInsert:
			return this.createInfo(entity, action, SentenceCategory.insert, SentenceType.dml)
		case SentenceAction.bulkDelete:
			return this.createInfo(entity, action, SentenceCategory.delete, SentenceType.dml)
		case SentenceAction.upsert:
			return this.createInfo(entity, action, SentenceCategory.upsert, SentenceType.dml)
		case SentenceAction.bulkMerge:
			return this.createInfo(entity, action, SentenceCategory.upsert, SentenceType.dml)
		case SentenceAction.truncateEntity:
			return this.createInfo(entity, action, SentenceCategory.truncate, SentenceType.ddl)
		case SentenceAction.createEntity:
			return this.createInfo(entity, action, SentenceCategory.create, SentenceType.ddl)
		case SentenceAction.createSequence:
			return this.createInfo(entity, action, SentenceCategory.create, SentenceType.ddl)
		case SentenceAction.createFk:
			return this.createInfo(entity, action, SentenceCategory.create, SentenceType.ddl)
		case SentenceAction.createIndex:
			return this.createInfo(entity, action, SentenceCategory.create, SentenceType.ddl)
		case SentenceAction.alterProperty:
			return this.createInfo(entity, action, SentenceCategory.alter, SentenceType.ddl)
		case SentenceAction.addProperty:
			return this.createInfo(entity, action, SentenceCategory.add, SentenceType.ddl)
		case SentenceAction.addPk:
			return this.createInfo(entity, action, SentenceCategory.add, SentenceType.ddl)
		case SentenceAction.addUk:
			return this.createInfo(entity, action, SentenceCategory.add, SentenceType.ddl)
		case SentenceAction.addFk:
			return this.createInfo(entity, action, SentenceCategory.add, SentenceType.ddl)
		case SentenceAction.dropSequence:
			return this.createInfo(entity, action, SentenceCategory.drop, SentenceType.ddl)
		case SentenceAction.dropEntity:
			return this.createInfo(entity, action, SentenceCategory.drop, SentenceType.ddl)
		case SentenceAction.dropProperty:
			return this.createInfo(entity, action, SentenceCategory.drop, SentenceType.ddl)
		case SentenceAction.dropPk:
			return this.createInfo(entity, action, SentenceCategory.drop, SentenceType.ddl)
		case SentenceAction.dropUk:
			return this.createInfo(entity, action, SentenceCategory.drop, SentenceType.ddl)
		case SentenceAction.dropFk:
			return this.createInfo(entity, action, SentenceCategory.drop, SentenceType.ddl)
		case SentenceAction.dropIndex:
			return this.createInfo(entity, action, SentenceCategory.drop, SentenceType.ddl)
		case SentenceAction.objects:
			return this.createInfo(entity, action, SentenceCategory.select, SentenceType.metadata)
		case SentenceAction.tables:
			return this.createInfo(entity, action, SentenceCategory.select, SentenceType.metadata)
		case SentenceAction.views:
			return this.createInfo(entity, action, SentenceCategory.select, SentenceType.metadata)
		case SentenceAction.foreignKeys:
			return this.createInfo(entity, action, SentenceCategory.select, SentenceType.metadata)
		case SentenceAction.primaryKeys:
			return this.createInfo(entity, action, SentenceCategory.select, SentenceType.metadata)
		case SentenceAction.uniqueKeys:
			return this.createInfo(entity, action, SentenceCategory.select, SentenceType.metadata)
		case SentenceAction.indexes:
			return this.createInfo(entity, action, SentenceCategory.select, SentenceType.metadata)
		case SentenceAction.sequences:
			return this.createInfo(entity, action, SentenceCategory.select, SentenceType.metadata)
		case SentenceAction.partitions:
			return this.createInfo(entity, action, SentenceCategory.select, SentenceType.metadata)
		default:
			throw new Error(`Invalid action ${action}`)
		}
	}

	private createInfo (entity:string, action:SentenceAction, category:SentenceCategory, type:SentenceType): SentenceInfo {
		return {
			entity,
			action,
			category,
			type,
			// for retro-compatibility
			read: category === SentenceCategory.select,
			write: category !== SentenceCategory.select,
			ddl: type === SentenceType.ddl,
			dml: type === SentenceType.dml || type === SentenceType.dql
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
