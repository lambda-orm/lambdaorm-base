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

[src/lib/repository/domain/queryable.ts:220](https://github.com/lambda-orm/lambdaorm-base/blob/74f7c8b857fa6bb1671dd2c51c1b652b4c192303/src/lib/repository/domain/queryable.ts#L220)
