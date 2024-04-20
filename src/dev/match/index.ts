import { expressions } from '3xpr'
import { h3lp } from 'h3lp'
import { SchemaFacadeBuilder, SchemaStateBuilder, OrmBaseH3lp, LoggerBuilder } from '../../lib'
const yaml = require('js-yaml')

const lab = async () => {
	const workspace = __dirname.replace('build/', 'src/')
	const schemaPath = workspace + '/schema.yaml'
	const schemaResultPath = workspace + '/result.yaml'
	const mappingPath = workspace + '/mapping.json'
	const mapping = JSON.parse(await h3lp.fs.read(mappingPath) as string)
	const logger = new LoggerBuilder().build('winston')
	const helper = new OrmBaseH3lp(h3lp, logger)
	const schemaFacade = new SchemaFacadeBuilder(expressions, helper).build()
	const schemaState = new SchemaStateBuilder(expressions, schemaFacade, helper).build()
	const originalSchema = yaml.load(await h3lp.fs.read(schemaPath))
	const schema = h3lp.obj.clone(originalSchema)
	await schemaState.load(schema)
	await schemaState.match(mapping)
	await h3lp.fs.write(schemaResultPath, yaml.dump(schema))
}

lab()
