[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / IFileSchemaService

# Interface: IFileSchemaService

Defined in: [src/lib/schema/domain/ports/fileSchemaService.ts:3](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/ports/fileSchemaService.ts#L3)

## Methods

### read()

> **read**(`source`): `Promise`\<`null` \| [`SchemaInfo`](SchemaInfo.md)\>

Defined in: [src/lib/schema/domain/ports/fileSchemaService.ts:4](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/ports/fileSchemaService.ts#L4)

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`null` \| [`SchemaInfo`](SchemaInfo.md)\>

***

### write()

> **write**(`schema`, `fullPath`): `Promise`\<`void`\>

Defined in: [src/lib/schema/domain/ports/fileSchemaService.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/ports/fileSchemaService.ts#L5)

#### Parameters

##### schema

[`Schema`](Schema.md)

##### fullPath

`string`

#### Returns

`Promise`\<`void`\>
