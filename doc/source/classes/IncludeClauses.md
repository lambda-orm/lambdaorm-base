[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / IncludeClauses

# Class: IncludeClauses\<T\>

Defined in: [src/lib/repository/domain/queryable.ts:87](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L87)

## Extends

- [`HavingClauses`](HavingClauses.md)\<`T`\>

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new IncludeClauses**\<`T`\>(`actions`, `query`): `IncludeClauses`\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L8)

#### Parameters

##### actions

[`QueryActions`](../interfaces/QueryActions.md)

##### query

`string`

#### Returns

`IncludeClauses`\<`T`\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`constructor`](HavingClauses.md#constructor)

## Methods

### constraints()

> **constraints**(): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

Defined in: [src/lib/repository/domain/queryable.ts:25](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L25)

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`constraints`](HavingClauses.md#constraints)

***

### distinct()

> **distinct**\<`U`\>(`predicate`): [`MapClauses`](MapClauses.md)\<`U`\>

Defined in: [src/lib/repository/domain/queryable.ts:77](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L77)

#### Type Parameters

##### U

`U`

#### Parameters

##### predicate

(`value`, `index`, `array`) => `U`

#### Returns

[`MapClauses`](MapClauses.md)\<`U`\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`distinct`](HavingClauses.md#distinct)

***

### execute()

> **execute**(`data`): `Promise`\<`any`\>

Defined in: [src/lib/repository/domain/queryable.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L13)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`execute`](HavingClauses.md#execute)

***

### filter()

> **filter**(`predicate`): [`FilterIncludeClauses`](FilterIncludeClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:89](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L89)

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

#### Returns

[`FilterIncludeClauses`](FilterIncludeClauses.md)\<`T`\>

***

### first()

> **first**\<`U`\>(`predicate`): [`Map2Clauses`](Map2Clauses.md)\<`U`\>

Defined in: [src/lib/repository/domain/queryable.ts:67](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L67)

#### Type Parameters

##### U

`U`

#### Parameters

##### predicate

(`value`, `index`, `array`) => `U`

#### Returns

[`Map2Clauses`](Map2Clauses.md)\<`U`\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`first`](HavingClauses.md#first)

***

### having()

> **having**(`predicate`): [`HavingClauses`](HavingClauses.md)\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:94](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L94)

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

#### Returns

[`HavingClauses`](HavingClauses.md)\<`T`\>

***

### last()

> **last**\<`U`\>(`predicate`): [`Map2Clauses`](Map2Clauses.md)\<`U`\>

Defined in: [src/lib/repository/domain/queryable.ts:72](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L72)

#### Type Parameters

##### U

`U`

#### Parameters

##### predicate

(`value`, `index`, `array`) => `U`

#### Returns

[`Map2Clauses`](Map2Clauses.md)\<`U`\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`last`](HavingClauses.md#last)

***

### map()

> **map**\<`U`\>(`predicate`): [`MapClauses`](MapClauses.md)\<`U`\>

Defined in: [src/lib/repository/domain/queryable.ts:62](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L62)

#### Type Parameters

##### U

`U`

#### Parameters

##### predicate

(`value`, `index`, `array`) => `U`

#### Returns

[`MapClauses`](MapClauses.md)\<`U`\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`map`](HavingClauses.md#map)

***

### metadata()

> **metadata**(): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

Defined in: [src/lib/repository/domain/queryable.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L37)

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`metadata`](HavingClauses.md#metadata)

***

### model()

> **model**(): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

Defined in: [src/lib/repository/domain/queryable.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L21)

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`model`](HavingClauses.md#model)

***

### normalize()

> **normalize**(): `string`

Defined in: [src/lib/repository/domain/queryable.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L17)

#### Returns

`string`

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`normalize`](HavingClauses.md#normalize)

***

### page()

> **page**(`page`, `records`): [`QueryAction`](QueryAction.md)

Defined in: [src/lib/repository/domain/queryable.ts:44](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L44)

#### Parameters

##### page

`number`

##### records

`number`

#### Returns

[`QueryAction`](QueryAction.md)

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`page`](HavingClauses.md#page)

***

### parameters()

> **parameters**(): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

Defined in: [src/lib/repository/domain/queryable.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L29)

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`parameters`](HavingClauses.md#parameters)

***

### sentence()

> **sentence**(): `Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

Defined in: [src/lib/repository/domain/queryable.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L33)

#### Returns

`Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`sentence`](HavingClauses.md#sentence)

***

### sort()

> **sort**(`predicate`): [`PageClauses`](PageClauses.md)

Defined in: [src/lib/repository/domain/queryable.ts:50](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/queryable.ts#L50)

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

#### Returns

[`PageClauses`](PageClauses.md)

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`sort`](HavingClauses.md#sort)
