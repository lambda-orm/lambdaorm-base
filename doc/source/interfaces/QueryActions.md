[Lambda ORM](../README.md) / QueryActions

# Interface: QueryActions

## Table of contents

### Methods

- [constraints](QueryActions.md#constraints)
- [execute](QueryActions.md#execute)
- [metadata](QueryActions.md#metadata)
- [model](QueryActions.md#model)
- [normalize](QueryActions.md#normalize)
- [parameters](QueryActions.md#parameters)
- [plan](QueryActions.md#plan)

## Methods

### constraints

▸ **constraints**(`query`): `Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Defined in

[src/lib/repository/domain/actions.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/9b21e8689acd2305a4bae966af6b658877a4045e/src/lib/repository/domain/actions.ts#L8)

___

### execute

▸ **execute**(`query`, `data`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `data` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/lib/repository/domain/actions.ts:4](https://github.com/lambda-orm/lambdaorm-base/blob/9b21e8689acd2305a4bae966af6b658877a4045e/src/lib/repository/domain/actions.ts#L4)

___

### metadata

▸ **metadata**(`query`): `Promise`\<[`Metadata`](Metadata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`Metadata`](Metadata.md)\>

#### Defined in

[src/lib/repository/domain/actions.ts:9](https://github.com/lambda-orm/lambdaorm-base/blob/9b21e8689acd2305a4bae966af6b658877a4045e/src/lib/repository/domain/actions.ts#L9)

___

### model

▸ **model**(`query`): `Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

#### Defined in

[src/lib/repository/domain/actions.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/9b21e8689acd2305a4bae966af6b658877a4045e/src/lib/repository/domain/actions.ts#L6)

___

### normalize

▸ **normalize**(`query`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/actions.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/9b21e8689acd2305a4bae966af6b658877a4045e/src/lib/repository/domain/actions.ts#L5)

___

### parameters

▸ **parameters**(`query`): `Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Defined in

[src/lib/repository/domain/actions.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/9b21e8689acd2305a4bae966af6b658877a4045e/src/lib/repository/domain/actions.ts#L7)

___

### plan

▸ **plan**(`query`): `Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Defined in

[src/lib/repository/domain/actions.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/9b21e8689acd2305a4bae966af6b658877a4045e/src/lib/repository/domain/actions.ts#L10)
