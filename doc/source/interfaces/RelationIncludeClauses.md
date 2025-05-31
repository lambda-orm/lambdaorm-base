[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / RelationIncludeClauses

# Interface: RelationIncludeClauses\<T\>

Defined in: [src/lib/repository/domain/queryable.ts:246](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L246)

## Type Parameters

### T

`T`

## Methods

### distinct()

> **distinct**\<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:254](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L254)

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

Defined in: [src/lib/repository/domain/queryable.ts:250](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L250)

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

Defined in: [src/lib/repository/domain/queryable.ts:252](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L252)

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

Defined in: [src/lib/repository/domain/queryable.ts:248](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L248)

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
