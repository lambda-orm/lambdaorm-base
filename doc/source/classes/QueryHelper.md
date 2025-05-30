[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / QueryHelper

# Class: QueryHelper

Defined in: [src/lib/shared/infrastructure/helper.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/infrastructure/helper.ts#L22)

## Constructors

### Constructor

> **new QueryHelper**(`str`): `QueryHelper`

Defined in: [src/lib/shared/infrastructure/helper.ts:24](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/infrastructure/helper.ts#L24)

#### Parameters

##### str

`IStringHelper`

#### Returns

`QueryHelper`

## Methods

### arrayToList()

> **arrayToList**(`array`, `timeZone`): `string`

Defined in: [src/lib/shared/infrastructure/helper.ts:34](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/infrastructure/helper.ts#L34)

#### Parameters

##### array

`any`[]

##### timeZone

`string`

#### Returns

`string`

***

### bufferToString()

> **bufferToString**(`buffer`): `string`

Defined in: [src/lib/shared/infrastructure/helper.ts:68](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/infrastructure/helper.ts#L68)

#### Parameters

##### buffer

`Buffer`

#### Returns

`string`

***

### dateFormat()

> **dateFormat**(`value`, `format`): `string`

Defined in: [src/lib/shared/infrastructure/helper.ts:46](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/infrastructure/helper.ts#L46)

#### Parameters

##### value

`any`

##### format

`string` = `'iso'`

#### Returns

`string`

***

### dateToString()

> **dateToString**(`date`, `timeZone`): `string`

Defined in: [src/lib/shared/infrastructure/helper.ts:42](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/infrastructure/helper.ts#L42)

#### Parameters

##### date

`Date`

##### timeZone

`string` = `'local'`

#### Returns

`string`

***

### escape()

> **escape**(`name`): `string`

Defined in: [src/lib/shared/infrastructure/helper.ts:30](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/infrastructure/helper.ts#L30)

#### Parameters

##### name

`string`

#### Returns

`string`

***

### escapeId()

> **escapeId**(`name`): `string`

Defined in: [src/lib/shared/infrastructure/helper.ts:26](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/infrastructure/helper.ts#L26)

#### Parameters

##### name

`string`

#### Returns

`string`

***

### format()

> **format**(`sql`, `values`, `stringifyObjects`, `timeZone`): `string`

Defined in: [src/lib/shared/infrastructure/helper.ts:38](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/infrastructure/helper.ts#L38)

#### Parameters

##### sql

`string`

##### values

`any`[]

##### stringifyObjects

`string`

##### timeZone

`string`

#### Returns

`string`

***

### getInfo()

> **getInfo**(`action`, `entity`, `type?`): [`SentenceInfo`](../interfaces/SentenceInfo.md)

Defined in: [src/lib/shared/infrastructure/helper.ts:184](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/infrastructure/helper.ts#L184)

#### Parameters

##### action

[`SentenceAction`](../enumerations/SentenceAction.md)

##### entity

`string`

##### type?

[`SentenceType`](../enumerations/SentenceType.md)

#### Returns

[`SentenceInfo`](../interfaces/SentenceInfo.md)

***

### getSentenceCategory()

> **getSentenceCategory**(`action`): [`SentenceCategory`](../enumerations/SentenceCategory.md)

Defined in: [src/lib/shared/infrastructure/helper.ts:129](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/infrastructure/helper.ts#L129)

#### Parameters

##### action

[`SentenceAction`](../enumerations/SentenceAction.md)

#### Returns

[`SentenceCategory`](../enumerations/SentenceCategory.md)

***

### getSentenceType()

> **getSentenceType**(`action`): [`SentenceType`](../enumerations/SentenceType.md)

Defined in: [src/lib/shared/infrastructure/helper.ts:82](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/infrastructure/helper.ts#L82)

#### Parameters

##### action

[`SentenceAction`](../enumerations/SentenceAction.md)

#### Returns

[`SentenceType`](../enumerations/SentenceType.md)

***

### raw()

> **raw**(`sql`): `string`

Defined in: [src/lib/shared/infrastructure/helper.ts:72](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/infrastructure/helper.ts#L72)

#### Parameters

##### sql

`string`

#### Returns

`string`

***

### transformParameter()

> **transformParameter**(`name`): `string`

Defined in: [src/lib/shared/infrastructure/helper.ts:76](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/infrastructure/helper.ts#L76)

#### Parameters

##### name

`string`

#### Returns

`string`
