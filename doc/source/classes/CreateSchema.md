[Lambda ORM](../README.md) / CreateSchema

# Class: CreateSchema

## Table of contents

### Constructors

- [constructor](CreateSchema.md#constructor)

### Methods

- [create](CreateSchema.md#create)

## Constructors

### constructor

• **new CreateSchema**(`schemaService`, `createSchemaService`): [`CreateSchema`](CreateSchema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaService` | `SchemaService` |
| `createSchemaService` | [`CreateSchemaService`](CreateSchemaService.md) |

#### Returns

[`CreateSchema`](CreateSchema.md)

#### Defined in

[src/lib/schema/application/useCases/create.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/ba4a653/src/lib/schema/application/useCases/create.ts#L8)

## Methods

### create

▸ **create**(`data`, `name`): [[`Schema`](../interfaces/Schema.md), `Type`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `name` | `string` |

#### Returns

[[`Schema`](../interfaces/Schema.md), `Type`]

#### Defined in

[src/lib/schema/application/useCases/create.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/ba4a653/src/lib/schema/application/useCases/create.ts#L13)
