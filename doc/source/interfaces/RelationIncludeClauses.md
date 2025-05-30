[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / RelationIncludeClauses

# Interface: RelationIncludeClauses\<T\>

Defined in: [src/lib/repository/domain/queryable.ts:246](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L246)

## Type Parameters

### T

`T`

## Methods

### distinct()

> **distinct**\<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:254](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L254)

#### Type Parameters

##### U

`U`

#### Parameters

##### predicate

(`value`, `index`, `array`) => `U`

##### thisArg?

`any`

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

***

### first()

> **first**\<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:250](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L250)

#### Type Parameters

##### U

`U`

#### Parameters

##### predicate

(`value`, `index`, `array`) => `U`

##### thisArg?

`any`

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

***

### last()

> **last**\<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:252](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L252)

#### Type Parameters

##### U

`U`

#### Parameters

##### predicate

(`value`, `index`, `array`) => `U`

##### thisArg?

`any`

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

***

### map()

> **map**\<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:248](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L248)

#### Type Parameters

##### U

`U`

#### Parameters

##### predicate

(`value`, `index`, `array`) => `U`

##### thisArg?

`any`

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)\<`T`\>
