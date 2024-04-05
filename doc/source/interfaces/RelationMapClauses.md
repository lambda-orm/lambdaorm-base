[Lambda ORM](../README.md) / RelationMapClauses

# Interface: RelationMapClauses\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [filter](RelationMapClauses.md#filter)
- [include](RelationMapClauses.md#include)
- [sort](RelationMapClauses.md#sort)

## Methods

### filter

▸ **filter**(`predicate`, `thisArg?`): [`FilterClauses`](../classes/FilterClauses.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

[`FilterClauses`](../classes/FilterClauses.md)\<`T`\>

#### Defined in

[src/lib/repository/domain/queryable.ts:229](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/repository/domain/queryable.ts#L229)

___

### include

▸ **include**(`predicate`, `thisArg?`): [`IncludeClauses`](../classes/IncludeClauses.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

[`IncludeClauses`](../classes/IncludeClauses.md)\<`T`\>

#### Defined in

[src/lib/repository/domain/queryable.ts:231](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/repository/domain/queryable.ts#L231)

___

### sort

▸ **sort**(`predicate`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

[src/lib/repository/domain/queryable.ts:227](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/repository/domain/queryable.ts#L227)
