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
- [schemaData](SchemaFacade.md#schemadata)
- [updateFromData](SchemaFacade.md#updatefromdata)

## Constructors

### constructor

• **new SchemaFacade**(`schemaService`, `getSchemaData`, `extender`, `createSchema`, `updateSchema`): [`SchemaFacade`](SchemaFacade.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaService` | `SchemaService` |
| `getSchemaData` | [`GetSchemaSchema`](GetSchemaSchema.md) |
| `extender` | [`SchemaExtender`](SchemaExtender.md) |
| `createSchema` | [`CreateSchema`](CreateSchema.md) |
| `updateSchema` | [`UpdateSchema`](UpdateSchema.md) |

#### Returns

[`SchemaFacade`](SchemaFacade.md)

#### Defined in

[src/lib/schema/application/facade.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/8900f48/src/lib/schema/application/facade.ts#L10)

## Properties

### schemaService

• `Readonly` **schemaService**: `SchemaService`

#### Defined in

[src/lib/schema/application/facade.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/8900f48/src/lib/schema/application/facade.ts#L11)

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

[src/lib/schema/application/facade.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/8900f48/src/lib/schema/application/facade.ts#L32)

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

[src/lib/schema/application/facade.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/8900f48/src/lib/schema/application/facade.ts#L18)

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

[src/lib/schema/application/facade.ts:28](https://github.com/lambda-orm/lambdaorm-base/blob/8900f48/src/lib/schema/application/facade.ts#L28)

___

### updateFromData

▸ **updateFromData**(`schema`, `data`, `name`): [`SchemaData`](../interfaces/SchemaData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |
| `data` | `any` |
| `name` | `string` |

#### Returns

[`SchemaData`](../interfaces/SchemaData.md)

#### Defined in

[src/lib/schema/application/facade.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/8900f48/src/lib/schema/application/facade.ts#L22)
