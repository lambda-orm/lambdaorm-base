[Lambda ORM](../README.md) / SentenceSerializer

# Interface: SentenceSerializer

## Table of contents

### Methods

- [clone](SentenceSerializer.md#clone)
- [deserialize](SentenceSerializer.md#deserialize)
- [serialize](SentenceSerializer.md#serialize)

## Methods

### clone

▸ **clone**(`sentence`): [`Sentence`](../classes/Sentence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sentence` | [`Sentence`](../classes/Sentence.md) |

#### Returns

[`Sentence`](../classes/Sentence.md)

#### Defined in

[src/lib/sentence/domain/services.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/sentence/domain/services.ts#L13)

___

### deserialize

▸ **deserialize**(`value`): [`Sentence`](../classes/Sentence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`Sentence`](../classes/Sentence.md)

#### Defined in

[src/lib/sentence/domain/services.ts:15](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/sentence/domain/services.ts#L15)

___

### serialize

▸ **serialize**(`sentence`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sentence` | [`Sentence`](../classes/Sentence.md) |

#### Returns

`string`

#### Defined in

[src/lib/sentence/domain/services.ts:14](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/sentence/domain/services.ts#L14)
