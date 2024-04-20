import { expressions } from '3xpr'
import { h3lp } from 'h3lp'
import { SchemaFacadeBuilder, SchemaStateBuilder, OrmBaseH3lp, LoggerBuilder } from '../../lib'

const lab = async () => {
	const workspace = __dirname.replace('build/', 'src/')
	const logger = new LoggerBuilder().build('winston')
	const helper = new OrmBaseH3lp(h3lp, logger)
	const schemaFacade = new SchemaFacadeBuilder(expressions, helper).build()
	const schemaState = new SchemaStateBuilder(expressions, schemaFacade, helper).build()
	const originalSchema = helper.yaml.load(await h3lp.fs.read(workspace + '/originalSchema.yaml'))
	const schemaResult = await schemaState.load(originalSchema)
	await helper.fs.write(workspace + '/result.yaml', helper.yaml.dump(schemaResult))
}

lab()
