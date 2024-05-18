[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / IRelation

# Interface: IRelation\<T\>

## Type parameters

• **T**

## Methods

### distinct()

> **distinct**\<`U`\>(`predicate`, `thisArg`?): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Type parameters

• **U**

#### Parameters

• **predicate**

• **thisArg?**: `any`

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:264](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L264)

***

### filter()

> **filter**(`predicate`, `thisArg`?): [`FilterClauses`](../classes/FilterClauses.md)\<`T`\>

#### Parameters

• **predicate**

• **thisArg?**: `any`

#### Returns

[`FilterClauses`](../classes/FilterClauses.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:276](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L276)

***

### first()

> **first**\<`U`\>(`predicate`, `thisArg`?): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Type parameters

• **U**

#### Parameters

• **predicate**

• **thisArg?**: `any`

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:260](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L260)

***

### include()

> **include**(`predicate`, `thisArg`?): [`RelationIncludeClauses`](RelationIncludeClauses.md)\<`T`\>

#### Parameters

• **predicate**

• **thisArg?**: `any`

#### Returns

[`RelationIncludeClauses`](RelationIncludeClauses.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:266](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L266)

***

### insert()

> **insert**(`predicate`?): `void`

#### Parameters

• **predicate?**

#### Returns

`void`

#### Source

[src/lib/repository/domain/queryable.ts:271](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L271)

***

### last()

> **last**\<`U`\>(`predicate`, `thisArg`?): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Type parameters

• **U**

#### Parameters

• **predicate**

• **thisArg?**: `any`

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:262](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L262)

***

### map()

> **map**\<`U`\>(`predicate`, `thisArg`?): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Type parameters

• **U**

#### Parameters

• **predicate**

• **thisArg?**: `any`

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:258](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L258)

***

### update()

> **update**(`predicate`?): `void`

#### Parameters

• **predicate?**

#### Returns

`void`

#### Source

[src/lib/repository/domain/queryable.ts:268](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L268)

***

### upsert()

> **upsert**(`predicate`?): `void`

#### Parameters

• **predicate?**

#### Returns

`void`

#### Source

[src/lib/repository/domain/queryable.ts:273](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L273)
