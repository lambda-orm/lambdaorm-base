export interface QueryPlan {
	entity: string
	dialect: string
	source: string
	sentence: string
	children?: QueryPlan[]
}

export interface QueryOptions {
	stage?: string
	view?: string
	chunkSize?: number
	tryAllCan?: boolean
	headers?: [string, any][]
}
