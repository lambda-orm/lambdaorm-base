import { IStringHelper } from 'h3lp'
import { ObjType, PropertyType, Type } from 'typ3s'
const { v4: uuidv4 } = require('uuid')

export class SchemaHelper {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly str:IStringHelper) {}

	public uuid ():string {
		return uuidv4()
	}

	public equalName (name1?:string, name2?:string):boolean {
		if (name1 === undefined && name2 === undefined) return true
		if (name1 === undefined || name2 === undefined) return false
		return name1.toLowerCase() === name2.toLowerCase()
	}

	public entityName (name:string):string {
		return this.str.capitalize(name)
	}

	public getEntityName (name:string): string {
		const plural = this.str.plural(name)
		return this.str.capitalize(plural)
	}

	public getPk (objType:ObjType): PropertyType | undefined {
		const uniques = objType.properties.filter(p => p.type?.unique === true || p.type?.onParentDistinctUnique === true)
		return this.getKey(uniques)
	}

	public getPkName (objType: ObjType): string {
		const pk = this.getPk(objType)
		return pk ? pk.name : '_id'
	}

	public getFk (objType:ObjType): PropertyType | undefined {
		const uniques = objType.properties.filter(p => p.type?.onParentDistinctUnique === true)
		const result = this.getKey(uniques)
		return result
	}

	public getKey (uniques:PropertyType[]): PropertyType | undefined {
		if (uniques.length === 1) {
			return uniques[0]
		} else if (uniques.length > 1) {
			const id = uniques.find(p => ['id', 'code', 'key', 'name'].includes(p.name.toLowerCase()))
			if (id) {
				return id
			}
			const idNumber = uniques.find(p => p.type?.primitive === 'number' || p.type?.primitive === 'integer')
			if (idNumber) {
				return idNumber
			}
			return uniques[0]
		} else {
			return undefined
		}
	}

	public refPropertyName (entityName:string, propertyName:string):string {
		return this.str.singular(this.str.notation(entityName, 'camel')) + this.str.capitalize(propertyName)
	}

	public type (type?:string, length?:number) :string | undefined {
		if (type === undefined) return undefined
		return type === 'string' && length === Number.MAX_SAFE_INTEGER ? 'text' : type === 'string' ? undefined : type
	}

	public length (length?:number): number | undefined {
		return length ? length === 80 ? undefined : length : undefined
	}

	public lengthFromType (type:Type): number | undefined {
		if (type.primitive !== 'string') {
			return undefined
		}
		if (!type.maxLen) {
			return 80
		}
		if (type.maxLen < 8) {
			if (type.maxLen === type.minLen) {
				return type.maxLen
			}
			return Math.round(type.maxLen * 1.3)
		}
		const length = Math.round(type.maxLen * 1.3)
		if (length < 16) {
			return 16
		} else if (length < 32) {
			return 32
		} else if (length < 50) {
			return 50
		} else if (length < 80) {
			return undefined
		} else if (length < 128) {
			return 128
		} else if (length < 256) {
			return 256
		} else if (length < 512) {
			return 512
		} else if (length < 1024) {
			return 1024
		} else if (length < 2048) {
			return 2048
		} else if (length < 4096) {
			return 4096
		} else {
			return Number.MAX_SAFE_INTEGER
		}
	}
}
