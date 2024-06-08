[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / QueryHelper

# Class: QueryHelper

## Constructors

### new QueryHelper()

> **new QueryHelper**(`str`): [`QueryHelper`](QueryHelper.md)

#### Parameters

• **str**: `IStringHelper`

#### Returns

[`QueryHelper`](QueryHelper.md)

#### Source

[src/lib/shared/infrastructure/helper.ts:24](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/shared/infrastructure/helper.ts#L24)

## Methods

### arrayToList()

> **arrayToList**(`array`, `timeZone`): `string`

#### Parameters

• **array**: `any`[]

• **timeZone**: `string`

#### Returns

`string`

#### Source

[src/lib/shared/infrastructure/helper.ts:34](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/shared/infrastructure/helper.ts#L34)

***

### bufferToString()

> **bufferToString**(`buffer`): `string`

#### Parameters

• **buffer**: `Buffer`

#### Returns

`string`

#### Source

[src/lib/shared/infrastructure/helper.ts:68](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/shared/infrastructure/helper.ts#L68)

***

### dateFormat()

> **dateFormat**(`value`, `format`): `string`

#### Parameters

• **value**: `any`

• **format**: `string`= `'iso'`

#### Returns

`string`

#### Source

[src/lib/shared/infrastructure/helper.ts:46](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/shared/infrastructure/helper.ts#L46)

***

### dateToString()

> **dateToString**(`date`, `timeZone`): `string`

#### Parameters

• **date**: `Date`

• **timeZone**: `string`= `'local'`

#### Returns

`string`

#### Source

[src/lib/shared/infrastructure/helper.ts:42](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/shared/infrastructure/helper.ts#L42)

***

### escape()

> **escape**(`name`): `string`

#### Parameters

• **name**: `string`

#### Returns

`string`

#### Source

[src/lib/shared/infrastructure/helper.ts:30](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/shared/infrastructure/helper.ts#L30)

***

### escapeId()

> **escapeId**(`name`): `string`

#### Parameters

• **name**: `string`

#### Returns

`string`

#### Source

[src/lib/shared/infrastructure/helper.ts:26](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/shared/infrastructure/helper.ts#L26)

***

### format()

> **format**(`sql`, `values`, `stringifyObjects`, `timeZone`): `string`

#### Parameters

• **sql**: `string`

• **values**: `any`[]

• **stringifyObjects**: `string`

• **timeZone**: `string`

#### Returns

`string`

#### Source

[src/lib/shared/infrastructure/helper.ts:38](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/shared/infrastructure/helper.ts#L38)

***

### getInfo()

> **getInfo**(`action`, `entity`, `type`?): [`SentenceInfo`](../interfaces/SentenceInfo.md)

#### Parameters

• **action**: [`SentenceAction`](../enumerations/SentenceAction.md)

• **entity**: `string`

• **type?**: [`SentenceType`](../enumerations/SentenceType.md)

#### Returns

[`SentenceInfo`](../interfaces/SentenceInfo.md)

#### Source

[src/lib/shared/infrastructure/helper.ts:184](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/shared/infrastructure/helper.ts#L184)

***

### getSentenceCategory()

> **getSentenceCategory**(`action`): [`SentenceCategory`](../enumerations/SentenceCategory.md)

#### Parameters

• **action**: [`SentenceAction`](../enumerations/SentenceAction.md)

#### Returns

[`SentenceCategory`](../enumerations/SentenceCategory.md)

#### Source

[src/lib/shared/infrastructure/helper.ts:129](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/shared/infrastructure/helper.ts#L129)

***

### getSentenceType()

> **getSentenceType**(`action`): [`SentenceType`](../enumerations/SentenceType.md)

#### Parameters

• **action**: [`SentenceAction`](../enumerations/SentenceAction.md)

#### Returns

[`SentenceType`](../enumerations/SentenceType.md)

#### Source

[src/lib/shared/infrastructure/helper.ts:82](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/shared/infrastructure/helper.ts#L82)

***

### raw()

> **raw**(`sql`): `string`

#### Parameters

• **sql**: `string`

#### Returns

`string`

#### Source

[src/lib/shared/infrastructure/helper.ts:72](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/shared/infrastructure/helper.ts#L72)

***

### transformParameter()

> **transformParameter**(`name`): `string`

#### Parameters

• **name**: `string`

#### Returns

`string`

#### Source

[src/lib/shared/infrastructure/helper.ts:76](https://github.com/lambda-orm/lambdaorm-base/blob/a635589f3d58a8022cbddf078d76ce5a7a0b2137/src/lib/shared/infrastructure/helper.ts#L76)
