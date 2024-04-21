import { Expressions } from '3xpr'
import { SourceRule, SchemaError, IRouteService, SentenceInfo } from '../../domain'
import { StageConfigService } from './config/stageConfigService'

export class RouteService implements IRouteService {
	// eslint-disable-next-line no-useless-constructor
	constructor (
		private readonly stageConfigService: StageConfigService,
		private readonly expressions:Expressions) {}

	public eval (source:SourceRule, info: SentenceInfo):boolean {
		if (source.condition === undefined) return true
		return this.expressions.eval(source.condition, info)
	}

	public getSource (info: SentenceInfo, stage?: string):string {
		// const contextInfo = this.getContextInfo(clauseInfo)
		const _stage = this.stageConfigService.get(stage)
		for (const i in _stage.sources) {
			const source = _stage.sources[i]
			if (source.condition === undefined) {
				return source.name
			} else {
				const result = this.expressions.eval(source.condition, info)
				if (result) {
					return source.name
				}
			}
		}
		throw new SchemaError(`Undefined data source on stage ${_stage.name}`)
	}
}
