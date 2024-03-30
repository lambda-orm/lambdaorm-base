[Lambda ORM](../README.md) / SchemaState

# Class: SchemaState

## Table of contents

### Constructors

- [constructor](SchemaState.md#constructor)

### Properties

- [facade](SchemaState.md#facade)
- [originalSchema](SchemaState.md#originalschema)
- [schema](SchemaState.md#schema)
- [schemaPath](SchemaState.md#schemapath)

### Methods

- [load](SchemaState.md#load)
- [updateFromData](SchemaState.md#updatefromdata)

## Constructors

### constructor

• **new SchemaState**(`facade`, `fileService`, `helper`): [`SchemaState`](SchemaState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `facade` | [`SchemaFacade`](SchemaFacade.md) |
| `fileService` | [`IFileSchemaService`](../interfaces/IFileSchemaService.md) |
| `helper` | `H3lp` |

#### Returns

[`SchemaState`](SchemaState.md)

#### Defined in

[src/lib/schema/application/state.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/76aa344/src/lib/schema/application/state.ts#L10)

## Properties

### facade

• `Readonly` **facade**: [`SchemaFacade`](SchemaFacade.md)

#### Defined in

[src/lib/schema/application/state.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/76aa344/src/lib/schema/application/state.ts#L10)

___

### originalSchema

• **originalSchema**: [`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/state.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/76aa344/src/lib/schema/application/state.ts#L8)

___

### schema

• **schema**: [`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/state.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/76aa344/src/lib/schema/application/state.ts#L7)

___

### schemaPath

• `Optional` **schemaPath**: `string`

#### Defined in

[src/lib/schema/application/state.ts:9](https://github.com/lambda-orm/lambdaorm-base/blob/76aa344/src/lib/schema/application/state.ts#L9)

## Methods

### load

▸ **load**(`source`): `Promise`\<[`Schema`](../interfaces/Schema.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` \| [`Schema`](../interfaces/Schema.md) |

#### Returns

`Promise`\<[`Schema`](../interfaces/Schema.md)\>

#### Defined in

[src/lib/schema/application/state.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/76aa344/src/lib/schema/application/state.ts#L18)

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

[src/lib/schema/application/state.ts:36](https://github.com/lambda-orm/lambdaorm-base/blob/76aa344/src/lib/schema/application/state.ts#L36)
