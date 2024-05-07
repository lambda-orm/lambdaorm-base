import { ViewConfigService } from '../../schema/application'
import { Sentence } from './sentence'

export interface ISentenceBuilder {
	build(query: string): Sentence
}

export interface ISentenceCompleteBuilder {
	build (query: string, view: ViewConfigService, stage:string): Sentence
}

export interface SentenceSerializer {
	clone (sentence: Sentence): Sentence
	serialize (sentence: Sentence): string
	deserialize (value: string): Sentence
}
