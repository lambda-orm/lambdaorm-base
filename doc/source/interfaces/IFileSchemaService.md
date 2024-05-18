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

[src/lib/schema/domain/ports/fileSchemaService.ts:4](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/schema/domain/ports/fileSchemaService.ts#L4)

***

### write()

> **write**(`schema`, `fullPath`): `Promise`\<`void`\>

#### Parameters

• **schema**: [`Schema`](Schema.md)

• **fullPath**: `string`

#### Returns

`Promise`\<`void`\>

#### Source

[src/lib/schema/domain/ports/fileSchemaService.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/75309e81097991935956cdab867faba6428c498c/src/lib/schema/domain/ports/fileSchemaService.ts#L5)
