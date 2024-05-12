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

[src/lib/repository/domain/queryable.ts:228](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/repository/domain/queryable.ts#L228)

***

### include()

> **include**(`predicate`, `thisArg`?): [`ModifyIncludeClauses`](ModifyIncludeClauses.md)\<`T`\>

#### Parameters

• **predicate**

• **thisArg?**: `any`

#### Returns

[`ModifyIncludeClauses`](ModifyIncludeClauses.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:230](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/repository/domain/queryable.ts#L230)
