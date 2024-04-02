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

[src/lib/repository/domain/queryable.ts:251](https://github.com/lambda-orm/lambdaorm-base/blob/8617cc5/src/lib/repository/domain/queryable.ts#L251)

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

[src/lib/repository/domain/queryable.ts:261](https://github.com/lambda-orm/lambdaorm-base/blob/8617cc5/src/lib/repository/domain/queryable.ts#L261)

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

[src/lib/repository/domain/queryable.ts:247](https://github.com/lambda-orm/lambdaorm-base/blob/8617cc5/src/lib/repository/domain/queryable.ts#L247)

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

[src/lib/repository/domain/queryable.ts:253](https://github.com/lambda-orm/lambdaorm-base/blob/8617cc5/src/lib/repository/domain/queryable.ts#L253)

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

[src/lib/repository/domain/queryable.ts:258](https://github.com/lambda-orm/lambdaorm-base/blob/8617cc5/src/lib/repository/domain/queryable.ts#L258)

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

[src/lib/repository/domain/queryable.ts:249](https://github.com/lambda-orm/lambdaorm-base/blob/8617cc5/src/lib/repository/domain/queryable.ts#L249)

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

[src/lib/repository/domain/queryable.ts:245](https://github.com/lambda-orm/lambdaorm-base/blob/8617cc5/src/lib/repository/domain/queryable.ts#L245)

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

[src/lib/repository/domain/queryable.ts:255](https://github.com/lambda-orm/lambdaorm-base/blob/8617cc5/src/lib/repository/domain/queryable.ts#L255)
