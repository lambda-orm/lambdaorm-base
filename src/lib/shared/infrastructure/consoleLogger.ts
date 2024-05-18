import { Logger } from '../domain/ports/logger'

export class ConsoleLogger extends Logger {
	protected override async error (message: string|any): Promise<void> {
		if (typeof message === 'string') {
			this._log('error', message)
		} else if (message instanceof Error) {
			this._log('error', message.message)
		} else if (message instanceof Object) {
			this._log('error', JSON.stringify(message))
		} else {
			this._log('error', message.toISOString())
		}
	}

	protected override async info (message: string): Promise<void> {
		this._log('info', message)
	}

	private _log (level:string, message:string) {
		console.log(`${new Date().toISOString()} ${level.toUpperCase()}: ${message}`)
	}
}
