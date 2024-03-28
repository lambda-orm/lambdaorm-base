[Lambda ORM](../README.md) / UpdateSchema

# Class: UpdateSchema

## Table of contents

### Constructors

- [constructor](UpdateSchema.md#constructor)

### Methods

- [update](UpdateSchema.md#update)

## Constructors

### constructor

• **new UpdateSchema**(`schemaService`, `createEntitiesService`): [`UpdateSchema`](UpdateSchema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaService` | `SchemaService` |
| `createEntitiesService` | [`CreateEntitiesService`](CreateEntitiesService.md) |

#### Returns

[`UpdateSchema`](UpdateSchema.md)

#### Defined in

[src/lib/schema/application/useCases/update.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/useCases/update.ts#L8)

## Methods

### update

▸ **update**(`schema`, `data`, `name`): `Type`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |
| `data` | `any` |
| `name` | `string` |

#### Returns

`Type`

#### Defined in

[src/lib/schema/application/useCases/update.ts:12](https://github.com/lambda-orm/lambdaorm-base/blob/1bef8e4/src/lib/schema/application/useCases/update.ts#L12)
