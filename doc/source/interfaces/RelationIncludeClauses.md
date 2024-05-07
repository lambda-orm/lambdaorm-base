[Lambda ORM](../README.md) / RelationIncludeClauses

# Interface: RelationIncludeClauses\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [distinct](RelationIncludeClauses.md#distinct)
- [first](RelationIncludeClauses.md#first)
- [last](RelationIncludeClauses.md#last)
- [map](RelationIncludeClauses.md#map)

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

[src/lib/repository/domain/queryable.ts:254](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/repository/domain/queryable.ts#L254)

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

[src/lib/repository/domain/queryable.ts:250](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/repository/domain/queryable.ts#L250)

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

[src/lib/repository/domain/queryable.ts:252](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/repository/domain/queryable.ts#L252)

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

[src/lib/repository/domain/queryable.ts:248](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/repository/domain/queryable.ts#L248)
