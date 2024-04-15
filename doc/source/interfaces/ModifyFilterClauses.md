[Lambda ORM](../README.md) / ModifyFilterClauses

# Interface: ModifyFilterClauses\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [include](ModifyFilterClauses.md#include)

## Methods

### include

▸ **include**(`predicate`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[src/lib/repository/domain/queryable.ts:220](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/repository/domain/queryable.ts#L220)
