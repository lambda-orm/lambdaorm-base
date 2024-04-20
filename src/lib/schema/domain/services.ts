import { SourceRule } from './schema'
import { Dialect } from './dialect'
import { SentenceInfo } from './sentence'

export interface IRouteService {
	eval (source:SourceRule, info: SentenceInfo):boolean
	getSource (info: SentenceInfo, stage?: string):string
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
