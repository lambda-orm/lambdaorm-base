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

▸ **eval**(`source`, `info`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SourceRule`](SourceRule.md) |
| `info` | [`SentenceInfo`](SentenceInfo.md) |

#### Returns

`boolean`

#### Defined in

[src/lib/schema/domain/services.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/7ea443d3ebae76b8fea45044f8a52e5d45444f32/src/lib/schema/domain/services.ts#L6)

___

### getSource

▸ **getSource**(`info`, `stage?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`SentenceInfo`](SentenceInfo.md) |
| `stage?` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/schema/domain/services.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/7ea443d3ebae76b8fea45044f8a52e5d45444f32/src/lib/schema/domain/services.ts#L7)
