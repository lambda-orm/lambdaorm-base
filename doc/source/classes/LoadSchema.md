[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / LoadSchema

# Class: LoadSchema

Defined in: [src/lib/schema/application/useCases/load.ts:9](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/useCases/load.ts#L9)

## Constructors

### Constructor

> **new LoadSchema**(`source`, `domain`, `mapping`, `stage`, `view`, `helper`): `LoadSchema`

Defined in: [src/lib/schema/application/useCases/load.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/useCases/load.ts#L11)

#### Parameters

##### source

[`DataSourceConfigService`](DataSourceConfigService.md)

##### domain

[`DomainConfigService`](DomainConfigService.md)

##### mapping

[`MappingsConfigService`](MappingsConfigService.md)

##### stage

[`StageConfigService`](StageConfigService.md)

##### view

[`ViewsConfigService`](ViewsConfigService.md)

##### helper

[`OrmBaseH3lp`](OrmBaseH3lp.md)

#### Returns

`LoadSchema`

## Methods

### load()

> **load**(`source`): [`Schema`](../interfaces/Schema.md)

Defined in: [src/lib/schema/application/useCases/load.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/useCases/load.ts#L18)

#### Parameters

##### source

[`Schema`](../interfaces/Schema.md)

#### Returns

[`Schema`](../interfaces/Schema.md)
