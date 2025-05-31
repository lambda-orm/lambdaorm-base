import path from 'path'
import { OrmBaseH3lp } from '../../shared'

export class SchemaFileHelper {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly helper: OrmBaseH3lp) { }

	public async getConfigPath (source?: string): Promise<string | undefined> {
		let workspace: string
		let configFile: string | undefined
		workspace = process.cwd()

		if (source === undefined) {
			configFile = await this.getConfigFileName(workspace)
		} else if (typeof source === 'string') {
			if (source.startsWith('http')) {
				return source
			} else if (await this.helper.fs.exists(source)) {
				const lstat = await this.helper.fs.lstat(source)
				if (lstat.isFile()) {
					configFile = path.basename(source)
					workspace = path.dirname(source)
				} else {
					workspace = source
					configFile = await this.getConfigFileName(workspace)
				}
			} else {
				await this.helper.logger.log(`Not exists path ${source}`)
			}
		} else {
			await this.helper.logger.log('Schema: not supported:')
			await this.helper.logger.log(source)
		}
		if (configFile) {
			return path.join(workspace, configFile)
		} else {
			return undefined
		}
	}

	public async getConfigFileName (workspace: string): Promise<string | undefined> {
		const entries = await this.helper.fs.readdir(workspace)

		const candidates = entries.filter(entry => {
			const ext = path.extname(entry).toLowerCase()
			const name = path.basename(entry, ext).toLowerCase()
			return (
				['.json', '.yaml', '.yml'].includes(ext) &&
				(name.includes('lambdaorm') || name.includes('orm') || name.includes('schema'))
			)
		})
		const priority = ['lambdaorm', 'orm', 'schema']
		for (const p of priority) {
			const match = candidates.find(c => path.basename(c).toLowerCase().includes(p))
			if (match) return match
		}

		return undefined
	}
}
