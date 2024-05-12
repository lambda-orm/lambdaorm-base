[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / RouteService

# Class: RouteService

## Implements

- [`IRouteService`](../interfaces/IRouteService.md)

## Constructors

### new RouteService()

> **new RouteService**(`stageConfigService`, `exp`): [`RouteService`](RouteService.md)

#### Parameters

• **stageConfigService**: [`StageConfigService`](StageConfigService.md)

• **exp**: `Expressions`

#### Returns

[`RouteService`](RouteService.md)

#### Source

[src/lib/schema/application/services/routeService.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/schema/application/services/routeService.ts#L7)

## Methods

### eval()

> **eval**(`source`, `info`): `boolean`

#### Parameters

• **source**: [`SourceRule`](../interfaces/SourceRule.md)

• **info**: [`SentenceInfo`](../interfaces/SentenceInfo.md)

#### Returns

`boolean`

#### Implementation of

[`IRouteService`](../interfaces/IRouteService.md).[`eval`](../interfaces/IRouteService.md#eval)

#### Source

[src/lib/schema/application/services/routeService.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/schema/application/services/routeService.ts#L11)

***

### getSource()

> **getSource**(`info`, `stage`?): `string`

#### Parameters

• **info**: [`SentenceInfo`](../interfaces/SentenceInfo.md)

• **stage?**: `string`

#### Returns

`string`

#### Implementation of

[`IRouteService`](../interfaces/IRouteService.md).[`getSource`](../interfaces/IRouteService.md#getsource)

#### Source

[src/lib/schema/application/services/routeService.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/schema/application/services/routeService.ts#L16)
