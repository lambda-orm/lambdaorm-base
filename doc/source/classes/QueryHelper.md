[Lambda ORM](../README.md) / QueryHelper

# Class: QueryHelper

## Table of contents

### Constructors

- [constructor](QueryHelper.md#constructor)

### Methods

- [arrayToList](QueryHelper.md#arraytolist)
- [bufferToString](QueryHelper.md#buffertostring)
- [dateFormat](QueryHelper.md#dateformat)
- [dateToString](QueryHelper.md#datetostring)
- [escape](QueryHelper.md#escape)
- [escapeId](QueryHelper.md#escapeid)
- [format](QueryHelper.md#format)
- [getInfo](QueryHelper.md#getinfo)
- [getSentenceCategory](QueryHelper.md#getsentencecategory)
- [getSentenceType](QueryHelper.md#getsentencetype)
- [raw](QueryHelper.md#raw)
- [transformParameter](QueryHelper.md#transformparameter)

## Constructors

### constructor

• **new QueryHelper**(`str`): [`QueryHelper`](QueryHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `IStringHelper` |

#### Returns

[`QueryHelper`](QueryHelper.md)

#### Defined in

[src/lib/shared/infrastructure/helper.ts:24](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/shared/infrastructure/helper.ts#L24)

## Methods

### arrayToList

▸ **arrayToList**(`array`, `timeZone`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `timeZone` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/shared/infrastructure/helper.ts:34](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/shared/infrastructure/helper.ts#L34)

___

### bufferToString

▸ **bufferToString**(`buffer`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |

#### Returns

`string`

#### Defined in

[src/lib/shared/infrastructure/helper.ts:55](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/shared/infrastructure/helper.ts#L55)

___

### dateFormat

▸ **dateFormat**(`value`, `format?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `format` | `string` | `'ISO'` |

#### Returns

`string`

#### Defined in

[src/lib/shared/infrastructure/helper.ts:46](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/shared/infrastructure/helper.ts#L46)

___

### dateToString

▸ **dateToString**(`date`, `timeZone?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | `Date` | `undefined` |
| `timeZone` | `string` | `'local'` |

#### Returns

`string`

#### Defined in

[src/lib/shared/infrastructure/helper.ts:42](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/shared/infrastructure/helper.ts#L42)

___

### escape

▸ **escape**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/shared/infrastructure/helper.ts:30](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/shared/infrastructure/helper.ts#L30)

___

### escapeId

▸ **escapeId**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/shared/infrastructure/helper.ts:26](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/shared/infrastructure/helper.ts#L26)

___

### format

▸ **format**(`sql`, `values`, `stringifyObjects`, `timeZone`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |
| `values` | `any`[] |
| `stringifyObjects` | `string` |
| `timeZone` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/shared/infrastructure/helper.ts:38](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/shared/infrastructure/helper.ts#L38)

___

### getInfo

▸ **getInfo**(`action`, `entity`): [`SentenceInfo`](../interfaces/SentenceInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`SentenceAction`](../enums/SentenceAction.md) |
| `entity` | `string` |

#### Returns

[`SentenceInfo`](../interfaces/SentenceInfo.md)

#### Defined in

[src/lib/shared/infrastructure/helper.ts:168](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/shared/infrastructure/helper.ts#L168)

___

### getSentenceCategory

▸ **getSentenceCategory**(`action`): [`SentenceCategory`](../enums/SentenceCategory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`SentenceAction`](../enums/SentenceAction.md) |

#### Returns

[`SentenceCategory`](../enums/SentenceCategory.md)

#### Defined in

[src/lib/shared/infrastructure/helper.ts:116](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/shared/infrastructure/helper.ts#L116)

___

### getSentenceType

▸ **getSentenceType**(`action`): [`SentenceType`](../enums/SentenceType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`SentenceAction`](../enums/SentenceAction.md) |

#### Returns

[`SentenceType`](../enums/SentenceType.md)

#### Defined in

[src/lib/shared/infrastructure/helper.ts:69](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/shared/infrastructure/helper.ts#L69)

___

### raw

▸ **raw**(`sql`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/shared/infrastructure/helper.ts:59](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/shared/infrastructure/helper.ts#L59)

___

### transformParameter

▸ **transformParameter**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/shared/infrastructure/helper.ts:63](https://github.com/lambda-orm/lambdaorm-base/blob/ebf23f0efda68734da44516482f9d879bcfaea24/src/lib/shared/infrastructure/helper.ts#L63)
