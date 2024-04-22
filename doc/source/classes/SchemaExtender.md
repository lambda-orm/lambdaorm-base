[Lambda ORM](../README.md) / SchemaExtender

# Class: SchemaExtender

## Table of contents

### Constructors

- [constructor](SchemaExtender.md#constructor)

### Methods

- [complete](SchemaExtender.md#complete)
- [extend](SchemaExtender.md#extend)
- [isCompound](SchemaExtender.md#iscompound)

## Constructors

### constructor

• **new SchemaExtender**(`expressions`, `helper`): [`SchemaExtender`](SchemaExtender.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expressions` | `Expressions` |
| `helper` | [`OrmBaseH3lp`](OrmBaseH3lp.md) |

#### Returns

[`SchemaExtender`](SchemaExtender.md)

#### Defined in

[src/lib/schema/application/services/schemaExtender.ts:14](https://github.com/lambda-orm/lambdaorm-base/blob/b017793ac4f59142bbdc92360d810523dacc7525/src/lib/schema/application/services/schemaExtender.ts#L14)

## Methods

### complete

▸ **complete**(`schema`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |

#### Returns

`void`

#### Defined in

[src/lib/schema/application/services/schemaExtender.ts:162](https://github.com/lambda-orm/lambdaorm-base/blob/b017793ac4f59142bbdc92360d810523dacc7525/src/lib/schema/application/services/schemaExtender.ts#L162)

___

### extend

▸ **extend**(`schema`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |

#### Returns

`void`

#### Defined in

[src/lib/schema/application/services/schemaExtender.ts:19](https://github.com/lambda-orm/lambdaorm-base/blob/b017793ac4f59142bbdc92360d810523dacc7525/src/lib/schema/application/services/schemaExtender.ts#L19)

___

### isCompound

▸ **isCompound**(`parent`, `child`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `any` |
| `child` | `any` |

#### Returns

`boolean`

#### Defined in

[src/lib/schema/application/services/schemaExtender.ts:179](https://github.com/lambda-orm/lambdaorm-base/blob/b017793ac4f59142bbdc92360d810523dacc7525/src/lib/schema/application/services/schemaExtender.ts#L179)
