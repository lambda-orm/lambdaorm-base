[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / RouteService

# Class: RouteService

Defined in: [src/lib/schema/application/services/routeService.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/routeService.ts#L5)

## Implements

- [`IRouteService`](../interfaces/IRouteService.md)

## Constructors

### Constructor

> **new RouteService**(`stageConfigService`, `exp`): `RouteService`

Defined in: [src/lib/schema/application/services/routeService.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/routeService.ts#L7)

#### Parameters

##### stageConfigService

[`StageConfigService`](StageConfigService.md)

##### exp

`Expressions`

#### Returns

`RouteService`

## Methods

### eval()

> **eval**(`source`, `info`): `boolean`

Defined in: [src/lib/schema/application/services/routeService.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/routeService.ts#L11)

#### Parameters

##### source

[`SourceRule`](../interfaces/SourceRule.md)

##### info

[`SentenceInfo`](../interfaces/SentenceInfo.md)

#### Returns

`boolean`

#### Implementation of

[`IRouteService`](../interfaces/IRouteService.md).[`eval`](../interfaces/IRouteService.md#eval)

***

### getSource()

> **getSource**(`info`, `stage?`): `string`

Defined in: [src/lib/schema/application/services/routeService.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/routeService.ts#L16)

#### Parameters

##### info

[`SentenceInfo`](../interfaces/SentenceInfo.md)

##### stage?

`string`

#### Returns

`string`

#### Implementation of

[`IRouteService`](../interfaces/IRouteService.md).[`getSource`](../interfaces/IRouteService.md#getsource)
