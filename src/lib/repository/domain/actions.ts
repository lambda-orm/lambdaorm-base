import { QueryPlan } from '../../query/domain'
import { MetadataParameter, MetadataModel, MetadataConstraint, Metadata } from '../../sentence/domain'
export interface QueryActions {
	execute (query: string, data:any): Promise<any>
	normalize (query: string): string
	model (query: string): Promise<MetadataModel[]>
	parameters (query: string): Promise<MetadataParameter[]>
	constraints (query: string): Promise<MetadataConstraint>
	metadata (query: string): Promise<Metadata>
	plan (query: string): Promise<QueryPlan>
}
