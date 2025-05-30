[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / MappingsConfigService

# Class: MappingsConfigService

Defined in: [src/lib/schema/application/services/config/mappingsConfigService.ts:4](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingsConfigService.ts#L4)

## Constructors

### Constructor

> **new MappingsConfigService**(): `MappingsConfigService`

Defined in: [src/lib/schema/application/services/config/mappingsConfigService.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingsConfigService.ts#L7)

#### Returns

`MappingsConfigService`

## Properties

### mappings

> **mappings**: [`Mapping`](../interfaces/Mapping.md)[]

Defined in: [src/lib/schema/application/services/config/mappingsConfigService.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingsConfigService.ts#L5)

## Methods

### delete()

> **delete**(`name`): `void`

Defined in: [src/lib/schema/application/services/config/mappingsConfigService.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingsConfigService.ts#L22)

#### Parameters

##### name

`string`

#### Returns

`void`

***

### get()

> **get**(`name`): [`Mapping`](../interfaces/Mapping.md)

Defined in: [src/lib/schema/application/services/config/mappingsConfigService.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingsConfigService.ts#L29)

#### Parameters

##### name

`string`

#### Returns

[`Mapping`](../interfaces/Mapping.md)

***

### getInstance()

> **getInstance**(`name`): [`MappingConfigService`](MappingConfigService.md)

Defined in: [src/lib/schema/application/services/config/mappingsConfigService.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingsConfigService.ts#L37)

#### Parameters

##### name

`string`

#### Returns

[`MappingConfigService`](MappingConfigService.md)

***

### load()

> **load**(`value`): `void`

Defined in: [src/lib/schema/application/services/config/mappingsConfigService.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingsConfigService.ts#L11)

#### Parameters

##### value

[`Mapping`](../interfaces/Mapping.md)

#### Returns

`void`
