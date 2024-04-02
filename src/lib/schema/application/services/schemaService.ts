import { AppPathsConfig, ApplicationSchema, InfrastructureSchema, DomainSchema, Schema } from '../../domain'
import { ObjType, PropertyType, Type } from 'typ3s'
import { H3lp } from 'h3lp'

export class SchemaService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly helper: H3lp) {}

	public newSchema ():Schema {
		return { version: '0.0.1', application: this.newApplication(), domain: this.newDomain(), infrastructure: this.newInfrastructure() }
	}

	public newInfrastructure (): InfrastructureSchema {
		return { paths: this.newPathsApp(), mappings: [], sources: [], stages: [] }
	}

	public newDomain (): DomainSchema {
		return { version: '0.0.1', entities: [] }
	}

	public newApplication ():ApplicationSchema | undefined {
		return undefined
	}

	public newPathsApp (): AppPathsConfig {
		return { src: 'src', data: 'data', domain: 'domain' }
	}

	public complete (schema: Schema) {
		if (!schema.domain) {
			schema.domain = this.newDomain()
		} else {
			if (!schema.domain.enums) {
				schema.domain.enums = []
			}
			if (!schema.domain.entities) {
				schema.domain.entities = []
			}
		}
		if (!schema.infrastructure) {
			schema.infrastructure = this.newInfrastructure()
		} else {
			if (!schema.infrastructure.mappings) {
				schema.infrastructure.mappings = []
			}
			if (!schema.infrastructure.sources) {
				schema.infrastructure.sources = []
			}
			if (!schema.infrastructure.stages) {
				schema.infrastructure.stages = []
			}
			if (!schema.infrastructure.paths) {
				schema.infrastructure.paths = this.newPathsApp()
			}
			if (!schema.infrastructure.paths.src) {
				schema.infrastructure.paths.src = 'src'
			}
			if (!schema.infrastructure.paths.data) {
				schema.infrastructure.paths.data = 'data'
			}
			if (!schema.infrastructure.paths.domain) {
				schema.infrastructure.paths.domain = 'domain'
			}
			if (!schema.infrastructure.views) {
				schema.infrastructure.views = []
			}
		}
		if (!schema.application) {
			schema.application = this.newApplication()
		} else {
			if (!schema.application.start) {
				schema.application.start = []
			}
			if (!schema.application.end) {
				schema.application.end = []
			}
			if (!schema.application.listeners) {
				schema.application.listeners = []
			}
		}
	}

	public getEntityName (name:string): string {
		const plural = this.helper.str.plural(name)
		return this.helper.str.capitalize(plural)
	}

	public getPk (objType:ObjType): PropertyType | undefined {
		const uniques = objType.properties.filter(p => p.type?.unique === true || p.type?.onParentDistinctUnique === true)
		return this.getKey(uniques)
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

	public getLength (type:Type): number | undefined {
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
		} else if (length < 64) {
			return 64
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
			return undefined
		}
	}
}
