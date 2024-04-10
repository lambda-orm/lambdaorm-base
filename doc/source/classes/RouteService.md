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

[src/lib/schema/application/services/routeService.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/12a29e75fed6aa775b32f4c546f90ce347d15140/src/lib/schema/application/services/routeService.ts#L7)

## Methods

### eval

▸ **eval**(`source`, `clauseInfo`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SourceRule`](../interfaces/SourceRule.md) |
| `clauseInfo` | [`ClauseInfo`](../interfaces/ClauseInfo.md) |

#### Returns

`boolean`

#### Implementation of

[IRouteService](../interfaces/IRouteService.md).[eval](../interfaces/IRouteService.md#eval)

#### Defined in

[src/lib/schema/application/services/routeService.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/12a29e75fed6aa775b32f4c546f90ce347d15140/src/lib/schema/application/services/routeService.ts#L10)

___

### getSource

▸ **getSource**(`clauseInfo`, `stage?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clauseInfo` | [`ClauseInfo`](../interfaces/ClauseInfo.md) |
| `stage?` | `string` |

#### Returns

`string`

#### Implementation of

[IRouteService](../interfaces/IRouteService.md).[getSource](../interfaces/IRouteService.md#getsource)

#### Defined in

[src/lib/schema/application/services/routeService.ts:27](https://github.com/lambda-orm/lambdaorm-base/blob/12a29e75fed6aa775b32f4c546f90ce347d15140/src/lib/schema/application/services/routeService.ts#L27)
