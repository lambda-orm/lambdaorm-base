[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / RelationMapClauses

# Interface: RelationMapClauses\<T\>

## Type parameters

• **T**

## Methods

### filter()

> **filter**(`predicate`, `thisArg`?): [`FilterClauses`](../classes/FilterClauses.md)\<`T`\>

#### Parameters

• **predicate**

• **thisArg?**: `any`

#### Returns

[`FilterClauses`](../classes/FilterClauses.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:242](https://github.com/lambda-orm/lambdaorm-base/blob/4cf2de441f2b52a79b8dbd828c5ce7422ffa163a/src/lib/repository/domain/queryable.ts#L242)

***

### include()

> **include**(`predicate`, `thisArg`?): [`IncludeClauses`](../classes/IncludeClauses.md)\<`T`\>

#### Parameters

• **predicate**

• **thisArg?**: `any`

#### Returns

[`IncludeClauses`](../classes/IncludeClauses.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:244](https://github.com/lambda-orm/lambdaorm-base/blob/4cf2de441f2b52a79b8dbd828c5ce7422ffa163a/src/lib/repository/domain/queryable.ts#L244)

***

### sort()

> **sort**(`predicate`, ...`args`): `void`

#### Parameters

• **predicate**

• ...**args**: `any`

#### Returns

`void`

#### Source

[src/lib/repository/domain/queryable.ts:240](https://github.com/lambda-orm/lambdaorm-base/blob/4cf2de441f2b52a79b8dbd828c5ce7422ffa163a/src/lib/repository/domain/queryable.ts#L240)
