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
- [evalSourceRule](SchemaFacade.md#evalsourcerule)
- [get](SchemaFacade.md#get)
- [getSource](SchemaFacade.md#getsource)
- [initialize](SchemaFacade.md#initialize)
- [update](SchemaFacade.md#update)

## Constructors

### constructor

• **new SchemaFacade**(`source`, `domain`, `mapping`, `stage`, `view`, `schemaService`, `routeService`, `extender`, `createSchema`, `updateSchema`, `loadSchema`, `getSchema`, `completeSchema`): [`SchemaFacade`](SchemaFacade.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`DataSourceConfigService`](DataSourceConfigService.md) |
| `domain` | [`DomainConfigService`](DomainConfigService.md) |
| `mapping` | [`MappingsConfigService`](MappingsConfigService.md) |
| `stage` | [`StageConfigService`](StageConfigService.md) |
| `view` | [`ViewsConfigService`](ViewsConfigService.md) |
| `schemaService` | [`SchemaService`](SchemaService.md) |
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

[src/lib/schema/application/facade.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L17)

## Properties

### domain

• `Readonly` **domain**: [`DomainConfigService`](DomainConfigService.md)

#### Defined in

[src/lib/schema/application/facade.ts:19](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L19)

___

### mapping

• `Readonly` **mapping**: [`MappingsConfigService`](MappingsConfigService.md)

#### Defined in

[src/lib/schema/application/facade.ts:20](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L20)

___

### schema

• **schema**: [`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/facade.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L16)

___

### schemaService

• `Readonly` **schemaService**: [`SchemaService`](SchemaService.md)

#### Defined in

[src/lib/schema/application/facade.ts:23](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L23)

___

### source

• `Readonly` **source**: [`DataSourceConfigService`](DataSourceConfigService.md)

#### Defined in

[src/lib/schema/application/facade.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L18)

___

### stage

• `Readonly` **stage**: [`StageConfigService`](StageConfigService.md)

#### Defined in

[src/lib/schema/application/facade.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L21)

___

### view

• `Readonly` **view**: [`ViewsConfigService`](ViewsConfigService.md)

#### Defined in

[src/lib/schema/application/facade.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L22)

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

[src/lib/schema/application/facade.ts:67](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L67)

___

### create

▸ **create**(`data`): [`Schema`](../interfaces/Schema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/facade.ts:43](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L43)

▸ **create**(`data`, `name`): [`Schema`](../interfaces/Schema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |
| `name` | `string` |

#### Returns

[`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/facade.ts:44](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L44)

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

[src/lib/schema/application/facade.ts:35](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L35)

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

[src/lib/schema/application/facade.ts:53](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L53)

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

[src/lib/schema/application/facade.ts:39](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L39)

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

[src/lib/schema/application/facade.ts:57](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L57)

___

### update

▸ **update**(`schema`, `types`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |
| `types` | [`EntityType`](../interfaces/EntityType.md)[] |

#### Returns

`void`

#### Defined in

[src/lib/schema/application/facade.ts:49](https://github.com/lambda-orm/lambdaorm-base/blob/9d93c9d/src/lib/schema/application/facade.ts#L49)
