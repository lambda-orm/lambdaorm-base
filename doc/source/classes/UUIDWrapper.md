[Lambda ORM](../README.md) / UUIDWrapper

# Class: UUIDWrapper

## Table of contents

### Constructors

- [constructor](UUIDWrapper.md#constructor)

### Methods

- [empty](UUIDWrapper.md#empty)
- [fromString](UUIDWrapper.md#fromstring)
- [isUuid](UUIDWrapper.md#isuuid)
- [jsonSchema](UUIDWrapper.md#jsonschema)
- [v4](UUIDWrapper.md#v4)

## Constructors

### constructor

• **new UUIDWrapper**(): [`UUIDWrapper`](UUIDWrapper.md)

#### Returns

[`UUIDWrapper`](UUIDWrapper.md)

## Methods

### empty

▸ **empty**(): `string`

#### Returns

`string`

#### Defined in

[src/lib/shared/infrastructure/helper.ts:158](https://github.com/lambda-orm/lambdaorm-base/blob/b017793ac4f59142bbdc92360d810523dacc7525/src/lib/shared/infrastructure/helper.ts#L158)

___

### fromString

▸ **fromString**(`text`, `namespace?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `namespace?` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/shared/infrastructure/helper.ts:162](https://github.com/lambda-orm/lambdaorm-base/blob/b017793ac4f59142bbdc92360d810523dacc7525/src/lib/shared/infrastructure/helper.ts#L162)

___

### isUuid

▸ **isUuid**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

[src/lib/shared/infrastructure/helper.ts:154](https://github.com/lambda-orm/lambdaorm-base/blob/b017793ac4f59142bbdc92360d810523dacc7525/src/lib/shared/infrastructure/helper.ts#L154)

___

### jsonSchema

▸ **jsonSchema**(): `any`

#### Returns

`any`

#### Defined in

[src/lib/shared/infrastructure/helper.ts:166](https://github.com/lambda-orm/lambdaorm-base/blob/b017793ac4f59142bbdc92360d810523dacc7525/src/lib/shared/infrastructure/helper.ts#L166)

___

### v4

▸ **v4**(): `string`

#### Returns

`string`

#### Defined in

[src/lib/shared/infrastructure/helper.ts:150](https://github.com/lambda-orm/lambdaorm-base/blob/b017793ac4f59142bbdc92360d810523dacc7525/src/lib/shared/infrastructure/helper.ts#L150)
