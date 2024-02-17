[Lambda ORM](../README.md) / UpdateSchema

# Class: UpdateSchema

## Table of contents

### Constructors

- [constructor](UpdateSchema.md#constructor)

### Methods

- [update](UpdateSchema.md#update)

## Constructors

### constructor

• **new UpdateSchema**(`schemaService`): [`UpdateSchema`](UpdateSchema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaService` | [`SchemaService`](SchemaService.md) |

#### Returns

[`UpdateSchema`](UpdateSchema.md)

#### Defined in

[src/lib/schema/application/useCases/update.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/76260f9/src/lib/schema/application/useCases/update.ts#L6)

## Methods

### update

▸ **update**(`schema`, `types`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |
| `types` | [`EntityType`](../interfaces/EntityType.md)[] |

#### Returns

`void`

#### Defined in

[src/lib/schema/application/useCases/update.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/76260f9/src/lib/schema/application/useCases/update.ts#L8)
