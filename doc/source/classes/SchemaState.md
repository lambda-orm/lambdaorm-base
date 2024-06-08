[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / SchemaState

# Class: SchemaState

## Constructors

### new SchemaState()

> **new SchemaState**(`source`, `domain`, `mapping`, `stage`, `view`, `routeService`, `facade`, `loadSchema`, `helper`): [`SchemaState`](SchemaState.md)

#### Parameters

• **source**: [`DataSourceConfigService`](DataSourceConfigService.md)

• **domain**: [`DomainConfigService`](DomainConfigService.md)

• **mapping**: [`MappingsConfigService`](MappingsConfigService.md)

• **stage**: [`StageConfigService`](StageConfigService.md)

• **view**: [`ViewsConfigService`](ViewsConfigService.md)

• **routeService**: [`RouteService`](RouteService.md)

• **facade**: [`SchemaFacade`](SchemaFacade.md)

• **loadSchema**: [`LoadSchema`](LoadSchema.md)

• **helper**: [`OrmBaseH3lp`](OrmBaseH3lp.md)

#### Returns

[`SchemaState`](SchemaState.md)

#### Source

[src/lib/schema/application/state.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L17)

## Properties

### domain

> `readonly` **domain**: [`DomainConfigService`](DomainConfigService.md)

#### Source

[src/lib/schema/application/state.ts:19](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L19)

***

### mapping

> `readonly` **mapping**: [`MappingsConfigService`](MappingsConfigService.md)

#### Source

[src/lib/schema/application/state.ts:20](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L20)

***

### originalSchema

> **originalSchema**: [`Schema`](../interfaces/Schema.md)

#### Source

[src/lib/schema/application/state.ts:15](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L15)

***

### schema

> **schema**: [`Schema`](../interfaces/Schema.md)

#### Source

[src/lib/schema/application/state.ts:14](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L14)

***

### schemaPath?

> `optional` **schemaPath**: `string`

#### Source

[src/lib/schema/application/state.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L16)

***

### source

> `readonly` **source**: [`DataSourceConfigService`](DataSourceConfigService.md)

#### Source

[src/lib/schema/application/state.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L18)

***

### stage

> `readonly` **stage**: [`StageConfigService`](StageConfigService.md)

#### Source

[src/lib/schema/application/state.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L21)

***

### view

> `readonly` **view**: [`ViewsConfigService`](ViewsConfigService.md)

#### Source

[src/lib/schema/application/state.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L22)

## Methods

### evalSourceRule()

> **evalSourceRule**(`rule`, `info`): `boolean`

#### Parameters

• **rule**: [`SourceRule`](../interfaces/SourceRule.md)

• **info**: [`SentenceInfo`](../interfaces/SentenceInfo.md)

#### Returns

`boolean`

#### Source

[src/lib/schema/application/state.ts:91](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L91)

***

### getSchemaDomain()

> **getSchemaDomain**(): [`DomainSchema`](../interfaces/DomainSchema.md)

#### Returns

[`DomainSchema`](../interfaces/DomainSchema.md)

#### Source

[src/lib/schema/application/state.ts:116](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L116)

***

### getSchemaEntities()

> **getSchemaEntities**(): [`Entity`](../interfaces/Entity.md)[]

#### Returns

[`Entity`](../interfaces/Entity.md)[]

#### Source

[src/lib/schema/application/state.ts:120](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L120)

***

### getSchemaEntity()

> **getSchemaEntity**(`entity`): `undefined` \| [`Entity`](../interfaces/Entity.md)

#### Parameters

• **entity**: `string`

#### Returns

`undefined` \| [`Entity`](../interfaces/Entity.md)

#### Source

[src/lib/schema/application/state.ts:124](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L124)

***

### getSchemaEntityMapping()

> **getSchemaEntityMapping**(`mapping`, `entity`): `undefined` \| [`EntityMapping`](../interfaces/EntityMapping.md)

#### Parameters

• **mapping**: `string`

• **entity**: `string`

#### Returns

`undefined` \| [`EntityMapping`](../interfaces/EntityMapping.md)

#### Source

[src/lib/schema/application/state.ts:147](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L147)

***

### getSchemaEnum()

> **getSchemaEnum**(`_enum`): `undefined` \| [`Enum`](../interfaces/Enum.md)

#### Parameters

• **\_enum**: `string`

#### Returns

`undefined` \| [`Enum`](../interfaces/Enum.md)

#### Source

[src/lib/schema/application/state.ts:132](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L132)

***

### getSchemaEnums()

> **getSchemaEnums**(): [`Enum`](../interfaces/Enum.md)[]

#### Returns

[`Enum`](../interfaces/Enum.md)[]

#### Source

[src/lib/schema/application/state.ts:128](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L128)

***

### getSchemaMapping()

> **getSchemaMapping**(`mapping`): `undefined` \| [`Mapping`](../interfaces/Mapping.md)

#### Parameters

• **mapping**: `string`

#### Returns

`undefined` \| [`Mapping`](../interfaces/Mapping.md)

#### Source

[src/lib/schema/application/state.ts:140](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L140)

***

### getSchemaMappings()

> **getSchemaMappings**(): [`Mapping`](../interfaces/Mapping.md)[]

#### Returns

[`Mapping`](../interfaces/Mapping.md)[]

#### Source

[src/lib/schema/application/state.ts:136](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L136)

***

### getSchemaSource()

> **getSchemaSource**(`source`): `object`

#### Parameters

• **source**: `string`

#### Returns

`object`

##### dialect

> **dialect**: `string`

##### name

> **name**: `string`

#### Source

[src/lib/schema/application/state.ts:103](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L103)

***

### getSchemaSources()

> **getSchemaSources**(): `object`[]

#### Returns

`object`[]

#### Source

[src/lib/schema/application/state.ts:99](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L99)

***

### getSchemaStage()

> **getSchemaStage**(`stage`): `undefined` \| [`Stage`](../interfaces/Stage.md)

#### Parameters

• **stage**: `string`

#### Returns

`undefined` \| [`Stage`](../interfaces/Stage.md)

#### Source

[src/lib/schema/application/state.ts:158](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L158)

***

### getSchemaStages()

> **getSchemaStages**(): [`Stage`](../interfaces/Stage.md)[]

#### Returns

[`Stage`](../interfaces/Stage.md)[]

#### Source

[src/lib/schema/application/state.ts:154](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L154)

***

### getSchemaVersion()

> **getSchemaVersion**(): `object`

#### Returns

`object`

##### version

> **version**: `string`

#### Source

[src/lib/schema/application/state.ts:112](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L112)

***

### getSchemaViews()

> **getSchemaViews**(): `string`[]

#### Returns

`string`[]

#### Source

[src/lib/schema/application/state.ts:165](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L165)

***

### getSource()

> **getSource**(`info`, `stage`?): `string`

#### Parameters

• **info**: [`SentenceInfo`](../interfaces/SentenceInfo.md)

• **stage?**: `string`

#### Returns

`string`

#### Source

[src/lib/schema/application/state.ts:95](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L95)

***

### initialize()

> **initialize**(`args`): `Promise`\<[`Schema`](../interfaces/Schema.md)\>

#### Parameters

• **args**: [`InitializeSchemaArgs`](../interfaces/InitializeSchemaArgs.md)

#### Returns

`Promise`\<[`Schema`](../interfaces/Schema.md)\>

#### Source

[src/lib/schema/application/state.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L32)

***

### introspect()

> **introspect**(`data`, `name`): `Promise`\<[`SchemaData`](../interfaces/SchemaData.md)\>

#### Parameters

• **data**: `any`

• **name**: `string`

#### Returns

`Promise`\<[`SchemaData`](../interfaces/SchemaData.md)\>

#### Source

[src/lib/schema/application/state.ts:74](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L74)

***

### load()

> **load**(`source`): `Promise`\<[`Schema`](../interfaces/Schema.md)\>

#### Parameters

• **source**: `string` \| [`Schema`](../interfaces/Schema.md)

#### Returns

`Promise`\<[`Schema`](../interfaces/Schema.md)\>

#### Source

[src/lib/schema/application/state.ts:57](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L57)

***

### match()

> **match**(`mappings`, `options`): `Promise`\<`void`\>

#### Parameters

• **mappings**: [`Mapping`](../interfaces/Mapping.md)[]

• **options**: [`MatchOptions`](../interfaces/MatchOptions.md)= `undefined`

#### Returns

`Promise`\<`void`\>

#### Source

[src/lib/schema/application/state.ts:83](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/schema/application/state.ts#L83)
