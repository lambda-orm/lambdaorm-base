export interface QueryPlan {
	entity: string
	dialect: string
	source: string
	sentence: string
	children?: QueryPlan[]
}
