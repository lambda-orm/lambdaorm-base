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

[src/lib/schema/application/services/schemaExtender.ts:12](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/application/services/schemaExtender.ts#L12)

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

[src/lib/schema/application/services/schemaExtender.ts:160](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/application/services/schemaExtender.ts#L160)

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

[src/lib/schema/application/services/schemaExtender.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/application/services/schemaExtender.ts#L17)

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

[src/lib/schema/application/services/schemaExtender.ts:177](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/application/services/schemaExtender.ts#L177)
