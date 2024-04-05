[Lambda ORM](../README.md) / SchemaHelper

# Class: SchemaHelper

## Table of contents

### Constructors

- [constructor](SchemaHelper.md#constructor)

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

[src/lib/schema/application/services/helper.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L7)

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

[src/lib/schema/application/services/helper.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L32)

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

[src/lib/schema/application/services/helper.ts:19](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L19)

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

[src/lib/schema/application/services/helper.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L13)

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

[src/lib/schema/application/services/helper.ts:54](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L54)

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

[src/lib/schema/application/services/helper.ts:60](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L60)

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

[src/lib/schema/application/services/helper.ts:44](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L44)

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

[src/lib/schema/application/services/helper.ts:49](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L49)

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

[src/lib/schema/application/services/helper.ts:36](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L36)

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

[src/lib/schema/application/services/helper.ts:83](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L83)

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

[src/lib/schema/application/services/helper.ts:87](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L87)

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

[src/lib/schema/application/services/helper.ts:24](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L24)

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

[src/lib/schema/application/services/helper.ts:28](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L28)

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

[src/lib/schema/application/services/helper.ts:40](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L40)

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

[src/lib/schema/application/services/helper.ts:78](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L78)

___

### uuid

▸ **uuid**(): `string`

#### Returns

`string`

#### Defined in

[src/lib/schema/application/services/helper.ts:9](https://github.com/lambda-orm/lambdaorm-base/blob/33bcc08/src/lib/schema/application/services/helper.ts#L9)
