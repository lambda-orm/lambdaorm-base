import { SourceRule } from './schema'
import { Dialect } from './dialect'
import { ClauseInfo } from './info'

export interface IRouteService {
	eval (source:SourceRule, clauseInfo: ClauseInfo):boolean
	getSource (clauseInfo: ClauseInfo, stage?: string):string
}

export interface MatchOptions {
	removeEntities?: boolean
	removeProperties?: boolean
	removeRelations?: boolean
}

export interface InitializeSchemaArgs {
	workspace:string
	url?:string
	source?:string
	dialect?:Dialect
	connection?:string
	dataPath?:string
}
