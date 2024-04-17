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
- [propertyName](SchemaHelper.md#propertyname)
- [refPropertyName](SchemaHelper.md#refpropertyname)
- [relationName](SchemaHelper.md#relationname)
- [type](SchemaHelper.md#type)
- [uuid](SchemaHelper.md#uuid)

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

[src/lib/schema/application/services/helper.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L10)

## Properties

### DEFAULT\_LENGTH

• `Readonly` **DEFAULT\_LENGTH**: ``80``

#### Defined in

[src/lib/schema/application/services/helper.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L7)

___

### DEFAULT\_TYPE

• `Readonly` **DEFAULT\_TYPE**: ``"string"``

#### Defined in

[src/lib/schema/application/services/helper.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L6)

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

[src/lib/schema/application/services/helper.ts:35](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L35)

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

[src/lib/schema/application/services/helper.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L22)

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

[src/lib/schema/application/services/helper.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L16)

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

[src/lib/schema/application/services/helper.ts:57](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L57)

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

[src/lib/schema/application/services/helper.ts:63](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L63)

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

[src/lib/schema/application/services/helper.ts:47](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L47)

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

[src/lib/schema/application/services/helper.ts:52](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L52)

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

[src/lib/schema/application/services/helper.ts:39](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L39)

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

[src/lib/schema/application/services/helper.ts:86](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L86)

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

[src/lib/schema/application/services/helper.ts:90](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L90)

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

[src/lib/schema/application/services/helper.ts:27](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L27)

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

[src/lib/schema/application/services/helper.ts:31](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L31)

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

[src/lib/schema/application/services/helper.ts:43](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L43)

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

[src/lib/schema/application/services/helper.ts:81](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L81)

___

### uuid

▸ **uuid**(): `string`

#### Returns

`string`

#### Defined in

[src/lib/schema/application/services/helper.ts:12](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/helper.ts#L12)
