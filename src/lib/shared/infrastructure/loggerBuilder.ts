import { Logger } from '../application/ports/logger'
import { ConsoleLogger } from './consoleLogger'
import { WinstonLogger } from './winstonLogger'

export class LoggerBuilder {
	public build (name?:string): Logger {
		if (name === 'winston') {
			return new WinstonLogger()
		}
		return new ConsoleLogger()
	}
}
