[Lambda ORM](../README.md) / SchemaFacade

# Class: SchemaFacade

## Table of contents

### Constructors

- [constructor](SchemaFacade.md#constructor)

### Properties

- [domain](SchemaFacade.md#domain)
- [mapping](SchemaFacade.md#mapping)
- [schema](SchemaFacade.md#schema)
- [schemaPath](SchemaFacade.md#schemapath)
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
- [write](SchemaFacade.md#write)

## Constructors

### constructor

• **new SchemaFacade**(`source`, `domain`, `mapping`, `stage`, `view`, `schemaService`, `getSchemaData`, `routeService`, `extender`, `createSchema`, `updateSchema`, `loadSchema`, `fileService`, `completeSchema`): [`SchemaFacade`](SchemaFacade.md)

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
| `fileService` | [`IFileSchemaService`](../interfaces/IFileSchemaService.md) |
| `completeSchema` | [`CompleteSchema`](CompleteSchema.md) |

#### Returns

[`SchemaFacade`](SchemaFacade.md)

#### Defined in

[src/lib/schema/application/facade.ts:20](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L20)

## Properties

### domain

• `Readonly` **domain**: [`DomainConfigService`](DomainConfigService.md)

#### Defined in

[src/lib/schema/application/facade.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L22)

___

### mapping

• `Readonly` **mapping**: [`MappingsConfigService`](MappingsConfigService.md)

#### Defined in

[src/lib/schema/application/facade.ts:23](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L23)

___

### schema

• **schema**: [`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/facade.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L18)

___

### schemaPath

• `Optional` **schemaPath**: `string`

#### Defined in

[src/lib/schema/application/facade.ts:19](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L19)

___

### schemaService

• `Readonly` **schemaService**: `SchemaService`

#### Defined in

[src/lib/schema/application/facade.ts:26](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L26)

___

### source

• `Readonly` **source**: [`DataSourceConfigService`](DataSourceConfigService.md)

#### Defined in

[src/lib/schema/application/facade.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L21)

___

### stage

• `Readonly` **stage**: [`StageConfigService`](StageConfigService.md)

#### Defined in

[src/lib/schema/application/facade.ts:24](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L24)

___

### view

• `Readonly` **view**: [`ViewsConfigService`](ViewsConfigService.md)

#### Defined in

[src/lib/schema/application/facade.ts:25](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L25)

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

[src/lib/schema/application/facade.ts:111](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L111)

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

[src/lib/schema/application/facade.ts:58](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L58)

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

[src/lib/schema/application/facade.ts:70](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L70)

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

[src/lib/schema/application/facade.ts:50](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L50)

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

[src/lib/schema/application/facade.ts:82](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L82)

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

[src/lib/schema/application/facade.ts:54](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L54)

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

[src/lib/schema/application/facade.ts:99](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L99)

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

[src/lib/schema/application/facade.ts:39](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L39)

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

[src/lib/schema/application/facade.ts:66](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L66)

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

[src/lib/schema/application/facade.ts:62](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L62)

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

[src/lib/schema/application/facade.ts:76](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L76)

___

### write

▸ **write**(`schema?`, `fullPath?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema?` | [`Schema`](../interfaces/Schema.md) |
| `fullPath?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/schema/application/facade.ts:90](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/facade.ts#L90)
