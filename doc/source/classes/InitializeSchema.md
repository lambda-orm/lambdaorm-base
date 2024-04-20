[Lambda ORM](../README.md) / InitializeSchema

# Class: InitializeSchema

## Table of contents

### Constructors

- [constructor](InitializeSchema.md#constructor)

### Methods

- [initialize](InitializeSchema.md#initialize)

## Constructors

### constructor

• **new InitializeSchema**(`schemaService`): [`InitializeSchema`](InitializeSchema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaService` | `SchemaService` |

#### Returns

[`InitializeSchema`](InitializeSchema.md)

#### Defined in

[src/lib/schema/application/useCases/initialize.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/74f7c8b857fa6bb1671dd2c51c1b652b4c192303/src/lib/schema/application/useCases/initialize.ts#L6)

## Methods

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

[src/lib/schema/application/useCases/initialize.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/74f7c8b857fa6bb1671dd2c51c1b652b4c192303/src/lib/schema/application/useCases/initialize.ts#L10)
