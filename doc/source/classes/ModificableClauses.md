[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / ModificableClauses

# Class: ModificableClauses\<T\>

## Extends

- [`QueryAction`](QueryAction.md)

## Type parameters

• **T**

## Constructors

### new ModificableClauses()

> **new ModificableClauses**\<`T`\>(`actions`, `query`): [`ModificableClauses`](ModificableClauses.md)\<`T`\>

#### Parameters

• **actions**: [`QueryActions`](../interfaces/QueryActions.md)

• **query**: `string`

#### Returns

[`ModificableClauses`](ModificableClauses.md)\<`T`\>

#### Inherited from

[`QueryAction`](QueryAction.md).[`constructor`](QueryAction.md#constructors)

#### Source

[src/lib/repository/domain/queryable.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/7ab89b6bcd2fea05971e688ab15feca3a500d972/src/lib/repository/domain/queryable.ts#L8)

## Methods

### constraints()

> **constraints**(): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Inherited from

[`QueryAction`](QueryAction.md).[`constraints`](QueryAction.md#constraints)

#### Source

[src/lib/repository/domain/queryable.ts:25](https://github.com/lambda-orm/lambdaorm-base/blob/7ab89b6bcd2fea05971e688ab15feca3a500d972/src/lib/repository/domain/queryable.ts#L25)

***

### execute()

> **execute**(`data`): `Promise`\<`any`\>

#### Parameters

• **data**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`QueryAction`](QueryAction.md).[`execute`](QueryAction.md#execute)

#### Source

[src/lib/repository/domain/queryable.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/7ab89b6bcd2fea05971e688ab15feca3a500d972/src/lib/repository/domain/queryable.ts#L13)

***

### filter()

> **filter**(`predicate`): [`FilterClauses`](FilterClauses.md)\<`T`\>

#### Parameters

• **predicate**

#### Returns

[`FilterClauses`](FilterClauses.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:123](https://github.com/lambda-orm/lambdaorm-base/blob/7ab89b6bcd2fea05971e688ab15feca3a500d972/src/lib/repository/domain/queryable.ts#L123)

***

### include()

> **include**(`predicate`): [`FilterAction`](FilterAction.md)\<`T`\>

#### Parameters

• **predicate**

#### Returns

[`FilterAction`](FilterAction.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:128](https://github.com/lambda-orm/lambdaorm-base/blob/7ab89b6bcd2fea05971e688ab15feca3a500d972/src/lib/repository/domain/queryable.ts#L128)

***

### metadata()

> **metadata**(): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Inherited from

[`QueryAction`](QueryAction.md).[`metadata`](QueryAction.md#metadata)

#### Source

[src/lib/repository/domain/queryable.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/7ab89b6bcd2fea05971e688ab15feca3a500d972/src/lib/repository/domain/queryable.ts#L37)

***

### model()

> **model**(): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Inherited from

[`QueryAction`](QueryAction.md).[`model`](QueryAction.md#model)

#### Source

[src/lib/repository/domain/queryable.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/7ab89b6bcd2fea05971e688ab15feca3a500d972/src/lib/repository/domain/queryable.ts#L21)

***

### normalize()

> **normalize**(): `string`

#### Returns

`string`

#### Inherited from

[`QueryAction`](QueryAction.md).[`normalize`](QueryAction.md#normalize)

#### Source

[src/lib/repository/domain/queryable.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/7ab89b6bcd2fea05971e688ab15feca3a500d972/src/lib/repository/domain/queryable.ts#L17)

***

### parameters()

> **parameters**(): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Inherited from

[`QueryAction`](QueryAction.md).[`parameters`](QueryAction.md#parameters)

#### Source

[src/lib/repository/domain/queryable.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/7ab89b6bcd2fea05971e688ab15feca3a500d972/src/lib/repository/domain/queryable.ts#L29)

***

### sentence()

> **sentence**(): `Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Returns

`Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Inherited from

[`QueryAction`](QueryAction.md).[`sentence`](QueryAction.md#sentence)

#### Source

[src/lib/repository/domain/queryable.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/7ab89b6bcd2fea05971e688ab15feca3a500d972/src/lib/repository/domain/queryable.ts#L33)
