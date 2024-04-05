import { AppPathsConfig, ApplicationSchema, InfrastructureSchema, DomainSchema, Schema } from '../../domain'

export class SchemaService {
	public newSchema ():Schema {
		return { version: '0.0.1', domain: this.newDomain() }
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
}
