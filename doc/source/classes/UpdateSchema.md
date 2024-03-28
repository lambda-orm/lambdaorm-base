[Lambda ORM](../README.md) / UpdateSchema

# Class: UpdateSchema

## Table of contents

### Constructors

- [constructor](UpdateSchema.md#constructor)

### Methods

- [update](UpdateSchema.md#update)

## Constructors

### constructor

• **new UpdateSchema**(`createSchemaService`): [`UpdateSchema`](UpdateSchema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `createSchemaService` | [`CreateSchemaService`](CreateSchemaService.md) |

#### Returns

[`UpdateSchema`](UpdateSchema.md)

#### Defined in

[src/lib/schema/application/useCases/update.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/ba4a653/src/lib/schema/application/useCases/update.ts#L7)

## Methods

### update

▸ **update**(`schema`, `name`, `type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |
| `name` | `string` |
| `type` | `Type` |

#### Returns

`void`

#### Defined in

[src/lib/schema/application/useCases/update.ts:9](https://github.com/lambda-orm/lambdaorm-base/blob/ba4a653/src/lib/schema/application/useCases/update.ts#L9)
