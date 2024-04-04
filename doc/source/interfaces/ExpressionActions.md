[Lambda ORM](../README.md) / ExpressionActions

# Interface: ExpressionActions

## Table of contents

### Methods

- [constraints](ExpressionActions.md#constraints)
- [execute](ExpressionActions.md#execute)
- [metadata](ExpressionActions.md#metadata)
- [model](ExpressionActions.md#model)
- [normalize](ExpressionActions.md#normalize)
- [parameters](ExpressionActions.md#parameters)
- [plan](ExpressionActions.md#plan)

## Methods

### constraints

▸ **constraints**(`expression`): `Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Defined in

[src/lib/repository/domain/actions.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/4ecf84b/src/lib/repository/domain/actions.ts#L8)

___

### execute

▸ **execute**(`expression`, `data`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `data` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/lib/repository/domain/actions.ts:4](https://github.com/lambda-orm/lambdaorm-base/blob/4ecf84b/src/lib/repository/domain/actions.ts#L4)

___

### metadata

▸ **metadata**(`expression`): `Promise`\<[`Metadata`](Metadata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`Metadata`](Metadata.md)\>

#### Defined in

[src/lib/repository/domain/actions.ts:9](https://github.com/lambda-orm/lambdaorm-base/blob/4ecf84b/src/lib/repository/domain/actions.ts#L9)

___

### model

▸ **model**(`expression`): `Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

#### Defined in

[src/lib/repository/domain/actions.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/4ecf84b/src/lib/repository/domain/actions.ts#L6)

___

### normalize

▸ **normalize**(`expression`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/actions.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/4ecf84b/src/lib/repository/domain/actions.ts#L5)

___

### parameters

▸ **parameters**(`expression`): `Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Defined in

[src/lib/repository/domain/actions.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/4ecf84b/src/lib/repository/domain/actions.ts#L7)

___

### plan

▸ **plan**(`expression`): `Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Defined in

[src/lib/repository/domain/actions.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/4ecf84b/src/lib/repository/domain/actions.ts#L10)
