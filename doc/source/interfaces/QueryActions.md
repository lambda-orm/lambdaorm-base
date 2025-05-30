[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / QueryActions

# Interface: QueryActions

Defined in: [src/lib/repository/domain/actions.ts:3](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/actions.ts#L3)

## Methods

### constraints()

> **constraints**(`query`): `Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

Defined in: [src/lib/repository/domain/actions.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/actions.ts#L8)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

***

### execute()

> **execute**(`query`, `data`): `Promise`\<`any`\>

Defined in: [src/lib/repository/domain/actions.ts:4](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/actions.ts#L4)

#### Parameters

##### query

`string`

##### data

`any`

#### Returns

`Promise`\<`any`\>

***

### metadata()

> **metadata**(`query`): `Promise`\<[`Metadata`](Metadata.md)\>

Defined in: [src/lib/repository/domain/actions.ts:9](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/actions.ts#L9)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`Metadata`](Metadata.md)\>

***

### model()

> **model**(`query`): `Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

Defined in: [src/lib/repository/domain/actions.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/actions.ts#L6)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

***

### normalize()

> **normalize**(`query`): `string`

Defined in: [src/lib/repository/domain/actions.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/actions.ts#L5)

#### Parameters

##### query

`string`

#### Returns

`string`

***

### parameters()

> **parameters**(`query`): `Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

Defined in: [src/lib/repository/domain/actions.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/actions.ts#L7)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

***

### plan()

> **plan**(`query`): `Promise`\<[`QueryPlan`](QueryPlan.md)\>

Defined in: [src/lib/repository/domain/actions.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/repository/domain/actions.ts#L10)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`QueryPlan`](QueryPlan.md)\>
