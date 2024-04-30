[Lambda ORM](../README.md) / SchemaHelper

# Class: SchemaHelper

## Table of contents

### Constructors

- [constructor](SchemaHelper.md#constructor)

### Properties

- [DEFAULT\_LENGTH](SchemaHelper.md#default_length)
- [DEFAULT\_TYPE](SchemaHelper.md#default_type)

### Methods

- [capitalize](SchemaHelper.md#capitalize)
- [entityName](SchemaHelper.md#entityname)
- [equalName](SchemaHelper.md#equalname)
- [getFk](SchemaHelper.md#getfk)
- [getKey](SchemaHelper.md#getkey)
- [getPk](SchemaHelper.md#getpk)
- [getPkName](SchemaHelper.md#getpkname)
- [indexName](SchemaHelper.md#indexname)
- [length](SchemaHelper.md#length)
- [lengthFromType](SchemaHelper.md#lengthfromtype)
- [newId](SchemaHelper.md#newid)
- [propertyName](SchemaHelper.md#propertyname)
- [refPropertyName](SchemaHelper.md#refpropertyname)
- [relationName](SchemaHelper.md#relationname)
- [type](SchemaHelper.md#type)

## Constructors

### constructor

• **new SchemaHelper**(`str`): [`SchemaHelper`](SchemaHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `IStringHelper` |

#### Returns

[`SchemaHelper`](SchemaHelper.md)

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L10)

## Properties

### DEFAULT\_LENGTH

• `Readonly` **DEFAULT\_LENGTH**: ``80``

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L7)

___

### DEFAULT\_TYPE

• `Readonly` **DEFAULT\_TYPE**: ``"string"``

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L6)

## Methods

### capitalize

▸ **capitalize**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:36](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L36)

___

### entityName

▸ **entityName**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L22)

___

### equalName

▸ **equalName**(`name1?`, `name2?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name1?` | `string` |
| `name2?` | `string` |

#### Returns

`boolean`

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L16)

___

### getFk

▸ **getFk**(`objType`): `undefined` \| `PropertyType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objType` | `ObjType` |

#### Returns

`undefined` \| `PropertyType`

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:58](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L58)

___

### getKey

▸ **getKey**(`uniques`): `undefined` \| `PropertyType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uniques` | `PropertyType`[] |

#### Returns

`undefined` \| `PropertyType`

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:64](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L64)

___

### getPk

▸ **getPk**(`objType`): `undefined` \| `PropertyType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objType` | `ObjType` |

#### Returns

`undefined` \| `PropertyType`

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:48](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L48)

___

### getPkName

▸ **getPkName**(`objType`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objType` | `ObjType` |

#### Returns

`string`

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:53](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L53)

___

### indexName

▸ **indexName**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:40](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L40)

___

### length

▸ **length**(`length?`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length?` | `number` |

#### Returns

`undefined` \| `number`

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:87](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L87)

___

### lengthFromType

▸ **lengthFromType**(`type`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Type` |

#### Returns

`undefined` \| `number`

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:91](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L91)

___

### newId

▸ **newId**(): `string`

#### Returns

`string`

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:12](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L12)

___

### propertyName

▸ **propertyName**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:28](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L28)

___

### refPropertyName

▸ **refPropertyName**(`entityName`, `propertyName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityName` | `string` |
| `propertyName` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L32)

___

### relationName

▸ **relationName**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:44](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L44)

___

### type

▸ **type**(`type?`, `length?`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` |
| `length?` | `number` |

#### Returns

`undefined` \| `string`

#### Defined in

[src/lib/schema/infrastructure/schemaHelper.ts:82](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/infrastructure/schemaHelper.ts#L82)
