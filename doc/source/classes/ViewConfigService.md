[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / ViewConfigService

# Class: ViewConfigService

Defined in: [src/lib/schema/application/services/config/viewConfigService.ts:3](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/viewConfigService.ts#L3)

## Constructors

### Constructor

> **new ViewConfigService**(`view`): `ViewConfigService`

Defined in: [src/lib/schema/application/services/config/viewConfigService.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/viewConfigService.ts#L5)

#### Parameters

##### view

[`View`](../interfaces/View.md)

#### Returns

`ViewConfigService`

## Accessors

### entities

#### Get Signature

> **get** **entities**(): [`EntityView`](../interfaces/EntityView.md)[]

Defined in: [src/lib/schema/application/services/config/viewConfigService.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/viewConfigService.ts#L21)

##### Returns

[`EntityView`](../interfaces/EntityView.md)[]

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/schema/application/services/config/viewConfigService.ts:9](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/viewConfigService.ts#L9)

##### Returns

`string`

## Methods

### excludeEntity()

> **excludeEntity**(`name`): `boolean`

Defined in: [src/lib/schema/application/services/config/viewConfigService.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/viewConfigService.ts#L37)

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### get()

> **get**(): [`View`](../interfaces/View.md)

Defined in: [src/lib/schema/application/services/config/viewConfigService.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/viewConfigService.ts#L13)

#### Returns

[`View`](../interfaces/View.md)

***

### getEntity()

> **getEntity**(`name`): `undefined` \| [`EntityView`](../interfaces/EntityView.md)

Defined in: [src/lib/schema/application/services/config/viewConfigService.ts:25](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/viewConfigService.ts#L25)

#### Parameters

##### name

`string`

#### Returns

`undefined` \| [`EntityView`](../interfaces/EntityView.md)

***

### getProperty()

> **getProperty**(`entityName`, `name`): `undefined` \| [`PropertyView`](../interfaces/PropertyView.md)

Defined in: [src/lib/schema/application/services/config/viewConfigService.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/viewConfigService.ts#L29)

#### Parameters

##### entityName

`string`

##### name

`string`

#### Returns

`undefined` \| [`PropertyView`](../interfaces/PropertyView.md)

***

### set()

> **set**(`value`): `void`

Defined in: [src/lib/schema/application/services/config/viewConfigService.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/viewConfigService.ts#L17)

#### Parameters

##### value

[`View`](../interfaces/View.md)

#### Returns

`void`
