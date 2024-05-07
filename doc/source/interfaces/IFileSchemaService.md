[Lambda ORM](../README.md) / IFileSchemaService

# Interface: IFileSchemaService

## Table of contents

### Methods

- [read](IFileSchemaService.md#read)
- [write](IFileSchemaService.md#write)

## Methods

### read

▸ **read**(`source`): `Promise`\<``null`` \| [`SchemaInfo`](SchemaInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

`Promise`\<``null`` \| [`SchemaInfo`](SchemaInfo.md)\>

#### Defined in

[src/lib/schema/application/ports/fileSchemaService.ts:4](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/schema/application/ports/fileSchemaService.ts#L4)

___

### write

▸ **write**(`schema`, `fullPath`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](Schema.md) |
| `fullPath` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/schema/application/ports/fileSchemaService.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/schema/application/ports/fileSchemaService.ts#L5)
