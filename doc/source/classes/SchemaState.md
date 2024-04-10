[Lambda ORM](../README.md) / SchemaState

# Class: SchemaState

## Table of contents

### Constructors

- [constructor](SchemaState.md#constructor)

### Properties

- [domain](SchemaState.md#domain)
- [mapping](SchemaState.md#mapping)
- [originalSchema](SchemaState.md#originalschema)
- [schema](SchemaState.md#schema)
- [schemaPath](SchemaState.md#schemapath)
- [source](SchemaState.md#source)
- [stage](SchemaState.md#stage)
- [view](SchemaState.md#view)

### Methods

- [evalSourceRule](SchemaState.md#evalsourcerule)
- [getSource](SchemaState.md#getsource)
- [load](SchemaState.md#load)
- [updateFromData](SchemaState.md#updatefromdata)
- [updateFromMapping](SchemaState.md#updatefrommapping)

## Constructors

### constructor

• **new SchemaState**(`source`, `domain`, `mapping`, `stage`, `view`, `routeService`, `facade`, `loadSchema`, `fileService`, `helper`): [`SchemaState`](SchemaState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`DataSourceConfigService`](DataSourceConfigService.md) |
| `domain` | [`DomainConfigService`](DomainConfigService.md) |
| `mapping` | [`MappingsConfigService`](MappingsConfigService.md) |
| `stage` | [`StageConfigService`](StageConfigService.md) |
| `view` | [`ViewsConfigService`](ViewsConfigService.md) |
| `routeService` | [`RouteService`](RouteService.md) |
| `facade` | [`SchemaFacade`](SchemaFacade.md) |
| `loadSchema` | [`LoadSchema`](LoadSchema.md) |
| `fileService` | [`IFileSchemaService`](../interfaces/IFileSchemaService.md) |
| `helper` | `H3lp` |

#### Returns

[`SchemaState`](SchemaState.md)

#### Defined in

[src/lib/schema/application/state.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/e359b56ef95224260d7f0fa055fdb7feaf3e4b05/src/lib/schema/application/state.ts#L17)

## Properties

### domain

• `Readonly` **domain**: [`DomainConfigService`](DomainConfigService.md)

#### Defined in

[src/lib/schema/application/state.ts:19](https://github.com/lambda-orm/lambdaorm-base/blob/e359b56ef95224260d7f0fa055fdb7feaf3e4b05/src/lib/schema/application/state.ts#L19)

___

### mapping

• `Readonly` **mapping**: [`MappingsConfigService`](MappingsConfigService.md)

#### Defined in

[src/lib/schema/application/state.ts:20](https://github.com/lambda-orm/lambdaorm-base/blob/e359b56ef95224260d7f0fa055fdb7feaf3e4b05/src/lib/schema/application/state.ts#L20)

___

### originalSchema

• **originalSchema**: [`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/state.ts:15](https://github.com/lambda-orm/lambdaorm-base/blob/e359b56ef95224260d7f0fa055fdb7feaf3e4b05/src/lib/schema/application/state.ts#L15)

___

### schema

• **schema**: [`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/state.ts:14](https://github.com/lambda-orm/lambdaorm-base/blob/e359b56ef95224260d7f0fa055fdb7feaf3e4b05/src/lib/schema/application/state.ts#L14)

___

### schemaPath

• `Optional` **schemaPath**: `string`

#### Defined in

[src/lib/schema/application/state.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/e359b56ef95224260d7f0fa055fdb7feaf3e4b05/src/lib/schema/application/state.ts#L16)

___

### source

• `Readonly` **source**: [`DataSourceConfigService`](DataSourceConfigService.md)

#### Defined in

[src/lib/schema/application/state.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/e359b56ef95224260d7f0fa055fdb7feaf3e4b05/src/lib/schema/application/state.ts#L18)

___

### stage

• `Readonly` **stage**: [`StageConfigService`](StageConfigService.md)

#### Defined in

[src/lib/schema/application/state.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/e359b56ef95224260d7f0fa055fdb7feaf3e4b05/src/lib/schema/application/state.ts#L21)

___

### view

• `Readonly` **view**: [`ViewsConfigService`](ViewsConfigService.md)

#### Defined in

[src/lib/schema/application/state.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/e359b56ef95224260d7f0fa055fdb7feaf3e4b05/src/lib/schema/application/state.ts#L22)

## Methods

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

[src/lib/schema/application/state.ts:67](https://github.com/lambda-orm/lambdaorm-base/blob/e359b56ef95224260d7f0fa055fdb7feaf3e4b05/src/lib/schema/application/state.ts#L67)

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

[src/lib/schema/application/state.ts:71](https://github.com/lambda-orm/lambdaorm-base/blob/e359b56ef95224260d7f0fa055fdb7feaf3e4b05/src/lib/schema/application/state.ts#L71)

___

### load

▸ **load**(`source`): `Promise`\<[`Schema`](../interfaces/Schema.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` \| [`Schema`](../interfaces/Schema.md) |

#### Returns

`Promise`\<[`Schema`](../interfaces/Schema.md)\>

#### Defined in

[src/lib/schema/application/state.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/e359b56ef95224260d7f0fa055fdb7feaf3e4b05/src/lib/schema/application/state.ts#L33)

___

### updateFromData

▸ **updateFromData**(`data`, `name`): `Promise`\<[`SchemaData`](../interfaces/SchemaData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `name` | `string` |

#### Returns

`Promise`\<[`SchemaData`](../interfaces/SchemaData.md)\>

#### Defined in

[src/lib/schema/application/state.ts:50](https://github.com/lambda-orm/lambdaorm-base/blob/e359b56ef95224260d7f0fa055fdb7feaf3e4b05/src/lib/schema/application/state.ts#L50)

___

### updateFromMapping

▸ **updateFromMapping**(`mappings`, `options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mappings` | [`Mapping`](../interfaces/Mapping.md)[] |
| `options` | [`MatchOptions`](../interfaces/MatchOptions.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/schema/application/state.ts:59](https://github.com/lambda-orm/lambdaorm-base/blob/e359b56ef95224260d7f0fa055fdb7feaf3e4b05/src/lib/schema/application/state.ts#L59)
