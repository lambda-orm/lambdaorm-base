[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / QueryAction

# Class: QueryAction

Defined in: [src/lib/repository/domain/queryable.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L5)

## Extended by

- [`PageClauses`](PageClauses.md)
- [`Map2Clauses`](Map2Clauses.md)
- [`FilterAction`](FilterAction.md)
- [`IncludeAction`](IncludeAction.md)
- [`ModificableClauses`](ModificableClauses.md)

## Constructors

### Constructor

> **new QueryAction**(`actions`, `query`): `QueryAction`

Defined in: [src/lib/repository/domain/queryable.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L8)

#### Parameters

##### actions

[`QueryActions`](../interfaces/QueryActions.md)

##### query

`string`

#### Returns

`QueryAction`

## Methods

### constraints()

> **constraints**(): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

Defined in: [src/lib/repository/domain/queryable.ts:25](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L25)

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

***

### execute()

> **execute**(`data`): `Promise`\<`any`\>

Defined in: [src/lib/repository/domain/queryable.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L13)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`any`\>

***

### metadata()

> **metadata**(): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

Defined in: [src/lib/repository/domain/queryable.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L37)

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

***

### model()

> **model**(): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

Defined in: [src/lib/repository/domain/queryable.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L21)

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

***

### normalize()

> **normalize**(): `string`

Defined in: [src/lib/repository/domain/queryable.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L17)

#### Returns

`string`

***

### parameters()

> **parameters**(): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

Defined in: [src/lib/repository/domain/queryable.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L29)

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

***

### sentence()

> **sentence**(): `Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

Defined in: [src/lib/repository/domain/queryable.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/domain/queryable.ts#L33)

#### Returns

`Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>
