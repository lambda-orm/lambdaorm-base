[Lambda ORM](../README.md) / ModifyAllClauses

# Interface: ModifyAllClauses\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [include](ModifyAllClauses.md#include)

## Methods

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

[src/lib/repository/domain/queryable.ts:235](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/repository/domain/queryable.ts#L235)
