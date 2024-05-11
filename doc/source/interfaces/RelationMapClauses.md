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

[src/lib/repository/domain/queryable.ts:242](https://github.com/lambda-orm/lambdaorm-base/blob/aa369ded9e7763a31678c0168646a8ee1291b500/src/lib/repository/domain/queryable.ts#L242)

***

### include()

> **include**(`predicate`, `thisArg`?): [`IncludeClauses`](../classes/IncludeClauses.md)\<`T`\>

#### Parameters

• **predicate**

• **thisArg?**: `any`

#### Returns

[`IncludeClauses`](../classes/IncludeClauses.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:244](https://github.com/lambda-orm/lambdaorm-base/blob/aa369ded9e7763a31678c0168646a8ee1291b500/src/lib/repository/domain/queryable.ts#L244)

***

### sort()

> **sort**(`predicate`, ...`args`): `void`

#### Parameters

• **predicate**

• ...**args**: `any`

#### Returns

`void`

#### Source

[src/lib/repository/domain/queryable.ts:240](https://github.com/lambda-orm/lambdaorm-base/blob/aa369ded9e7763a31678c0168646a8ee1291b500/src/lib/repository/domain/queryable.ts#L240)
