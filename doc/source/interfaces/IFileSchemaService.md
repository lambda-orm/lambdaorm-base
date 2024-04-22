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

[src/lib/schema/application/ports/fileSchemaService.ts:4](https://github.com/lambda-orm/lambdaorm-base/blob/986eb2b1d63aa5000f6fe1e57b34c29825075831/src/lib/schema/application/ports/fileSchemaService.ts#L4)

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

[src/lib/schema/application/ports/fileSchemaService.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/986eb2b1d63aa5000f6fe1e57b34c29825075831/src/lib/schema/application/ports/fileSchemaService.ts#L5)
