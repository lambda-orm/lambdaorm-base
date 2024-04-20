[Lambda ORM](../README.md) / ModifyIncludeClauses

# Interface: ModifyIncludeClauses\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [filter](ModifyIncludeClauses.md#filter)

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

[src/lib/repository/domain/queryable.ts:224](https://github.com/lambda-orm/lambdaorm-base/blob/f05639463d61009f8bbb0506eec30106c529593e/src/lib/repository/domain/queryable.ts#L224)
