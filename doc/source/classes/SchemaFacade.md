[Lambda ORM](../README.md) / SchemaFacade

# Class: SchemaFacade

## Table of contents

### Constructors

- [constructor](SchemaFacade.md#constructor)

### Properties

- [domain](SchemaFacade.md#domain)
- [mapping](SchemaFacade.md#mapping)
- [schema](SchemaFacade.md#schema)
- [schemaService](SchemaFacade.md#schemaservice)
- [source](SchemaFacade.md#source)
- [stage](SchemaFacade.md#stage)
- [view](SchemaFacade.md#view)

### Methods

- [complete](SchemaFacade.md#complete)
- [create](SchemaFacade.md#create)
- [createAndSchemaData](SchemaFacade.md#createandschemadata)
- [evalSourceRule](SchemaFacade.md#evalsourcerule)
- [get](SchemaFacade.md#get)
- [getSource](SchemaFacade.md#getsource)
- [initialize](SchemaFacade.md#initialize)
- [new](SchemaFacade.md#new)
- [schemaData](SchemaFacade.md#schemadata)
- [update](SchemaFacade.md#update)
- [updateAndSchemaData](SchemaFacade.md#updateandschemadata)

## Constructors

### constructor

• **new SchemaFacade**(`source`, `domain`, `mapping`, `stage`, `view`, `schemaService`, `getSchemaData`, `routeService`, `extender`, `createSchema`, `updateSchema`, `loadSchema`, `getSchema`, `completeSchema`): [`SchemaFacade`](SchemaFacade.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`DataSourceConfigService`](DataSourceConfigService.md) |
| `domain` | [`DomainConfigService`](DomainConfigService.md) |
| `mapping` | [`MappingsConfigService`](MappingsConfigService.md) |
| `stage` | [`StageConfigService`](StageConfigService.md) |
| `view` | [`ViewsConfigService`](ViewsConfigService.md) |
| `schemaService` | `SchemaService` |
| `getSchemaData` | [`GetSchemaSchema`](GetSchemaSchema.md) |
| `routeService` | [`RouteService`](RouteService.md) |
| `extender` | [`SchemaExtender`](SchemaExtender.md) |
| `createSchema` | [`CreateSchema`](CreateSchema.md) |
| `updateSchema` | [`UpdateSchema`](UpdateSchema.md) |
| `loadSchema` | [`LoadSchema`](LoadSchema.md) |
| `getSchema` | [`GetSchema`](GetSchema.md) |
| `completeSchema` | [`CompleteSchema`](CompleteSchema.md) |

#### Returns

[`SchemaFacade`](SchemaFacade.md)

#### Defined in

[src/lib/schema/application/facade.ts:19](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L19)

## Properties

### domain

• `Readonly` **domain**: [`DomainConfigService`](DomainConfigService.md)

#### Defined in

[src/lib/schema/application/facade.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L21)

___

### mapping

• `Readonly` **mapping**: [`MappingsConfigService`](MappingsConfigService.md)

#### Defined in

[src/lib/schema/application/facade.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L22)

___

### schema

• **schema**: [`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/facade.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L18)

___

### schemaService

• `Readonly` **schemaService**: `SchemaService`

#### Defined in

[src/lib/schema/application/facade.ts:25](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L25)

___

### source

• `Readonly` **source**: [`DataSourceConfigService`](DataSourceConfigService.md)

#### Defined in

[src/lib/schema/application/facade.ts:20](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L20)

___

### stage

• `Readonly` **stage**: [`StageConfigService`](StageConfigService.md)

#### Defined in

[src/lib/schema/application/facade.ts:23](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L23)

___

### view

• `Readonly` **view**: [`ViewsConfigService`](ViewsConfigService.md)

#### Defined in

[src/lib/schema/application/facade.ts:24](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L24)

## Methods

### complete

▸ **complete**(`schema`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |

#### Returns

`void`

#### Defined in

[src/lib/schema/application/facade.ts:95](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L95)

___

### create

▸ **create**(`data`, `name`): [[`Schema`](../interfaces/Schema.md), `Type`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `name` | `string` |

#### Returns

[[`Schema`](../interfaces/Schema.md), `Type`]

#### Defined in

[src/lib/schema/application/facade.ts:57](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L57)

___

### createAndSchemaData

▸ **createAndSchemaData**(`data`, `name`): [[`Schema`](../interfaces/Schema.md), [`SchemaData`](../interfaces/SchemaData.md)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `name` | `string` |

#### Returns

[[`Schema`](../interfaces/Schema.md), [`SchemaData`](../interfaces/SchemaData.md)]

#### Defined in

[src/lib/schema/application/facade.ts:69](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L69)

___

### evalSourceRule

▸ **evalSourceRule**(`rule`, `clauseInfo`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rule` | [`SourceRule`](../interfaces/SourceRule.md) |
| `clauseInfo` | [`ClauseInfo`](../interfaces/ClauseInfo.md) |

#### Returns

`boolean`

#### Defined in

[src/lib/schema/application/facade.ts:49](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L49)

___

### get

▸ **get**(`source`): `Promise`\<``null`` \| [`Schema`](../interfaces/Schema.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

`Promise`\<``null`` \| [`Schema`](../interfaces/Schema.md)\>

#### Defined in

[src/lib/schema/application/facade.ts:81](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L81)

___

### getSource

▸ **getSource**(`clauseInfo`, `stage?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clauseInfo` | [`ClauseInfo`](../interfaces/ClauseInfo.md) |
| `stage?` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/schema/application/facade.ts:53](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L53)

___

### initialize

▸ **initialize**(`source`): `Promise`\<[`Schema`](../interfaces/Schema.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` \| [`Schema`](../interfaces/Schema.md) |

#### Returns

`Promise`\<[`Schema`](../interfaces/Schema.md)\>

#### Defined in

[src/lib/schema/application/facade.ts:85](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L85)

___

### new

▸ **new**(`dialect?`, `connection?`): [`Schema`](../interfaces/Schema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dialect?` | [`Dialect`](../enums/Dialect.md) |
| `connection?` | `any` |

#### Returns

[`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/facade.ts:38](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L38)

___

### schemaData

▸ **schemaData**(`source`, `name`, `type`): [`SchemaData`](../interfaces/SchemaData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `any` |
| `name` | `string` |
| `type` | `Type` |

#### Returns

[`SchemaData`](../interfaces/SchemaData.md)

#### Defined in

[src/lib/schema/application/facade.ts:65](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L65)

___

### update

▸ **update**(`schema`, `data`, `name`): `Type`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |
| `data` | `any` |
| `name` | `string` |

#### Returns

`Type`

#### Defined in

[src/lib/schema/application/facade.ts:61](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L61)

___

### updateAndSchemaData

▸ **updateAndSchemaData**(`schema`, `data`, `name`): [`SchemaData`](../interfaces/SchemaData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |
| `data` | `any` |
| `name` | `string` |

#### Returns

[`SchemaData`](../interfaces/SchemaData.md)

#### Defined in

[src/lib/schema/application/facade.ts:75](https://github.com/lambda-orm/lambdaorm-base/blob/746ef4f/src/lib/schema/application/facade.ts#L75)
