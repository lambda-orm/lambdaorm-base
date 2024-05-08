[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / FilterIncludeClauses

# Class: FilterIncludeClauses\<T\>

## Extends

- [`HavingClauses`](HavingClauses.md)\<`T`\>

## Type parameters

• **T**

## Constructors

### new FilterIncludeClauses()

> **new FilterIncludeClauses**\<`T`\>(`actions`, `query`): [`FilterIncludeClauses`](FilterIncludeClauses.md)\<`T`\>

#### Parameters

• **actions**: [`QueryActions`](../interfaces/QueryActions.md)

• **query**: `string`

#### Returns

[`FilterIncludeClauses`](FilterIncludeClauses.md)\<`T`\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`constructor`](HavingClauses.md#constructors)

#### Source

[src/lib/repository/domain/queryable.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/ca6421568853c5efe7433915c5510adb7501a76c/src/lib/repository/domain/queryable.ts#L8)

## Methods

### constraints()

> **constraints**(): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`constraints`](HavingClauses.md#constraints)

#### Source

[src/lib/repository/domain/queryable.ts:25](https://github.com/lambda-orm/lambdaorm-base/blob/ca6421568853c5efe7433915c5510adb7501a76c/src/lib/repository/domain/queryable.ts#L25)

***

### distinct()

> **distinct**\<`U`\>(`predicate`): [`MapClauses`](MapClauses.md)\<`U`\>

#### Type parameters

• **U**

#### Parameters

• **predicate**

#### Returns

[`MapClauses`](MapClauses.md)\<`U`\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`distinct`](HavingClauses.md#distinct)

#### Source

[src/lib/repository/domain/queryable.ts:77](https://github.com/lambda-orm/lambdaorm-base/blob/ca6421568853c5efe7433915c5510adb7501a76c/src/lib/repository/domain/queryable.ts#L77)

***

### execute()

> **execute**(`data`): `Promise`\<`any`\>

#### Parameters

• **data**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`execute`](HavingClauses.md#execute)

#### Source

[src/lib/repository/domain/queryable.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/ca6421568853c5efe7433915c5510adb7501a76c/src/lib/repository/domain/queryable.ts#L13)

***

### first()

> **first**\<`U`\>(`predicate`): [`Map2Clauses`](Map2Clauses.md)\<`U`\>

#### Type parameters

• **U**

#### Parameters

• **predicate**

#### Returns

[`Map2Clauses`](Map2Clauses.md)\<`U`\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`first`](HavingClauses.md#first)

#### Source

[src/lib/repository/domain/queryable.ts:67](https://github.com/lambda-orm/lambdaorm-base/blob/ca6421568853c5efe7433915c5510adb7501a76c/src/lib/repository/domain/queryable.ts#L67)

***

### having()

> **having**(`predicate`): [`HavingClauses`](HavingClauses.md)\<`T`\>

#### Parameters

• **predicate**

#### Returns

[`HavingClauses`](HavingClauses.md)\<`T`\>

#### Source

[src/lib/repository/domain/queryable.ts:83](https://github.com/lambda-orm/lambdaorm-base/blob/ca6421568853c5efe7433915c5510adb7501a76c/src/lib/repository/domain/queryable.ts#L83)

***

### last()

> **last**\<`U`\>(`predicate`): [`Map2Clauses`](Map2Clauses.md)\<`U`\>

#### Type parameters

• **U**

#### Parameters

• **predicate**

#### Returns

[`Map2Clauses`](Map2Clauses.md)\<`U`\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`last`](HavingClauses.md#last)

#### Source

[src/lib/repository/domain/queryable.ts:72](https://github.com/lambda-orm/lambdaorm-base/blob/ca6421568853c5efe7433915c5510adb7501a76c/src/lib/repository/domain/queryable.ts#L72)

***

### map()

> **map**\<`U`\>(`predicate`): [`MapClauses`](MapClauses.md)\<`U`\>

#### Type parameters

• **U**

#### Parameters

• **predicate**

#### Returns

[`MapClauses`](MapClauses.md)\<`U`\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`map`](HavingClauses.md#map)

#### Source

[src/lib/repository/domain/queryable.ts:62](https://github.com/lambda-orm/lambdaorm-base/blob/ca6421568853c5efe7433915c5510adb7501a76c/src/lib/repository/domain/queryable.ts#L62)

***

### metadata()

> **metadata**(): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`metadata`](HavingClauses.md#metadata)

#### Source

[src/lib/repository/domain/queryable.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/ca6421568853c5efe7433915c5510adb7501a76c/src/lib/repository/domain/queryable.ts#L37)

***

### model()

> **model**(): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`model`](HavingClauses.md#model)

#### Source

[src/lib/repository/domain/queryable.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/ca6421568853c5efe7433915c5510adb7501a76c/src/lib/repository/domain/queryable.ts#L21)

***

### normalize()

> **normalize**(): `string`

#### Returns

`string`

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`normalize`](HavingClauses.md#normalize)

#### Source

[src/lib/repository/domain/queryable.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/ca6421568853c5efe7433915c5510adb7501a76c/src/lib/repository/domain/queryable.ts#L17)

***

### page()

> **page**(`page`, `records`): [`QueryAction`](QueryAction.md)

#### Parameters

• **page**: `number`

• **records**: `number`

#### Returns

[`QueryAction`](QueryAction.md)

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`page`](HavingClauses.md#page)

#### Source

[src/lib/repository/domain/queryable.ts:44](https://github.com/lambda-orm/lambdaorm-base/blob/ca6421568853c5efe7433915c5510adb7501a76c/src/lib/repository/domain/queryable.ts#L44)

***

### parameters()

> **parameters**(): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`parameters`](HavingClauses.md#parameters)

#### Source

[src/lib/repository/domain/queryable.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/ca6421568853c5efe7433915c5510adb7501a76c/src/lib/repository/domain/queryable.ts#L29)

***

### sentence()

> **sentence**(): `Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Returns

`Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`sentence`](HavingClauses.md#sentence)

#### Source

[src/lib/repository/domain/queryable.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/ca6421568853c5efe7433915c5510adb7501a76c/src/lib/repository/domain/queryable.ts#L33)

***

### sort()

> **sort**(`predicate`): [`PageClauses`](PageClauses.md)

#### Parameters

• **predicate**

#### Returns

[`PageClauses`](PageClauses.md)

#### Inherited from

[`HavingClauses`](HavingClauses.md).[`sort`](HavingClauses.md#sort)

#### Source

[src/lib/repository/domain/queryable.ts:50](https://github.com/lambda-orm/lambdaorm-base/blob/ca6421568853c5efe7433915c5510adb7501a76c/src/lib/repository/domain/queryable.ts#L50)
