import { h3lp } from 'h3lp'
import { OrmBaseH3lp, LoggerBuilder } from '../../lib'

const lab = async () => {
	const logger = new LoggerBuilder().build('winston')
	const helper = new OrmBaseH3lp(h3lp, logger)
	const now = new Date()

	console.log(helper.query.dateFormat(now, 'utc'))
	console.log(helper.query.dateFormat(now, 'iso'))
	console.log(helper.query.dateFormat(now, 'utc-without-ms'))
	console.log(helper.query.dateFormat(now, 'yyyy-MM-dd'))
}

lab()
