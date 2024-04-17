[Lambda ORM](../README.md) / StageConfigService

# Class: StageConfigService

## Table of contents

### Constructors

- [constructor](StageConfigService.md#constructor)

### Properties

- [stages](StageConfigService.md#stages)

### Methods

- [get](StageConfigService.md#get)
- [load](StageConfigService.md#load)

## Constructors

### constructor

• **new StageConfigService**(): [`StageConfigService`](StageConfigService.md)

#### Returns

[`StageConfigService`](StageConfigService.md)

#### Defined in

[src/lib/schema/application/services/config/stageConfigService.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/config/stageConfigService.ts#L6)

## Properties

### stages

• **stages**: [`Stage`](../interfaces/Stage.md)[]

#### Defined in

[src/lib/schema/application/services/config/stageConfigService.ts:4](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/config/stageConfigService.ts#L4)

## Methods

### get

▸ **get**(`name?`): [`Stage`](../interfaces/Stage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`Stage`](../interfaces/Stage.md)

#### Defined in

[src/lib/schema/application/services/config/stageConfigService.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/config/stageConfigService.ts#L21)

___

### load

▸ **load**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Stage`](../interfaces/Stage.md) |

#### Returns

`void`

#### Defined in

[src/lib/schema/application/services/config/stageConfigService.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/a58dda5e4f2d6e9b7ef66b6cca91cfc1db3470e3/src/lib/schema/application/services/config/stageConfigService.ts#L10)
