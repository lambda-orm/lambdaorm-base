import { Queryable } from '../domain/queryable'

export interface IRepository<TEntity, TQuery> {

	execute (query: string, data?: any): Promise<any>
	insert(entity: TEntity): Promise<any>
	insert(entity:TEntity, include: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<any>
	insert (entity: TEntity, include?: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<any>

	bulkInsert(entities:TEntity[]): Promise<any[]>
	bulkInsert(entities:TEntity[], include: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<any[]>
	bulkInsert (entities: TEntity[], include?: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<any[]>

	update(entity:TEntity): Promise<number>
	update(entity:TEntity, include: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<number>
	update(entity: TEntity, include?: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<number>

	upsert(entity:TEntity): Promise<number>
	upsert(entity:TEntity, include: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<number>
	upsert(entity: TEntity, include?: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<number>

	updateAll (data:any,
		map: (value: TEntity) => unknown,
		filter?: (value: TQuery, index: number, array: TQuery[]) => unknown,
		include?: (value: TQuery, index: number, array: TQuery[]) => unknown
	): Promise<number>

	merge(entity:TEntity): Promise<number>
	merge(entity:TEntity, include: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<number>
	merge(entity: TEntity, include?: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<number>

	bulkMerge(entities:TEntity[]): Promise<any[]>
	bulkMerge(entities:TEntity[], include: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<any[]>
	bulkMerge (entities: TEntity[], include?: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<any[]>

	delete(entity:TEntity): Promise<number>
	delete(entity:TEntity, include: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<number>
	delete(entity: TEntity, include?: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<number>

	bulkDelete(entities:TEntity[]): Promise<any[]>
	bulkDelete(entities:TEntity[], include: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<any[]>
	bulkDelete(entities: TEntity[], include?: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<any[]>

	deleteAll (data:any,
		filter?: (value: TQuery, index: number, array: TQuery[]) => unknown,
		include?: (value: TQuery, index: number, array: TQuery[]) => unknown
	): Promise<number>

	list (data: any,
		filter?: (value: TQuery, index: number, array: TQuery[]) => unknown,
		include?: (value: TQuery, index: number, array: TQuery[]) => unknown
	): Promise<TEntity[]>

	distinct (data: any,
		filter?: (value: TQuery, index: number, array: TQuery[]) => unknown,
		include?: (value: TQuery, index: number, array: TQuery[]) => unknown
	): Promise<any[]>

	first (data: any,
		filter?: (value: TQuery, index: number, array: TQuery[]) => unknown,
		include?: (value: TQuery, index: number, array: TQuery[]) => unknown
	): Promise<TEntity | null>

	last (data: any,
		filter?: (value: TQuery, index: number, array: TQuery[]) => unknown,
		include?: (value: TQuery, index: number, array: TQuery[]) => unknown
	): Promise<TEntity|null>

	query (): Queryable<TQuery>
}
