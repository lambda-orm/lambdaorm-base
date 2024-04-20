import { h3lp } from 'h3lp'
import { OrmBaseH3lp, LoggerBuilder } from '../../lib'

const lab = async () => {
	const logger = new LoggerBuilder().build('winston')
	const helper = new OrmBaseH3lp(h3lp, logger)
	console.log(helper.sql.dateToString(new Date(), 'Z'))
	console.log(helper.sql.dateToString(new Date(), 'local'))
	console.log(helper.sql.dateToString(new Date(), '+01'))
	console.log(helper.sql.dateToString(new Date(), '-01'))
	console.log(helper.sql.dateToString(new Date(), '00:30'))
	console.log(helper.sql.dateToString(new Date(), '00:00'))
	console.log(helper.sql.dateToString(new Date(), '+00:30'))
	console.log(helper.sql.dateToString(new Date(), '-00:30'))
	console.log(helper.sql.dateFormat(new Date(), 'ISO'))
	console.log(helper.sql.dateFormat(new Date(), 'yyyy-MM-dd'))
	console.log(helper.sql.dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss'))
	console.log(helper.sql.dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS'))
	console.log(helper.sql.dateFormat(new Date(), 'HH:mm:ss'))
}

lab()
