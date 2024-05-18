[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / SchemaFacade

# Class: SchemaFacade

## Constructors

### new SchemaFacade()

> **new SchemaFacade**(`schemaService`, `getSchemaData`, `extender`, `createSchema`, `initializeSchema`, `updateSchema`, `matchSchema`, `fileService`): [`SchemaFacade`](SchemaFacade.md)

#### Parameters

• **schemaService**: [`SchemaService`](SchemaService.md)

• **getSchemaData**: [`GetSchemaSchema`](GetSchemaSchema.md)

• **extender**: [`SchemaExtender`](SchemaExtender.md)

• **createSchema**: [`CreateSchema`](CreateSchema.md)

• **initializeSchema**: [`InitializeSchema`](InitializeSchema.md)

• **updateSchema**: [`UpdateSchema`](UpdateSchema.md)

• **matchSchema**: [`MatchSchema`](MatchSchema.md)

• **fileService**: [`IFileSchemaService`](../interfaces/IFileSchemaService.md)

#### Returns

[`SchemaFacade`](SchemaFacade.md)

#### Source

[src/lib/schema/application/facade.ts:12](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/schema/application/facade.ts#L12)

## Properties

### schemaService

> `readonly` **schemaService**: [`SchemaService`](SchemaService.md)

#### Source

[src/lib/schema/application/facade.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/schema/application/facade.ts#L13)

## Methods

### complete()

> **complete**(`schema`): `void`

#### Parameters

• **schema**: [`Schema`](../interfaces/Schema.md)

#### Returns

`void`

#### Source

[src/lib/schema/application/facade.ts:45](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/schema/application/facade.ts#L45)

***

### create()

> **create**(`dialect`?, `connection`?): [`Schema`](../interfaces/Schema.md)

#### Parameters

• **dialect?**: [`Dialect`](../enumerations/Dialect.md)

• **connection?**: `any`

#### Returns

[`Schema`](../interfaces/Schema.md)

#### Source

[src/lib/schema/application/facade.ts:23](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/schema/application/facade.ts#L23)

***

### initialize()

> **initialize**(`schema`, `args`): [`Schema`](../interfaces/Schema.md)

#### Parameters

• **schema**: [`Schema`](../interfaces/Schema.md)

• **args**: [`InitializeSchemaArgs`](../interfaces/InitializeSchemaArgs.md)

#### Returns

[`Schema`](../interfaces/Schema.md)

#### Source

[src/lib/schema/application/facade.ts:27](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/schema/application/facade.ts#L27)

***

### introspect()

> **introspect**(`schema`, `data`, `name`): [`SchemaData`](../interfaces/SchemaData.md)

#### Parameters

• **schema**: [`Schema`](../interfaces/Schema.md)

• **data**: `any`

• **name**: `string`

#### Returns

[`SchemaData`](../interfaces/SchemaData.md)

#### Source

[src/lib/schema/application/facade.ts:31](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/schema/application/facade.ts#L31)

***

### match()

> **match**(`schema`, `mappings`, `options`): `void`

#### Parameters

• **schema**: [`Schema`](../interfaces/Schema.md)

• **mappings**: [`Mapping`](../interfaces/Mapping.md)[]

• **options**: [`MatchOptions`](../interfaces/MatchOptions.md)= `{}`

#### Returns

`void`

#### Source

[src/lib/schema/application/facade.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/schema/application/facade.ts#L37)

***

### read()

> **read**(`workspace`): `Promise`\<`null` \| [`SchemaInfo`](../interfaces/SchemaInfo.md)\>

#### Parameters

• **workspace**: `string`

#### Returns

`Promise`\<`null` \| [`SchemaInfo`](../interfaces/SchemaInfo.md)\>

#### Source

[src/lib/schema/application/facade.ts:51](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/schema/application/facade.ts#L51)

***

### schemaData()

> **schemaData**(`source`, `name`, `type`): [`SchemaData`](../interfaces/SchemaData.md)

#### Parameters

• **source**: `any`

• **name**: `string`

• **type**: `Type`

#### Returns

[`SchemaData`](../interfaces/SchemaData.md)

#### Source

[src/lib/schema/application/facade.ts:41](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/schema/application/facade.ts#L41)

***

### write()

> **write**(`schema`, `path`): `Promise`\<`void`\>

#### Parameters

• **schema**: [`Schema`](../interfaces/Schema.md)

• **path**: `string`

#### Returns

`Promise`\<`void`\>

#### Source

[src/lib/schema/application/facade.ts:55](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/schema/application/facade.ts#L55)
