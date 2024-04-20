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
| `helper` | [`SchemaH3lp`](SchemaH3lp.md) |

#### Returns

[`SchemaExtender`](SchemaExtender.md)

#### Defined in

[src/lib/schema/application/services/schemaExtender.ts:12](https://github.com/lambda-orm/lambdaorm-base/blob/3797a9fa3ae3c4470a37c190adcdb88d49954313/src/lib/schema/application/services/schemaExtender.ts#L12)

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

[src/lib/schema/application/services/schemaExtender.ts:160](https://github.com/lambda-orm/lambdaorm-base/blob/3797a9fa3ae3c4470a37c190adcdb88d49954313/src/lib/schema/application/services/schemaExtender.ts#L160)

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

[src/lib/schema/application/services/schemaExtender.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/3797a9fa3ae3c4470a37c190adcdb88d49954313/src/lib/schema/application/services/schemaExtender.ts#L17)

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

[src/lib/schema/application/services/schemaExtender.ts:177](https://github.com/lambda-orm/lambdaorm-base/blob/3797a9fa3ae3c4470a37c190adcdb88d49954313/src/lib/schema/application/services/schemaExtender.ts#L177)
