[Lambda ORM](../README.md) / RouteService

# Class: RouteService

## Implements

- [`IRouteService`](../interfaces/IRouteService.md)

## Table of contents

### Constructors

- [constructor](RouteService.md#constructor)

### Methods

- [eval](RouteService.md#eval)
- [getSource](RouteService.md#getsource)

## Constructors

### constructor

• **new RouteService**(`stageConfigService`, `expressions`): [`RouteService`](RouteService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stageConfigService` | [`StageConfigService`](StageConfigService.md) |
| `expressions` | `Expressions` |

#### Returns

[`RouteService`](RouteService.md)

#### Defined in

[src/lib/schema/application/services/routeService.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/application/services/routeService.ts#L7)

## Methods

### eval

▸ **eval**(`source`, `info`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SourceRule`](../interfaces/SourceRule.md) |
| `info` | [`SentenceInfo`](../interfaces/SentenceInfo.md) |

#### Returns

`boolean`

#### Implementation of

[IRouteService](../interfaces/IRouteService.md).[eval](../interfaces/IRouteService.md#eval)

#### Defined in

[src/lib/schema/application/services/routeService.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/application/services/routeService.ts#L11)

___

### getSource

▸ **getSource**(`info`, `stage?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`SentenceInfo`](../interfaces/SentenceInfo.md) |
| `stage?` | `string` |

#### Returns

`string`

#### Implementation of

[IRouteService](../interfaces/IRouteService.md).[getSource](../interfaces/IRouteService.md#getsource)

#### Defined in

[src/lib/schema/application/services/routeService.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/718fa7249304e448c36276215c5894bb7b365dbd/src/lib/schema/application/services/routeService.ts#L16)
