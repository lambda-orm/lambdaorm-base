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

[src/lib/repository/domain/queryable.ts:220](https://github.com/lambda-orm/lambdaorm-base/blob/6519a36bb90ceba6741ed0abf1b5c31fac3d7d67/src/lib/repository/domain/queryable.ts#L220)
