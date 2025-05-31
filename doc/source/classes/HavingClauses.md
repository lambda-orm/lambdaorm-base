[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / HavingClauses

# Class: HavingClauses\<T\>

Defined in: [src/lib/repository/domain/queryable.ts:60](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L60)

## Extends

- [`MapClauses`](MapClauses.md)\<`T`\>

## Extended by

- [`FilterIncludeClauses`](FilterIncludeClauses.md)
- [`IncludeClauses`](IncludeClauses.md)
- [`FilterClauses`](FilterClauses.md)
- [`Queryable`](Queryable.md)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new HavingClauses**\<`T`\>(`actions`, `query`): `HavingClauses`\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L8)

#### Parameters

##### actions

[`QueryActions`](../interfaces/QueryActions.md)

##### query

`string`

#### Returns

`HavingClauses`\<`T`\>

#### Inherited from

[`MapClauses`](MapClauses.md).[`constructor`](MapClauses.md#constructor)

## Methods

### constraints()

> **constraints**(): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

Defined in: [src/lib/repository/domain/queryable.ts:25](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L25)

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Inherited from

[`MapClauses`](MapClauses.md).[`constraints`](MapClauses.md#constraints)

***

### distinct()

> **distinct**\<`U`\>(`predicate`): [`MapClauses`](MapClauses.md)\<`U`\>

Defined in: [src/lib/repository/domain/queryable.ts:77](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L77)

#### Type Parameters

##### U

`U`

#### Parameters

##### predicate

(`value`, `index`, `array`) => `U`

#### Returns

[`MapClauses`](MapClauses.md)\<`U`\>

***

### execute()

> **execute**(`data`): `Promise`\<`any`\>

Defined in: [src/lib/repository/domain/queryable.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L13)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`MapClauses`](MapClauses.md).[`execute`](MapClauses.md#execute)

***

### first()

> **first**\<`U`\>(`predicate`): [`Map2Clauses`](Map2Clauses.md)\<`U`\>

Defined in: [src/lib/repository/domain/queryable.ts:67](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L67)

#### Type Parameters

##### U

`U`

#### Parameters

##### predicate

(`value`, `index`, `array`) => `U`

#### Returns

[`Map2Clauses`](Map2Clauses.md)\<`U`\>

***

### last()

> **last**\<`U`\>(`predicate`): [`Map2Clauses`](Map2Clauses.md)\<`U`\>

Defined in: [src/lib/repository/domain/queryable.ts:72](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L72)

#### Type Parameters

##### U

`U`

#### Parameters

##### predicate

(`value`, `index`, `array`) => `U`

#### Returns

[`Map2Clauses`](Map2Clauses.md)\<`U`\>

***

### map()

> **map**\<`U`\>(`predicate`): [`MapClauses`](MapClauses.md)\<`U`\>

Defined in: [src/lib/repository/domain/queryable.ts:62](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L62)

#### Type Parameters

##### U

`U`

#### Parameters

##### predicate

(`value`, `index`, `array`) => `U`

#### Returns

[`MapClauses`](MapClauses.md)\<`U`\>

***

### metadata()

> **metadata**(): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

Defined in: [src/lib/repository/domain/queryable.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L37)

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Inherited from

[`MapClauses`](MapClauses.md).[`metadata`](MapClauses.md#metadata)

***

### model()

> **model**(): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

Defined in: [src/lib/repository/domain/queryable.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L21)

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Inherited from

[`MapClauses`](MapClauses.md).[`model`](MapClauses.md#model)

***

### normalize()

> **normalize**(): `string`

Defined in: [src/lib/repository/domain/queryable.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L17)

#### Returns

`string`

#### Inherited from

[`MapClauses`](MapClauses.md).[`normalize`](MapClauses.md#normalize)

***

### page()

> **page**(`page`, `records`): [`QueryAction`](QueryAction.md)

Defined in: [src/lib/repository/domain/queryable.ts:44](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L44)

#### Parameters

##### page

`number`

##### records

`number`

#### Returns

[`QueryAction`](QueryAction.md)

#### Inherited from

[`MapClauses`](MapClauses.md).[`page`](MapClauses.md#page)

***

### parameters()

> **parameters**(): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

Defined in: [src/lib/repository/domain/queryable.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L29)

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Inherited from

[`MapClauses`](MapClauses.md).[`parameters`](MapClauses.md#parameters)

***

### sentence()

> **sentence**(): `Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

Defined in: [src/lib/repository/domain/queryable.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L33)

#### Returns

`Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Inherited from

[`MapClauses`](MapClauses.md).[`sentence`](MapClauses.md#sentence)

***

### sort()

> **sort**(`predicate`): [`PageClauses`](PageClauses.md)

Defined in: [src/lib/repository/domain/queryable.ts:50](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L50)

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

#### Returns

[`PageClauses`](PageClauses.md)

#### Inherited from

[`MapClauses`](MapClauses.md).[`sort`](MapClauses.md#sort)
