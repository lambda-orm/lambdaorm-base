[Lambda ORM](../README.md) / SqlHelper

# Class: SqlHelper

## Table of contents

### Constructors

- [constructor](SqlHelper.md#constructor)

### Methods

- [arrayToList](SqlHelper.md#arraytolist)
- [bufferToString](SqlHelper.md#buffertostring)
- [createInfo](SqlHelper.md#createinfo)
- [dateFormat](SqlHelper.md#dateformat)
- [dateToString](SqlHelper.md#datetostring)
- [escape](SqlHelper.md#escape)
- [escapeId](SqlHelper.md#escapeid)
- [format](SqlHelper.md#format)
- [getInfo](SqlHelper.md#getinfo)
- [raw](SqlHelper.md#raw)
- [transformParameter](SqlHelper.md#transformparameter)

## Constructors

### constructor

• **new SqlHelper**(`str`): [`SqlHelper`](SqlHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `IStringHelper` |

#### Returns

[`SqlHelper`](SqlHelper.md)

#### Defined in

[src/lib/shared/infrastructure/helper.ts:24](https://github.com/lambda-orm/lambdaorm-base/blob/7b6b74ecb98995ca00f3d0d7aa2f84db15cdd7eb/src/lib/shared/infrastructure/helper.ts#L24)

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

[src/lib/shared/infrastructure/helper.ts:34](https://github.com/lambda-orm/lambdaorm-base/blob/7b6b74ecb98995ca00f3d0d7aa2f84db15cdd7eb/src/lib/shared/infrastructure/helper.ts#L34)

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

[src/lib/shared/infrastructure/helper.ts:55](https://github.com/lambda-orm/lambdaorm-base/blob/7b6b74ecb98995ca00f3d0d7aa2f84db15cdd7eb/src/lib/shared/infrastructure/helper.ts#L55)

___

### createInfo

▸ **createInfo**(`entity`, `action`, `category`, `type`): [`SentenceInfo`](../interfaces/SentenceInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `action` | [`SentenceAction`](../enums/SentenceAction.md) |
| `category` | [`SentenceCategory`](../enums/SentenceCategory.md) |
| `type` | [`SentenceType`](../enums/SentenceType.md) |

#### Returns

[`SentenceInfo`](../interfaces/SentenceInfo.md)

#### Defined in

[src/lib/shared/infrastructure/helper.ts:148](https://github.com/lambda-orm/lambdaorm-base/blob/7b6b74ecb98995ca00f3d0d7aa2f84db15cdd7eb/src/lib/shared/infrastructure/helper.ts#L148)

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

[src/lib/shared/infrastructure/helper.ts:46](https://github.com/lambda-orm/lambdaorm-base/blob/7b6b74ecb98995ca00f3d0d7aa2f84db15cdd7eb/src/lib/shared/infrastructure/helper.ts#L46)

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

[src/lib/shared/infrastructure/helper.ts:42](https://github.com/lambda-orm/lambdaorm-base/blob/7b6b74ecb98995ca00f3d0d7aa2f84db15cdd7eb/src/lib/shared/infrastructure/helper.ts#L42)

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

[src/lib/shared/infrastructure/helper.ts:30](https://github.com/lambda-orm/lambdaorm-base/blob/7b6b74ecb98995ca00f3d0d7aa2f84db15cdd7eb/src/lib/shared/infrastructure/helper.ts#L30)

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

[src/lib/shared/infrastructure/helper.ts:26](https://github.com/lambda-orm/lambdaorm-base/blob/7b6b74ecb98995ca00f3d0d7aa2f84db15cdd7eb/src/lib/shared/infrastructure/helper.ts#L26)

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

[src/lib/shared/infrastructure/helper.ts:38](https://github.com/lambda-orm/lambdaorm-base/blob/7b6b74ecb98995ca00f3d0d7aa2f84db15cdd7eb/src/lib/shared/infrastructure/helper.ts#L38)

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

[src/lib/shared/infrastructure/helper.ts:69](https://github.com/lambda-orm/lambdaorm-base/blob/7b6b74ecb98995ca00f3d0d7aa2f84db15cdd7eb/src/lib/shared/infrastructure/helper.ts#L69)

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

[src/lib/shared/infrastructure/helper.ts:59](https://github.com/lambda-orm/lambdaorm-base/blob/7b6b74ecb98995ca00f3d0d7aa2f84db15cdd7eb/src/lib/shared/infrastructure/helper.ts#L59)

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

[src/lib/shared/infrastructure/helper.ts:63](https://github.com/lambda-orm/lambdaorm-base/blob/7b6b74ecb98995ca00f3d0d7aa2f84db15cdd7eb/src/lib/shared/infrastructure/helper.ts#L63)
