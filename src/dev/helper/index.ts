import { h3lp } from 'h3lp'
import { OrmBaseH3lp, LoggerBuilder } from '../../lib'

const lab = async () => {
	const logger = new LoggerBuilder().build('winston')
	const helper = new OrmBaseH3lp(h3lp, logger)
	console.log(helper.schema.entityName('order'))
	console.log(helper.schema.entityName('order detail'))
	console.log(helper.schema.entityName('"Order details"'))
	console.log(helper.schema.entityName('Order details'))
}

lab()
