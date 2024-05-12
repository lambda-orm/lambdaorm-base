[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / ModifyClauses

# Interface: ModifyClauses\<T\>

## Type parameters

• **T**

## Methods

### filter()

> **filter**(`predicate`, `thisArg`?): [`ModifyFilterClauses`](ModifyFilterClauses.md)\<`T`\>

#### Parameters

• **predicate**

• **thisArg?**: `any`

#### Returns

[`ModifyFilterClauses`](ModifyFilterClauses.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:228](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/domain/queryable.ts#L228)

***

### include()

> **include**(`predicate`, `thisArg`?): [`ModifyIncludeClauses`](ModifyIncludeClauses.md)\<`T`\>

#### Parameters

• **predicate**

• **thisArg?**: `any`

#### Returns

[`ModifyIncludeClauses`](ModifyIncludeClauses.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:230](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/domain/queryable.ts#L230)
