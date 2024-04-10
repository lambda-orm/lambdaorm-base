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

[src/lib/schema/domain/services.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/12a29e75fed6aa775b32f4c546f90ce347d15140/src/lib/schema/domain/services.ts#L5)

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

[src/lib/schema/domain/services.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/12a29e75fed6aa775b32f4c546f90ce347d15140/src/lib/schema/domain/services.ts#L6)
