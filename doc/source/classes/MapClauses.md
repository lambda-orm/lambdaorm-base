[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / MapClauses

# Class: MapClauses\<T\>

Defined in: [src/lib/repository/domain/queryable.ts:48](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L48)

## Extends

- [`PageClauses`](PageClauses.md)

## Extended by

- [`HavingClauses`](HavingClauses.md)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new MapClauses**\<`T`\>(`actions`, `query`): `MapClauses`\<`T`\>

Defined in: [src/lib/repository/domain/queryable.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L8)

#### Parameters

##### actions

[`QueryActions`](../interfaces/QueryActions.md)

##### query

`string`

#### Returns

`MapClauses`\<`T`\>

#### Inherited from

[`PageClauses`](PageClauses.md).[`constructor`](PageClauses.md#constructor)

## Methods

### constraints()

> **constraints**(): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

Defined in: [src/lib/repository/domain/queryable.ts:25](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L25)

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Inherited from

[`PageClauses`](PageClauses.md).[`constraints`](PageClauses.md#constraints)

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

[`PageClauses`](PageClauses.md).[`execute`](PageClauses.md#execute)

***

### metadata()

> **metadata**(): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

Defined in: [src/lib/repository/domain/queryable.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L37)

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Inherited from

[`PageClauses`](PageClauses.md).[`metadata`](PageClauses.md#metadata)

***

### model()

> **model**(): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

Defined in: [src/lib/repository/domain/queryable.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L21)

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Inherited from

[`PageClauses`](PageClauses.md).[`model`](PageClauses.md#model)

***

### normalize()

> **normalize**(): `string`

Defined in: [src/lib/repository/domain/queryable.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L17)

#### Returns

`string`

#### Inherited from

[`PageClauses`](PageClauses.md).[`normalize`](PageClauses.md#normalize)

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

[`PageClauses`](PageClauses.md).[`page`](PageClauses.md#page)

***

### parameters()

> **parameters**(): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

Defined in: [src/lib/repository/domain/queryable.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L29)

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Inherited from

[`PageClauses`](PageClauses.md).[`parameters`](PageClauses.md#parameters)

***

### sentence()

> **sentence**(): `Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

Defined in: [src/lib/repository/domain/queryable.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L33)

#### Returns

`Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Inherited from

[`PageClauses`](PageClauses.md).[`sentence`](PageClauses.md#sentence)

***

### sort()

> **sort**(`predicate`): [`PageClauses`](PageClauses.md)

Defined in: [src/lib/repository/domain/queryable.ts:50](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L50)

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

#### Returns

[`PageClauses`](PageClauses.md)
