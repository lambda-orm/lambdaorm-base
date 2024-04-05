[Lambda ORM](../README.md) / ModifyClauses

# Interface: ModifyClauses\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [filter](ModifyClauses.md#filter)
- [include](ModifyClauses.md#include)

## Methods

### filter

▸ **filter**(`predicate`, `thisArg?`): [`ModifyFilterClauses`](ModifyFilterClauses.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

[`ModifyFilterClauses`](ModifyFilterClauses.md)\<`T`\>

#### Defined in

[src/lib/repository/domain/queryable.ts:215](https://github.com/lambda-orm/lambdaorm-base/blob/70de11b/src/lib/repository/domain/queryable.ts#L215)

___

### include

▸ **include**(`predicate`, `thisArg?`): [`ModifyIncludeClauses`](ModifyIncludeClauses.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

[`ModifyIncludeClauses`](ModifyIncludeClauses.md)\<`T`\>

#### Defined in

[src/lib/repository/domain/queryable.ts:217](https://github.com/lambda-orm/lambdaorm-base/blob/70de11b/src/lib/repository/domain/queryable.ts#L217)
