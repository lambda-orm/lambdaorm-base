[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / ModifyIncludeClauses

# Interface: ModifyIncludeClauses\<T\>

Defined in: [src/lib/repository/domain/queryable.ts:222](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L222)

## Type Parameters

### T

`T`

## Methods

### filter()

> **filter**(`predicate`, `thisArg?`): [`ModifyFilterClauses`](ModifyFilterClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:224](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L224)

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

##### thisArg?

`any`

#### Returns

[`ModifyFilterClauses`](ModifyFilterClauses.md)\<`T`\>
