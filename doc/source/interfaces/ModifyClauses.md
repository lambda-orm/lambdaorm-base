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

[src/lib/repository/domain/queryable.ts:228](https://github.com/lambda-orm/lambdaorm-base/blob/aa369ded9e7763a31678c0168646a8ee1291b500/src/lib/repository/domain/queryable.ts#L228)

***

### include()

> **include**(`predicate`, `thisArg`?): [`ModifyIncludeClauses`](ModifyIncludeClauses.md)\<`T`\>

#### Parameters

• **predicate**

• **thisArg?**: `any`

#### Returns

[`ModifyIncludeClauses`](ModifyIncludeClauses.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:230](https://github.com/lambda-orm/lambdaorm-base/blob/aa369ded9e7763a31678c0168646a8ee1291b500/src/lib/repository/domain/queryable.ts#L230)
