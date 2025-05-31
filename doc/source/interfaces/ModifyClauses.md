[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / ModifyClauses

# Interface: ModifyClauses\<T\>

Defined in: [src/lib/repository/domain/queryable.ts:226](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L226)

## Type Parameters

### T

`T`

## Methods

### filter()

> **filter**(`predicate`, `thisArg?`): [`ModifyFilterClauses`](ModifyFilterClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:228](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L228)

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

##### thisArg?

`any`

#### Returns

[`ModifyFilterClauses`](ModifyFilterClauses.md)\<`T`\>

***

### include()

> **include**(`predicate`, `thisArg?`): [`ModifyIncludeClauses`](ModifyIncludeClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:230](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L230)

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

##### thisArg?

`any`

#### Returns

[`ModifyIncludeClauses`](ModifyIncludeClauses.md)\<`T`\>
