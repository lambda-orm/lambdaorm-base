import { QueryPlan } from '../../query/domain'
import { MetadataParameter, MetadataModel, MetadataConstraint, Metadata } from '../../sentence/domain'
export interface ExpressionActions {
	execute (expression: string, data:any): Promise<any>
	normalize (expression: string): string
	model (expression: string): Promise<MetadataModel[]>
	parameters (expression: string): Promise<MetadataParameter[]>
	constraints (expression: string): Promise<MetadataConstraint>
	metadata (expression: string): Promise<Metadata>
	plan (expression: string): Promise<QueryPlan>
}
