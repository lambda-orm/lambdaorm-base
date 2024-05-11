[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / IFileSchemaService

# Interface: IFileSchemaService

## Methods

### read()

> **read**(`source`): `Promise`\<`null` \| [`SchemaInfo`](SchemaInfo.md)\>

#### Parameters

• **source**: `string`

#### Returns

`Promise`\<`null` \| [`SchemaInfo`](SchemaInfo.md)\>

#### Source

[src/lib/schema/application/ports/fileSchemaService.ts:4](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/ports/fileSchemaService.ts#L4)

***

### write()

> **write**(`schema`, `fullPath`): `Promise`\<`void`\>

#### Parameters

• **schema**: [`Schema`](Schema.md)

• **fullPath**: `string`

#### Returns

`Promise`\<`void`\>

#### Source

[src/lib/schema/application/ports/fileSchemaService.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/ports/fileSchemaService.ts#L5)
