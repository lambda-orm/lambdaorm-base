[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / IFileSchemaService

# Interface: IFileSchemaService

Defined in: [src/lib/schema/domain/ports/fileSchemaService.ts:3](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/ports/fileSchemaService.ts#L3)

## Methods

### read()

> **read**(`source`): `Promise`\<`null` \| [`SchemaInfo`](SchemaInfo.md)\>

Defined in: [src/lib/schema/domain/ports/fileSchemaService.ts:4](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/ports/fileSchemaService.ts#L4)

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`null` \| [`SchemaInfo`](SchemaInfo.md)\>

***

### write()

> **write**(`schema`, `fullPath`): `Promise`\<`void`\>

Defined in: [src/lib/schema/domain/ports/fileSchemaService.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/ports/fileSchemaService.ts#L5)

#### Parameters

##### schema

[`Schema`](Schema.md)

##### fullPath

`string`

#### Returns

`Promise`\<`void`\>
