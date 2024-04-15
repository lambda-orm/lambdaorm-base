[Lambda ORM](../README.md) / IRelation

# Interface: IRelation\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [distinct](IRelation.md#distinct)
- [filter](IRelation.md#filter)
- [first](IRelation.md#first)
- [include](IRelation.md#include)
- [insert](IRelation.md#insert)
- [last](IRelation.md#last)
- [map](IRelation.md#map)
- [update](IRelation.md#update)
- [upsert](IRelation.md#upsert)

## Methods

### distinct

▸ **distinct**\<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |
| `thisArg?` | `any` |

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Defined in

[src/lib/repository/domain/queryable.ts:264](https://github.com/lambda-orm/lambdaorm-base/blob/5e1abd015335d4a3ec9228dba79c190930c6d0f1/src/lib/repository/domain/queryable.ts#L264)

___

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

[src/lib/repository/domain/queryable.ts:276](https://github.com/lambda-orm/lambdaorm-base/blob/5e1abd015335d4a3ec9228dba79c190930c6d0f1/src/lib/repository/domain/queryable.ts#L276)

___

### first

▸ **first**\<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |
| `thisArg?` | `any` |

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Defined in

[src/lib/repository/domain/queryable.ts:260](https://github.com/lambda-orm/lambdaorm-base/blob/5e1abd015335d4a3ec9228dba79c190930c6d0f1/src/lib/repository/domain/queryable.ts#L260)

___

### include

▸ **include**(`predicate`, `thisArg?`): [`RelationIncludeClauses`](RelationIncludeClauses.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

[`RelationIncludeClauses`](RelationIncludeClauses.md)\<`T`\>

#### Defined in

[src/lib/repository/domain/queryable.ts:266](https://github.com/lambda-orm/lambdaorm-base/blob/5e1abd015335d4a3ec9228dba79c190930c6d0f1/src/lib/repository/domain/queryable.ts#L266)

___

### insert

▸ **insert**(`predicate?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | (`value`: `T`) => `unknown` |

#### Returns

`void`

#### Defined in

[src/lib/repository/domain/queryable.ts:271](https://github.com/lambda-orm/lambdaorm-base/blob/5e1abd015335d4a3ec9228dba79c190930c6d0f1/src/lib/repository/domain/queryable.ts#L271)

___

### last

▸ **last**\<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |
| `thisArg?` | `any` |

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Defined in

[src/lib/repository/domain/queryable.ts:262](https://github.com/lambda-orm/lambdaorm-base/blob/5e1abd015335d4a3ec9228dba79c190930c6d0f1/src/lib/repository/domain/queryable.ts#L262)

___

### map

▸ **map**\<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |
| `thisArg?` | `any` |

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

#### Defined in

[src/lib/repository/domain/queryable.ts:258](https://github.com/lambda-orm/lambdaorm-base/blob/5e1abd015335d4a3ec9228dba79c190930c6d0f1/src/lib/repository/domain/queryable.ts#L258)

___

### update

▸ **update**(`predicate?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | (`value`: `T`) => `unknown` |

#### Returns

`void`

#### Defined in

[src/lib/repository/domain/queryable.ts:268](https://github.com/lambda-orm/lambdaorm-base/blob/5e1abd015335d4a3ec9228dba79c190930c6d0f1/src/lib/repository/domain/queryable.ts#L268)

___

### upsert

▸ **upsert**(`predicate?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | (`value`: `T`) => `unknown` |

#### Returns

`void`

#### Defined in

[src/lib/repository/domain/queryable.ts:273](https://github.com/lambda-orm/lambdaorm-base/blob/5e1abd015335d4a3ec9228dba79c190930c6d0f1/src/lib/repository/domain/queryable.ts#L273)
