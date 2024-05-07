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

[src/lib/schema/application/useCases/create.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/41a05895716d06facf8eeb89fc05145036aa7b9b/src/lib/schema/application/useCases/create.ts#L6)

## Methods

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

[src/lib/schema/application/useCases/create.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/41a05895716d06facf8eeb89fc05145036aa7b9b/src/lib/schema/application/useCases/create.ts#L10)
