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
| `interpretSchemaDataService` | [`InterpretSchemaDataService`](InterpretSchemaDataService.md) |

#### Returns

[`GetSchemaSchema`](GetSchemaSchema.md)

#### Defined in

[src/lib/schema/application/useCases/getSchemaData.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/41a05895716d06facf8eeb89fc05145036aa7b9b/src/lib/schema/application/useCases/getSchemaData.ts#L7)

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

[src/lib/schema/application/useCases/getSchemaData.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/41a05895716d06facf8eeb89fc05145036aa7b9b/src/lib/schema/application/useCases/getSchemaData.ts#L11)
