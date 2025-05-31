[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / SchemaState

# Class: SchemaState

Defined in: [src/lib/schema/application/state.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L13)

## Constructors

### Constructor

> **new SchemaState**(`source`, `domain`, `mapping`, `stage`, `view`, `routeService`, `facade`, `loadSchema`, `helper`): `SchemaState`

Defined in: [src/lib/schema/application/state.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L17)

#### Parameters

##### source

[`DataSourceConfigService`](DataSourceConfigService.md)

##### domain

[`DomainConfigService`](DomainConfigService.md)

##### mapping

[`MappingsConfigService`](MappingsConfigService.md)

##### stage

[`StageConfigService`](StageConfigService.md)

##### view

[`ViewsConfigService`](ViewsConfigService.md)

##### routeService

[`RouteService`](RouteService.md)

##### facade

[`SchemaFacade`](SchemaFacade.md)

##### loadSchema

[`LoadSchema`](LoadSchema.md)

##### helper

[`OrmBaseH3lp`](OrmBaseH3lp.md)

#### Returns

`SchemaState`

## Properties

### domain

> `readonly` **domain**: [`DomainConfigService`](DomainConfigService.md)

Defined in: [src/lib/schema/application/state.ts:19](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L19)

***

### mapping

> `readonly` **mapping**: [`MappingsConfigService`](MappingsConfigService.md)

Defined in: [src/lib/schema/application/state.ts:20](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L20)

***

### originalSchema

> **originalSchema**: [`Schema`](../interfaces/Schema.md)

Defined in: [src/lib/schema/application/state.ts:15](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L15)

***

### schema

> **schema**: [`Schema`](../interfaces/Schema.md)

Defined in: [src/lib/schema/application/state.ts:14](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L14)

***

### schemaPath?

> `optional` **schemaPath**: `string`

Defined in: [src/lib/schema/application/state.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L16)

***

### source

> `readonly` **source**: [`DataSourceConfigService`](DataSourceConfigService.md)

Defined in: [src/lib/schema/application/state.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L18)

***

### stage

> `readonly` **stage**: [`StageConfigService`](StageConfigService.md)

Defined in: [src/lib/schema/application/state.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L21)

***

### view

> `readonly` **view**: [`ViewsConfigService`](ViewsConfigService.md)

Defined in: [src/lib/schema/application/state.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L22)

## Methods

### evalSourceRule()

> **evalSourceRule**(`rule`, `info`): `boolean`

Defined in: [src/lib/schema/application/state.ts:91](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L91)

#### Parameters

##### rule

[`SourceRule`](../interfaces/SourceRule.md)

##### info

[`SentenceInfo`](../interfaces/SentenceInfo.md)

#### Returns

`boolean`

***

### getSchemaDomain()

> **getSchemaDomain**(): [`DomainSchema`](../interfaces/DomainSchema.md)

Defined in: [src/lib/schema/application/state.ts:116](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L116)

#### Returns

[`DomainSchema`](../interfaces/DomainSchema.md)

***

### getSchemaEntities()

> **getSchemaEntities**(): [`Entity`](../interfaces/Entity.md)[]

Defined in: [src/lib/schema/application/state.ts:120](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L120)

#### Returns

[`Entity`](../interfaces/Entity.md)[]

***

### getSchemaEntity()

> **getSchemaEntity**(`entity`): `undefined` \| [`Entity`](../interfaces/Entity.md)

Defined in: [src/lib/schema/application/state.ts:124](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L124)

#### Parameters

##### entity

`string`

#### Returns

`undefined` \| [`Entity`](../interfaces/Entity.md)

***

### getSchemaEntityMapping()

> **getSchemaEntityMapping**(`mapping`, `entity`): `undefined` \| [`EntityMapping`](../interfaces/EntityMapping.md)

Defined in: [src/lib/schema/application/state.ts:147](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L147)

#### Parameters

##### mapping

`string`

##### entity

`string`

#### Returns

`undefined` \| [`EntityMapping`](../interfaces/EntityMapping.md)

***

### getSchemaEnum()

> **getSchemaEnum**(`_enum`): `undefined` \| [`Enum`](../interfaces/Enum.md)

Defined in: [src/lib/schema/application/state.ts:132](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L132)

#### Parameters

##### \_enum

`string`

#### Returns

`undefined` \| [`Enum`](../interfaces/Enum.md)

***

### getSchemaEnums()

> **getSchemaEnums**(): [`Enum`](../interfaces/Enum.md)[]

Defined in: [src/lib/schema/application/state.ts:128](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L128)

#### Returns

[`Enum`](../interfaces/Enum.md)[]

***

### getSchemaMapping()

> **getSchemaMapping**(`mapping`): `undefined` \| [`Mapping`](../interfaces/Mapping.md)

Defined in: [src/lib/schema/application/state.ts:140](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L140)

#### Parameters

##### mapping

`string`

#### Returns

`undefined` \| [`Mapping`](../interfaces/Mapping.md)

***

### getSchemaMappings()

> **getSchemaMappings**(): [`Mapping`](../interfaces/Mapping.md)[]

Defined in: [src/lib/schema/application/state.ts:136](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L136)

#### Returns

[`Mapping`](../interfaces/Mapping.md)[]

***

### getSchemaSource()

> **getSchemaSource**(`source`): `object`

Defined in: [src/lib/schema/application/state.ts:103](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L103)

#### Parameters

##### source

`string`

#### Returns

`object`

##### dialect

> **dialect**: `string`

##### name

> **name**: `string`

***

### getSchemaSources()

> **getSchemaSources**(): `object`[]

Defined in: [src/lib/schema/application/state.ts:99](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L99)

#### Returns

`object`[]

***

### getSchemaStage()

> **getSchemaStage**(`stage`): `undefined` \| [`Stage`](../interfaces/Stage.md)

Defined in: [src/lib/schema/application/state.ts:158](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L158)

#### Parameters

##### stage

`string`

#### Returns

`undefined` \| [`Stage`](../interfaces/Stage.md)

***

### getSchemaStages()

> **getSchemaStages**(): [`Stage`](../interfaces/Stage.md)[]

Defined in: [src/lib/schema/application/state.ts:154](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L154)

#### Returns

[`Stage`](../interfaces/Stage.md)[]

***

### getSchemaVersion()

> **getSchemaVersion**(): `object`

Defined in: [src/lib/schema/application/state.ts:112](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L112)

#### Returns

`object`

##### version

> **version**: `string`

***

### getSchemaViews()

> **getSchemaViews**(): `string`[]

Defined in: [src/lib/schema/application/state.ts:165](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L165)

#### Returns

`string`[]

***

### getSource()

> **getSource**(`info`, `stage?`): `string`

Defined in: [src/lib/schema/application/state.ts:95](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L95)

#### Parameters

##### info

[`SentenceInfo`](../interfaces/SentenceInfo.md)

##### stage?

`string`

#### Returns

`string`

***

### initialize()

> **initialize**(`args`): `Promise`\<[`Schema`](../interfaces/Schema.md)\>

Defined in: [src/lib/schema/application/state.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L32)

#### Parameters

##### args

[`InitializeSchemaArgs`](../interfaces/InitializeSchemaArgs.md)

#### Returns

`Promise`\<[`Schema`](../interfaces/Schema.md)\>

***

### introspect()

> **introspect**(`data`, `name`): `Promise`\<[`SchemaData`](../interfaces/SchemaData.md)\>

Defined in: [src/lib/schema/application/state.ts:74](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L74)

#### Parameters

##### data

`any`

##### name

`string`

#### Returns

`Promise`\<[`SchemaData`](../interfaces/SchemaData.md)\>

***

### load()

> **load**(`source`): `Promise`\<[`Schema`](../interfaces/Schema.md)\>

Defined in: [src/lib/schema/application/state.ts:57](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L57)

#### Parameters

##### source

`string` | [`Schema`](../interfaces/Schema.md)

#### Returns

`Promise`\<[`Schema`](../interfaces/Schema.md)\>

***

### match()

> **match**(`mappings`, `options`): `Promise`\<`void`\>

Defined in: [src/lib/schema/application/state.ts:83](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/application/state.ts#L83)

#### Parameters

##### mappings

[`Mapping`](../interfaces/Mapping.md)[]

##### options

[`MatchOptions`](../interfaces/MatchOptions.md) = `...`

#### Returns

`Promise`\<`void`\>
