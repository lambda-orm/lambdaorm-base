import { h3lp } from 'h3lp'
import { OrmBaseH3lp, LoggerBuilder } from '../../lib'

const lab = async () => {
	const logger = new LoggerBuilder().build('winston')
	const helper = new OrmBaseH3lp(h3lp, logger)

	for (const value of ['2021-01-01', '2021-01-01T00:30:00Z', '2020-12-31T23:59:59.343Z', '2020-12-31T23:59:59']) {
		const now = new Date(value)
		console.log('value:', value)
		console.log(helper.query.dateFormat(now, 'utc'))
		console.log(helper.query.dateFormat(now, 'iso'))
		console.log(helper.query.dateFormat(now, 'utc-without-ms'))
		console.log(helper.query.dateFormat(now, 'yyyy-MM-dd HH:mm:ss.000'))
		console.log(helper.query.dateFormat(now, 'yyyy-MM-dd 00:00:00.000'))
	}
}

lab()
