[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / IRelation

# Interface: IRelation\<T\>

Defined in: [src/lib/repository/domain/queryable.ts:256](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L256)

## Type Parameters

### T

`T`

## Methods

### distinct()

> **distinct**\<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:264](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L264)

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

### filter()

> **filter**(`predicate`, `thisArg?`): [`FilterClauses`](../classes/FilterClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:276](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L276)

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

##### thisArg?

`any`

#### Returns

[`FilterClauses`](../classes/FilterClauses.md)\<`T`\>

***

### first()

> **first**\<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:260](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L260)

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

### include()

> **include**(`predicate`, `thisArg?`): [`RelationIncludeClauses`](RelationIncludeClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:266](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L266)

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

##### thisArg?

`any`

#### Returns

[`RelationIncludeClauses`](RelationIncludeClauses.md)\<`T`\>

***

### insert()

> **insert**(`predicate?`): `void`

Defined in: [src/lib/repository/domain/queryable.ts:271](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L271)

#### Parameters

##### predicate?

(`value`) => `unknown`

#### Returns

`void`

***

### last()

> **last**\<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:262](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L262)

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

Defined in: [src/lib/repository/domain/queryable.ts:258](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L258)

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

### update()

> **update**(`predicate?`): `void`

Defined in: [src/lib/repository/domain/queryable.ts:268](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L268)

#### Parameters

##### predicate?

(`value`) => `unknown`

#### Returns

`void`

***

### upsert()

> **upsert**(`predicate?`): `void`

Defined in: [src/lib/repository/domain/queryable.ts:273](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L273)

#### Parameters

##### predicate?

(`value`) => `unknown`

#### Returns

`void`
