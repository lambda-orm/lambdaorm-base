[Lambda ORM](../README.md) / IRouteService

# Interface: IRouteService

## Implemented by

- [`RouteService`](../classes/RouteService.md)

## Table of contents

### Methods

- [eval](IRouteService.md#eval)
- [getSource](IRouteService.md#getsource)

## Methods

### eval

▸ **eval**(`source`, `clauseInfo`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SourceRule`](SourceRule.md) |
| `clauseInfo` | [`ClauseInfo`](ClauseInfo.md) |

#### Returns

`boolean`

#### Defined in

[src/lib/schema/domain/services.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/607e1fafed50a330f31ab43c22ecec31e40b455d/src/lib/schema/domain/services.ts#L6)

___

### getSource

▸ **getSource**(`clauseInfo`, `stage?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clauseInfo` | [`ClauseInfo`](ClauseInfo.md) |
| `stage?` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/schema/domain/services.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/607e1fafed50a330f31ab43c22ecec31e40b455d/src/lib/schema/domain/services.ts#L7)
