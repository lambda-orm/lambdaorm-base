export enum LogLevel {
	INFO = 'info',
	ERROR = 'error'
}

export abstract class Logger {
	public async log (message: string|any, level: LogLevel = LogLevel.INFO): Promise<void> {
		if (level === LogLevel.ERROR) {
			this.error(message)
		} else {
			if (typeof message === 'string') {
				this.info(message)
			} else if (typeof message === 'object') {
				this.info(JSON.stringify(message))
			} else {
				this.info(message.toISOString())
			}
		}
	}

	protected abstract info (message: string): Promise<void>
	protected abstract error (message: string|any):Promise<void>
}
