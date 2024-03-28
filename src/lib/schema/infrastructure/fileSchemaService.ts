import { Schema, SchemaError, SchemaInfo } from '../domain'
import path from 'path'
import { H3lp } from 'h3lp'
import { IFileSchemaService } from '../application'
import { SchemaFileHelper } from './schemaFileHelper'
const yaml = require('js-yaml')

export class FileSchemaService implements IFileSchemaService {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private schemaFileHelper: SchemaFileHelper,
		private helper: H3lp
	) {}

	public async read (source:string): Promise<SchemaInfo|null> {
		const configPath = await this.schemaFileHelper.getConfigPath(source)
		if (!configPath) {
			return null
		}
		const content = await this.readConfig(configPath)
		if (content === undefined || content === null) {
			throw new SchemaError(`Schema file: ${configPath} empty`)
		} else if (path.extname(configPath) === '.yaml' || path.extname(configPath) === '.yml') {
			return { schema: yaml.load(content), path: configPath }
		} else if (path.extname(configPath) === '.json') {
			return { schema: JSON.parse(content), path: configPath }
		} else {
			throw new SchemaError(`Schema file: ${configPath} not supported`)
		}
	}

	public async write (schema:Schema, fullPath:string): Promise<void> {
		if (path.extname(fullPath) === '.yaml' || path.extname(fullPath) === '.yml') {
			await this.helper.fs.write(fullPath, yaml.dump(schema))
		} else if (path.extname(fullPath) === '.json') {
			await this.helper.fs.write(fullPath, JSON.stringify(schema, null, 2))
		} else {
			throw new SchemaError(`Schema file: ${fullPath} not supported`)
		}
	}

	private async readConfig (path:string):Promise<string|null> {
		if (path.startsWith('http')) {
			return await this.helper.http.get(path)
		}
		return await this.helper.fs.read(path)
	}
}
