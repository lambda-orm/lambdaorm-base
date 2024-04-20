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

[src/lib/repository/domain/queryable.ts:228](https://github.com/lambda-orm/lambdaorm-base/blob/65087f84cfbd6ccc99ab4388b6009fa8e9302755/src/lib/repository/domain/queryable.ts#L228)

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

[src/lib/repository/domain/queryable.ts:230](https://github.com/lambda-orm/lambdaorm-base/blob/65087f84cfbd6ccc99ab4388b6009fa8e9302755/src/lib/repository/domain/queryable.ts#L230)
