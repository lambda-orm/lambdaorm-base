[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / RelationMapClauses

# Interface: RelationMapClauses\<T\>

Defined in: [src/lib/repository/domain/queryable.ts:238](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L238)

## Type Parameters

### T

`T`

## Methods

### filter()

> **filter**(`predicate`, `thisArg?`): [`FilterClauses`](../classes/FilterClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:242](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L242)

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

##### thisArg?

`any`

#### Returns

[`FilterClauses`](../classes/FilterClauses.md)\<`T`\>

***

### include()

> **include**(`predicate`, `thisArg?`): [`IncludeClauses`](../classes/IncludeClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:244](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L244)

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

##### thisArg?

`any`

#### Returns

[`IncludeClauses`](../classes/IncludeClauses.md)\<`T`\>

***

### sort()

> **sort**(`predicate`, ...`args`): `void`

Defined in: [src/lib/repository/domain/queryable.ts:240](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L240)

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

##### args

...`any`

#### Returns

`void`
