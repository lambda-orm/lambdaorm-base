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
- [initialize](SchemaState.md#initialize)
- [load](SchemaState.md#load)
- [updateFromData](SchemaState.md#updatefromdata)
- [updateFromMapping](SchemaState.md#updatefrommapping)

## Constructors

### constructor

• **new SchemaState**(`source`, `domain`, `mapping`, `stage`, `view`, `routeService`, `facade`, `loadSchema`, `helper`): [`SchemaState`](SchemaState.md)

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
| `helper` | [`SchemaH3lp`](SchemaH3lp.md) |

#### Returns

[`SchemaState`](SchemaState.md)

#### Defined in

[src/lib/schema/application/state.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/state.ts#L17)

## Properties

### domain

• `Readonly` **domain**: [`DomainConfigService`](DomainConfigService.md)

#### Defined in

[src/lib/schema/application/state.ts:19](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/state.ts#L19)

___

### mapping

• `Readonly` **mapping**: [`MappingsConfigService`](MappingsConfigService.md)

#### Defined in

[src/lib/schema/application/state.ts:20](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/state.ts#L20)

___

### originalSchema

• **originalSchema**: [`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/state.ts:15](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/state.ts#L15)

___

### schema

• **schema**: [`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/state.ts:14](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/state.ts#L14)

___

### schemaPath

• `Optional` **schemaPath**: `string`

#### Defined in

[src/lib/schema/application/state.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/state.ts#L16)

___

### source

• `Readonly` **source**: [`DataSourceConfigService`](DataSourceConfigService.md)

#### Defined in

[src/lib/schema/application/state.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/state.ts#L18)

___

### stage

• `Readonly` **stage**: [`StageConfigService`](StageConfigService.md)

#### Defined in

[src/lib/schema/application/state.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/state.ts#L21)

___

### view

• `Readonly` **view**: [`ViewsConfigService`](ViewsConfigService.md)

#### Defined in

[src/lib/schema/application/state.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/state.ts#L22)

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

[src/lib/schema/application/state.ts:87](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/state.ts#L87)

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

[src/lib/schema/application/state.ts:91](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/state.ts#L91)

___

### initialize

▸ **initialize**(`args`): `Promise`\<[`Schema`](../interfaces/Schema.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`InitializeSchemaArgs`](../interfaces/InitializeSchemaArgs.md) |

#### Returns

`Promise`\<[`Schema`](../interfaces/Schema.md)\>

#### Defined in

[src/lib/schema/application/state.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/state.ts#L32)

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

[src/lib/schema/application/state.ts:53](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/state.ts#L53)

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

[src/lib/schema/application/state.ts:70](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/state.ts#L70)

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

[src/lib/schema/application/state.ts:79](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/state.ts#L79)
