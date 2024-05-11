[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / QueryActions

# Interface: QueryActions

## Methods

### constraints()

> **constraints**(`query`): `Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Parameters

• **query**: `string`

#### Returns

`Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Source

[src/lib/repository/domain/actions.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/repository/domain/actions.ts#L8)

***

### execute()

> **execute**(`query`, `data`): `Promise`\<`any`\>

#### Parameters

• **query**: `string`

• **data**: `any`

#### Returns

`Promise`\<`any`\>

#### Source

[src/lib/repository/domain/actions.ts:4](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/repository/domain/actions.ts#L4)

***

### metadata()

> **metadata**(`query`): `Promise`\<[`Metadata`](Metadata.md)\>

#### Parameters

• **query**: `string`

#### Returns

`Promise`\<[`Metadata`](Metadata.md)\>

#### Source

[src/lib/repository/domain/actions.ts:9](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/repository/domain/actions.ts#L9)

***

### model()

> **model**(`query`): `Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

#### Parameters

• **query**: `string`

#### Returns

`Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

#### Source

[src/lib/repository/domain/actions.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/repository/domain/actions.ts#L6)

***

### normalize()

> **normalize**(`query`): `string`

#### Parameters

• **query**: `string`

#### Returns

`string`

#### Source

[src/lib/repository/domain/actions.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/repository/domain/actions.ts#L5)

***

### parameters()

> **parameters**(`query`): `Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Parameters

• **query**: `string`

#### Returns

`Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Source

[src/lib/repository/domain/actions.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/repository/domain/actions.ts#L7)

***

### plan()

> **plan**(`query`): `Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Parameters

• **query**: `string`

#### Returns

`Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Source

[src/lib/repository/domain/actions.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/repository/domain/actions.ts#L10)
