import { SourceRule } from '.'
import { ClauseInfo } from './info'

export interface IRouteService {
	eval (source:SourceRule, clauseInfo: ClauseInfo):boolean
	getSource (clauseInfo: ClauseInfo, stage?: string):string
}

export interface MergeOptions {
	removeEntities?: boolean
	removeProperties?: boolean
}
