[Lambda ORM](../README.md) / SchemaHelper

# Class: SchemaHelper

## Table of contents

### Constructors

- [constructor](SchemaHelper.md#constructor)

### Methods

- [entityName](SchemaHelper.md#entityname)
- [equalName](SchemaHelper.md#equalname)
- [getEntityName](SchemaHelper.md#getentityname)
- [getFk](SchemaHelper.md#getfk)
- [getKey](SchemaHelper.md#getkey)
- [getPk](SchemaHelper.md#getpk)
- [getPkName](SchemaHelper.md#getpkname)
- [length](SchemaHelper.md#length)
- [lengthFromType](SchemaHelper.md#lengthfromtype)
- [refPropertyName](SchemaHelper.md#refpropertyname)
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

[src/lib/schema/application/services/helper.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/2344cdd/src/lib/schema/application/services/helper.ts#L7)

## Methods

### entityName

▸ **entityName**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/schema/application/services/helper.ts:19](https://github.com/lambda-orm/lambdaorm-base/blob/2344cdd/src/lib/schema/application/services/helper.ts#L19)

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

[src/lib/schema/application/services/helper.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/2344cdd/src/lib/schema/application/services/helper.ts#L13)

___

### getEntityName

▸ **getEntityName**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/schema/application/services/helper.ts:23](https://github.com/lambda-orm/lambdaorm-base/blob/2344cdd/src/lib/schema/application/services/helper.ts#L23)

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

[src/lib/schema/application/services/helper.ts:38](https://github.com/lambda-orm/lambdaorm-base/blob/2344cdd/src/lib/schema/application/services/helper.ts#L38)

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

[src/lib/schema/application/services/helper.ts:44](https://github.com/lambda-orm/lambdaorm-base/blob/2344cdd/src/lib/schema/application/services/helper.ts#L44)

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

[src/lib/schema/application/services/helper.ts:28](https://github.com/lambda-orm/lambdaorm-base/blob/2344cdd/src/lib/schema/application/services/helper.ts#L28)

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

[src/lib/schema/application/services/helper.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/2344cdd/src/lib/schema/application/services/helper.ts#L33)

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

[src/lib/schema/application/services/helper.ts:71](https://github.com/lambda-orm/lambdaorm-base/blob/2344cdd/src/lib/schema/application/services/helper.ts#L71)

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

[src/lib/schema/application/services/helper.ts:75](https://github.com/lambda-orm/lambdaorm-base/blob/2344cdd/src/lib/schema/application/services/helper.ts#L75)

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

[src/lib/schema/application/services/helper.ts:62](https://github.com/lambda-orm/lambdaorm-base/blob/2344cdd/src/lib/schema/application/services/helper.ts#L62)

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

[src/lib/schema/application/services/helper.ts:66](https://github.com/lambda-orm/lambdaorm-base/blob/2344cdd/src/lib/schema/application/services/helper.ts#L66)

___

### uuid

▸ **uuid**(): `string`

#### Returns

`string`

#### Defined in

[src/lib/schema/application/services/helper.ts:9](https://github.com/lambda-orm/lambdaorm-base/blob/2344cdd/src/lib/schema/application/services/helper.ts#L9)
