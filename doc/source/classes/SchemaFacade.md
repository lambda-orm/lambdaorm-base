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

[src/lib/schema/application/facade.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/schema/application/facade.ts#L13)

## Properties

### schemaService

> `readonly` **schemaService**: [`SchemaService`](SchemaService.md)

#### Source

[src/lib/schema/application/facade.ts:14](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/schema/application/facade.ts#L14)

## Methods

### complete()

> **complete**(`schema`): `void`

#### Parameters

• **schema**: [`Schema`](../interfaces/Schema.md)

#### Returns

`void`

#### Source

[src/lib/schema/application/facade.ts:46](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/schema/application/facade.ts#L46)

***

### create()

> **create**(`dialect`?, `connection`?): [`Schema`](../interfaces/Schema.md)

#### Parameters

• **dialect?**: [`Dialect`](../enumerations/Dialect.md)

• **connection?**: `any`

#### Returns

[`Schema`](../interfaces/Schema.md)

#### Source

[src/lib/schema/application/facade.ts:24](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/schema/application/facade.ts#L24)

***

### initialize()

> **initialize**(`schema`, `args`): [`Schema`](../interfaces/Schema.md)

#### Parameters

• **schema**: [`Schema`](../interfaces/Schema.md)

• **args**: [`InitializeSchemaArgs`](../interfaces/InitializeSchemaArgs.md)

#### Returns

[`Schema`](../interfaces/Schema.md)

#### Source

[src/lib/schema/application/facade.ts:28](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/schema/application/facade.ts#L28)

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

[src/lib/schema/application/facade.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/schema/application/facade.ts#L32)

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

[src/lib/schema/application/facade.ts:38](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/schema/application/facade.ts#L38)

***

### read()

> **read**(`workspace`): `Promise`\<`null` \| [`SchemaInfo`](../interfaces/SchemaInfo.md)\>

#### Parameters

• **workspace**: `string`

#### Returns

`Promise`\<`null` \| [`SchemaInfo`](../interfaces/SchemaInfo.md)\>

#### Source

[src/lib/schema/application/facade.ts:52](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/schema/application/facade.ts#L52)

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

[src/lib/schema/application/facade.ts:42](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/schema/application/facade.ts#L42)

***

### write()

> **write**(`schema`, `path`): `Promise`\<`void`\>

#### Parameters

• **schema**: [`Schema`](../interfaces/Schema.md)

• **path**: `string`

#### Returns

`Promise`\<`void`\>

#### Source

[src/lib/schema/application/facade.ts:56](https://github.com/lambda-orm/lambdaorm-base/blob/1d2abad50f28511cd0e6125c8c883a452d54160f/src/lib/schema/application/facade.ts#L56)
