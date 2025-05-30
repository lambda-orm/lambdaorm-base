[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / SchemaFacade

# Class: SchemaFacade

Defined in: [src/lib/schema/application/facade.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/facade.ts#L10)

## Constructors

### Constructor

> **new SchemaFacade**(`schemaService`, `getSchemaData`, `extender`, `createSchema`, `initializeSchema`, `updateSchema`, `matchSchema`, `fileService`): `SchemaFacade`

Defined in: [src/lib/schema/application/facade.ts:12](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/facade.ts#L12)

#### Parameters

##### schemaService

[`SchemaService`](SchemaService.md)

##### getSchemaData

[`GetSchemaSchema`](GetSchemaSchema.md)

##### extender

[`SchemaExtender`](SchemaExtender.md)

##### createSchema

[`CreateSchema`](CreateSchema.md)

##### initializeSchema

[`InitializeSchema`](InitializeSchema.md)

##### updateSchema

[`UpdateSchema`](UpdateSchema.md)

##### matchSchema

[`MatchSchema`](MatchSchema.md)

##### fileService

[`IFileSchemaService`](../interfaces/IFileSchemaService.md)

#### Returns

`SchemaFacade`

## Properties

### schemaService

> `readonly` **schemaService**: [`SchemaService`](SchemaService.md)

Defined in: [src/lib/schema/application/facade.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/facade.ts#L13)

## Methods

### complete()

> **complete**(`schema`): `void`

Defined in: [src/lib/schema/application/facade.ts:45](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/facade.ts#L45)

#### Parameters

##### schema

[`Schema`](../interfaces/Schema.md)

#### Returns

`void`

***

### create()

> **create**(`dialect?`, `connection?`): [`Schema`](../interfaces/Schema.md)

Defined in: [src/lib/schema/application/facade.ts:23](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/facade.ts#L23)

#### Parameters

##### dialect?

[`Dialect`](../enumerations/Dialect.md)

##### connection?

`any`

#### Returns

[`Schema`](../interfaces/Schema.md)

***

### initialize()

> **initialize**(`schema`, `args`): [`Schema`](../interfaces/Schema.md)

Defined in: [src/lib/schema/application/facade.ts:27](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/facade.ts#L27)

#### Parameters

##### schema

[`Schema`](../interfaces/Schema.md)

##### args

[`InitializeSchemaArgs`](../interfaces/InitializeSchemaArgs.md)

#### Returns

[`Schema`](../interfaces/Schema.md)

***

### introspect()

> **introspect**(`schema`, `data`, `name`): [`SchemaData`](../interfaces/SchemaData.md)

Defined in: [src/lib/schema/application/facade.ts:31](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/facade.ts#L31)

#### Parameters

##### schema

[`Schema`](../interfaces/Schema.md)

##### data

`any`

##### name

`string`

#### Returns

[`SchemaData`](../interfaces/SchemaData.md)

***

### match()

> **match**(`schema`, `mappings`, `options`): `void`

Defined in: [src/lib/schema/application/facade.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/facade.ts#L37)

#### Parameters

##### schema

[`Schema`](../interfaces/Schema.md)

##### mappings

[`Mapping`](../interfaces/Mapping.md)[]

##### options

[`MatchOptions`](../interfaces/MatchOptions.md) = `{}`

#### Returns

`void`

***

### read()

> **read**(`workspace`): `Promise`\<`null` \| [`SchemaInfo`](../interfaces/SchemaInfo.md)\>

Defined in: [src/lib/schema/application/facade.ts:51](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/facade.ts#L51)

#### Parameters

##### workspace

`string`

#### Returns

`Promise`\<`null` \| [`SchemaInfo`](../interfaces/SchemaInfo.md)\>

***

### schemaData()

> **schemaData**(`source`, `name`, `type`): [`SchemaData`](../interfaces/SchemaData.md)

Defined in: [src/lib/schema/application/facade.ts:41](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/facade.ts#L41)

#### Parameters

##### source

`any`

##### name

`string`

##### type

`Type`

#### Returns

[`SchemaData`](../interfaces/SchemaData.md)

***

### write()

> **write**(`schema`, `path`): `Promise`\<`void`\>

Defined in: [src/lib/schema/application/facade.ts:55](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/facade.ts#L55)

#### Parameters

##### schema

[`Schema`](../interfaces/Schema.md)

##### path

`string`

#### Returns

`Promise`\<`void`\>
