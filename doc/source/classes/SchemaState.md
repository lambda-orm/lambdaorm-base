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
- [getSchemaDomain](SchemaState.md#getschemadomain)
- [getSchemaEntities](SchemaState.md#getschemaentities)
- [getSchemaEntity](SchemaState.md#getschemaentity)
- [getSchemaEntityMapping](SchemaState.md#getschemaentitymapping)
- [getSchemaEnum](SchemaState.md#getschemaenum)
- [getSchemaEnums](SchemaState.md#getschemaenums)
- [getSchemaMapping](SchemaState.md#getschemamapping)
- [getSchemaMappings](SchemaState.md#getschemamappings)
- [getSchemaSource](SchemaState.md#getschemasource)
- [getSchemaSources](SchemaState.md#getschemasources)
- [getSchemaStage](SchemaState.md#getschemastage)
- [getSchemaStages](SchemaState.md#getschemastages)
- [getSchemaVersion](SchemaState.md#getschemaversion)
- [getSchemaViews](SchemaState.md#getschemaviews)
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

[src/lib/schema/application/state.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L17)

## Properties

### domain

• `Readonly` **domain**: [`DomainConfigService`](DomainConfigService.md)

#### Defined in

[src/lib/schema/application/state.ts:19](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L19)

___

### mapping

• `Readonly` **mapping**: [`MappingsConfigService`](MappingsConfigService.md)

#### Defined in

[src/lib/schema/application/state.ts:20](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L20)

___

### originalSchema

• **originalSchema**: [`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/state.ts:15](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L15)

___

### schema

• **schema**: [`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/state.ts:14](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L14)

___

### schemaPath

• `Optional` **schemaPath**: `string`

#### Defined in

[src/lib/schema/application/state.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L16)

___

### source

• `Readonly` **source**: [`DataSourceConfigService`](DataSourceConfigService.md)

#### Defined in

[src/lib/schema/application/state.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L18)

___

### stage

• `Readonly` **stage**: [`StageConfigService`](StageConfigService.md)

#### Defined in

[src/lib/schema/application/state.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L21)

___

### view

• `Readonly` **view**: [`ViewsConfigService`](ViewsConfigService.md)

#### Defined in

[src/lib/schema/application/state.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L22)

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

[src/lib/schema/application/state.ts:87](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L87)

___

### getSchemaDomain

▸ **getSchemaDomain**(): [`DomainSchema`](../interfaces/DomainSchema.md)

#### Returns

[`DomainSchema`](../interfaces/DomainSchema.md)

#### Defined in

[src/lib/schema/application/state.ts:112](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L112)

___

### getSchemaEntities

▸ **getSchemaEntities**(): [`Entity`](../interfaces/Entity.md)[]

#### Returns

[`Entity`](../interfaces/Entity.md)[]

#### Defined in

[src/lib/schema/application/state.ts:116](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L116)

___

### getSchemaEntity

▸ **getSchemaEntity**(`entity`): `undefined` \| [`Entity`](../interfaces/Entity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |

#### Returns

`undefined` \| [`Entity`](../interfaces/Entity.md)

#### Defined in

[src/lib/schema/application/state.ts:120](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L120)

___

### getSchemaEntityMapping

▸ **getSchemaEntityMapping**(`mapping`, `entity`): `undefined` \| [`EntityMapping`](../interfaces/EntityMapping.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapping` | `string` |
| `entity` | `string` |

#### Returns

`undefined` \| [`EntityMapping`](../interfaces/EntityMapping.md)

#### Defined in

[src/lib/schema/application/state.ts:143](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L143)

___

### getSchemaEnum

▸ **getSchemaEnum**(`_enum`): `undefined` \| [`Enum`](../interfaces/Enum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_enum` | `string` |

#### Returns

`undefined` \| [`Enum`](../interfaces/Enum.md)

#### Defined in

[src/lib/schema/application/state.ts:128](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L128)

___

### getSchemaEnums

▸ **getSchemaEnums**(): [`Enum`](../interfaces/Enum.md)[]

#### Returns

[`Enum`](../interfaces/Enum.md)[]

#### Defined in

[src/lib/schema/application/state.ts:124](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L124)

___

### getSchemaMapping

▸ **getSchemaMapping**(`mapping`): `undefined` \| [`Mapping`](../interfaces/Mapping.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapping` | `string` |

#### Returns

`undefined` \| [`Mapping`](../interfaces/Mapping.md)

#### Defined in

[src/lib/schema/application/state.ts:136](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L136)

___

### getSchemaMappings

▸ **getSchemaMappings**(): [`Mapping`](../interfaces/Mapping.md)[]

#### Returns

[`Mapping`](../interfaces/Mapping.md)[]

#### Defined in

[src/lib/schema/application/state.ts:132](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L132)

___

### getSchemaSource

▸ **getSchemaSource**(`source`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dialect` | `string` |
| `name` | `string` |

#### Defined in

[src/lib/schema/application/state.ts:99](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L99)

___

### getSchemaSources

▸ **getSchemaSources**(): \{ `dialect`: `string` ; `name`: `string`  }[]

#### Returns

\{ `dialect`: `string` ; `name`: `string`  }[]

#### Defined in

[src/lib/schema/application/state.ts:95](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L95)

___

### getSchemaStage

▸ **getSchemaStage**(`stage`): `undefined` \| [`Stage`](../interfaces/Stage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | `string` |

#### Returns

`undefined` \| [`Stage`](../interfaces/Stage.md)

#### Defined in

[src/lib/schema/application/state.ts:154](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L154)

___

### getSchemaStages

▸ **getSchemaStages**(): [`Stage`](../interfaces/Stage.md)[]

#### Returns

[`Stage`](../interfaces/Stage.md)[]

#### Defined in

[src/lib/schema/application/state.ts:150](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L150)

___

### getSchemaVersion

▸ **getSchemaVersion**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `version` | `undefined` \| `string` |

#### Defined in

[src/lib/schema/application/state.ts:108](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L108)

___

### getSchemaViews

▸ **getSchemaViews**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/lib/schema/application/state.ts:161](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L161)

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

[src/lib/schema/application/state.ts:91](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L91)

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

[src/lib/schema/application/state.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L32)

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

[src/lib/schema/application/state.ts:53](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L53)

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

[src/lib/schema/application/state.ts:70](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L70)

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

[src/lib/schema/application/state.ts:79](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/state.ts#L79)
