[Lambda ORM](../README.md) / GetSchemaSchema

# Class: GetSchemaSchema

## Table of contents

### Constructors

- [constructor](GetSchemaSchema.md#constructor)

### Methods

- [getData](GetSchemaSchema.md#getdata)

## Constructors

### constructor

• **new GetSchemaSchema**(`interpretSchemaDataService`): [`GetSchemaSchema`](GetSchemaSchema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interpretSchemaDataService` | `InterpretSchemaDataService` |

#### Returns

[`GetSchemaSchema`](GetSchemaSchema.md)

#### Defined in

[src/lib/schema/application/useCases/getSchemaData.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/3797a9fa3ae3c4470a37c190adcdb88d49954313/src/lib/schema/application/useCases/getSchemaData.ts#L7)

## Methods

### getData

▸ **getData**(`data`, `name`, `type`): [`SchemaData`](../interfaces/SchemaData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `name` | `string` |
| `type` | `Type` |

#### Returns

[`SchemaData`](../interfaces/SchemaData.md)

#### Defined in

[src/lib/schema/application/useCases/getSchemaData.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/3797a9fa3ae3c4470a37c190adcdb88d49954313/src/lib/schema/application/useCases/getSchemaData.ts#L11)
