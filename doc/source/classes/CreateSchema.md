[Lambda ORM](../README.md) / CreateSchema

# Class: CreateSchema

## Table of contents

### Constructors

- [constructor](CreateSchema.md#constructor)

### Methods

- [create](CreateSchema.md#create)

## Constructors

### constructor

• **new CreateSchema**(`schemaService`): [`CreateSchema`](CreateSchema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaService` | [`SchemaService`](SchemaService.md) |

#### Returns

[`CreateSchema`](CreateSchema.md)

#### Defined in

[src/lib/schema/application/useCases/create.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/054ed7d/src/lib/schema/application/useCases/create.ts#L7)

## Methods

### create

▸ **create**(`data`): [`Schema`](../interfaces/Schema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/useCases/create.ts:9](https://github.com/lambda-orm/lambdaorm-base/blob/054ed7d/src/lib/schema/application/useCases/create.ts#L9)

▸ **create**(`data`, `name?`): [`Schema`](../interfaces/Schema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |
| `name?` | `string` |

#### Returns

[`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/useCases/create.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/054ed7d/src/lib/schema/application/useCases/create.ts#L10)
