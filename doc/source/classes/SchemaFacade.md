[Lambda ORM](../README.md) / SchemaFacade

# Class: SchemaFacade

## Table of contents

### Constructors

- [constructor](SchemaFacade.md#constructor)

### Properties

- [schemaService](SchemaFacade.md#schemaservice)

### Methods

- [complete](SchemaFacade.md#complete)
- [create](SchemaFacade.md#create)
- [initialize](SchemaFacade.md#initialize)
- [introspect](SchemaFacade.md#introspect)
- [match](SchemaFacade.md#match)
- [read](SchemaFacade.md#read)
- [schemaData](SchemaFacade.md#schemadata)
- [write](SchemaFacade.md#write)

## Constructors

### constructor

• **new SchemaFacade**(`schemaService`, `getSchemaData`, `extender`, `createSchema`, `initializeSchema`, `updateSchema`, `matchSchema`, `fileService`): [`SchemaFacade`](SchemaFacade.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaService` | `SchemaService` |
| `getSchemaData` | [`GetSchemaSchema`](GetSchemaSchema.md) |
| `extender` | [`SchemaExtender`](SchemaExtender.md) |
| `createSchema` | [`CreateSchema`](CreateSchema.md) |
| `initializeSchema` | [`InitializeSchema`](InitializeSchema.md) |
| `updateSchema` | [`UpdateSchema`](UpdateSchema.md) |
| `matchSchema` | [`MatchSchema`](MatchSchema.md) |
| `fileService` | [`IFileSchemaService`](../interfaces/IFileSchemaService.md) |

#### Returns

[`SchemaFacade`](SchemaFacade.md)

#### Defined in

[src/lib/schema/application/facade.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/74f7c8b857fa6bb1671dd2c51c1b652b4c192303/src/lib/schema/application/facade.ts#L13)

## Properties

### schemaService

• `Readonly` **schemaService**: `SchemaService`

#### Defined in

[src/lib/schema/application/facade.ts:14](https://github.com/lambda-orm/lambdaorm-base/blob/74f7c8b857fa6bb1671dd2c51c1b652b4c192303/src/lib/schema/application/facade.ts#L14)

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

[src/lib/schema/application/facade.ts:46](https://github.com/lambda-orm/lambdaorm-base/blob/74f7c8b857fa6bb1671dd2c51c1b652b4c192303/src/lib/schema/application/facade.ts#L46)

___

### create

▸ **create**(`dialect?`, `connection?`): [`Schema`](../interfaces/Schema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dialect?` | [`Dialect`](../enums/Dialect.md) |
| `connection?` | `any` |

#### Returns

[`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/facade.ts:24](https://github.com/lambda-orm/lambdaorm-base/blob/74f7c8b857fa6bb1671dd2c51c1b652b4c192303/src/lib/schema/application/facade.ts#L24)

___

### initialize

▸ **initialize**(`schema`, `args`): [`Schema`](../interfaces/Schema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |
| `args` | [`InitializeSchemaArgs`](../interfaces/InitializeSchemaArgs.md) |

#### Returns

[`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/facade.ts:28](https://github.com/lambda-orm/lambdaorm-base/blob/74f7c8b857fa6bb1671dd2c51c1b652b4c192303/src/lib/schema/application/facade.ts#L28)

___

### introspect

▸ **introspect**(`schema`, `data`, `name`): [`SchemaData`](../interfaces/SchemaData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |
| `data` | `any` |
| `name` | `string` |

#### Returns

[`SchemaData`](../interfaces/SchemaData.md)

#### Defined in

[src/lib/schema/application/facade.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/74f7c8b857fa6bb1671dd2c51c1b652b4c192303/src/lib/schema/application/facade.ts#L32)

___

### match

▸ **match**(`schema`, `mappings`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |
| `mappings` | [`Mapping`](../interfaces/Mapping.md)[] |
| `options` | [`MatchOptions`](../interfaces/MatchOptions.md) |

#### Returns

`void`

#### Defined in

[src/lib/schema/application/facade.ts:38](https://github.com/lambda-orm/lambdaorm-base/blob/74f7c8b857fa6bb1671dd2c51c1b652b4c192303/src/lib/schema/application/facade.ts#L38)

___

### read

▸ **read**(`workspace`): `Promise`\<``null`` \| [`SchemaInfo`](../interfaces/SchemaInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `workspace` | `string` |

#### Returns

`Promise`\<``null`` \| [`SchemaInfo`](../interfaces/SchemaInfo.md)\>

#### Defined in

[src/lib/schema/application/facade.ts:52](https://github.com/lambda-orm/lambdaorm-base/blob/74f7c8b857fa6bb1671dd2c51c1b652b4c192303/src/lib/schema/application/facade.ts#L52)

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

[src/lib/schema/application/facade.ts:42](https://github.com/lambda-orm/lambdaorm-base/blob/74f7c8b857fa6bb1671dd2c51c1b652b4c192303/src/lib/schema/application/facade.ts#L42)

___

### write

▸ **write**(`schema`, `path`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |
| `path` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/schema/application/facade.ts:56](https://github.com/lambda-orm/lambdaorm-base/blob/74f7c8b857fa6bb1671dd2c51c1b652b4c192303/src/lib/schema/application/facade.ts#L56)
