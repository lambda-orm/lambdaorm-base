[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / QueryAction

# Class: QueryAction

## Extended by

- [`PageClauses`](PageClauses.md)
- [`Map2Clauses`](Map2Clauses.md)
- [`FilterAction`](FilterAction.md)
- [`IncludeAction`](IncludeAction.md)
- [`ModificableClauses`](ModificableClauses.md)

## Constructors

### new QueryAction()

> **new QueryAction**(`actions`, `query`): [`QueryAction`](QueryAction.md)

#### Parameters

• **actions**: [`QueryActions`](../interfaces/QueryActions.md)

• **query**: `string`

#### Returns

[`QueryAction`](QueryAction.md)

#### Source

[src/lib/repository/domain/queryable.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/repository/domain/queryable.ts#L8)

## Methods

### constraints()

> **constraints**(): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Source

[src/lib/repository/domain/queryable.ts:25](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/repository/domain/queryable.ts#L25)

***

### execute()

> **execute**(`data`): `Promise`\<`any`\>

#### Parameters

• **data**: `any`

#### Returns

`Promise`\<`any`\>

#### Source

[src/lib/repository/domain/queryable.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/repository/domain/queryable.ts#L13)

***

### metadata()

> **metadata**(): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Source

[src/lib/repository/domain/queryable.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/repository/domain/queryable.ts#L37)

***

### model()

> **model**(): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Source

[src/lib/repository/domain/queryable.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/repository/domain/queryable.ts#L21)

***

### normalize()

> **normalize**(): `string`

#### Returns

`string`

#### Source

[src/lib/repository/domain/queryable.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/repository/domain/queryable.ts#L17)

***

### parameters()

> **parameters**(): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Source

[src/lib/repository/domain/queryable.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/repository/domain/queryable.ts#L29)

***

### sentence()

> **sentence**(): `Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Returns

`Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Source

[src/lib/repository/domain/queryable.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/repository/domain/queryable.ts#L33)
