[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / MapClauses

# Class: MapClauses\<T\>

## Extends

- [`PageClauses`](PageClauses.md)

## Type parameters

• **T**

## Constructors

### new MapClauses()

> **new MapClauses**\<`T`\>(`actions`, `query`): [`MapClauses`](MapClauses.md)\<`T`\>

#### Parameters

• **actions**: [`QueryActions`](../interfaces/QueryActions.md)

• **query**: `string`

#### Returns

[`MapClauses`](MapClauses.md)\<`T`\>

#### Inherited from

[`PageClauses`](PageClauses.md).[`constructor`](PageClauses.md#constructors)

#### Source

[src/lib/repository/domain/queryable.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L8)

## Methods

### constraints()

> **constraints**(): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Inherited from

[`PageClauses`](PageClauses.md).[`constraints`](PageClauses.md#constraints)

#### Source

[src/lib/repository/domain/queryable.ts:25](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L25)

***

### execute()

> **execute**(`data`): `Promise`\<`any`\>

#### Parameters

• **data**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`PageClauses`](PageClauses.md).[`execute`](PageClauses.md#execute)

#### Source

[src/lib/repository/domain/queryable.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L13)

***

### metadata()

> **metadata**(): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Inherited from

[`PageClauses`](PageClauses.md).[`metadata`](PageClauses.md#metadata)

#### Source

[src/lib/repository/domain/queryable.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L37)

***

### model()

> **model**(): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Inherited from

[`PageClauses`](PageClauses.md).[`model`](PageClauses.md#model)

#### Source

[src/lib/repository/domain/queryable.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L21)

***

### normalize()

> **normalize**(): `string`

#### Returns

`string`

#### Inherited from

[`PageClauses`](PageClauses.md).[`normalize`](PageClauses.md#normalize)

#### Source

[src/lib/repository/domain/queryable.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L17)

***

### page()

> **page**(`page`, `records`): [`QueryAction`](QueryAction.md)

#### Parameters

• **page**: `number`

• **records**: `number`

#### Returns

[`QueryAction`](QueryAction.md)

#### Inherited from

[`PageClauses`](PageClauses.md).[`page`](PageClauses.md#page)

#### Source

[src/lib/repository/domain/queryable.ts:44](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L44)

***

### parameters()

> **parameters**(): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Inherited from

[`PageClauses`](PageClauses.md).[`parameters`](PageClauses.md#parameters)

#### Source

[src/lib/repository/domain/queryable.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L29)

***

### sentence()

> **sentence**(): `Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Returns

`Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Inherited from

[`PageClauses`](PageClauses.md).[`sentence`](PageClauses.md#sentence)

#### Source

[src/lib/repository/domain/queryable.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L33)

***

### sort()

> **sort**(`predicate`): [`PageClauses`](PageClauses.md)

#### Parameters

• **predicate**

#### Returns

[`PageClauses`](PageClauses.md)

#### Source

[src/lib/repository/domain/queryable.ts:50](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/repository/domain/queryable.ts#L50)
