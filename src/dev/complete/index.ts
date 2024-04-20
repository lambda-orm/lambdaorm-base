import { expressions } from '3xpr'
import { h3lp } from 'h3lp'
import { SchemaFacadeBuilder, SchemaStateBuilder, OrmBaseH3lp, LoggerBuilder } from '../../lib'
const yaml = require('js-yaml')

const lab = async () => {
	const logger = new LoggerBuilder().build('winston')
	const helper = new OrmBaseH3lp(h3lp, logger)
	const schemaFacade = new SchemaFacadeBuilder(expressions, helper).build()
	const schemaState = new SchemaStateBuilder(expressions, schemaFacade, helper).build()
	const workspace = __dirname.replace('build/', 'src/')
	const schemaPath = workspace + '/schema.yaml'
	const schemaCompletedPath = workspace + '/schema-completed.yaml'
	const schema = await schemaState.load(schemaPath)
	await h3lp.fs.write(schemaCompletedPath, yaml.dump(schema))
}

lab()
