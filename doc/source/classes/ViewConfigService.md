[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / ViewConfigService

# Class: ViewConfigService

## Constructors

### new ViewConfigService()

> **new ViewConfigService**(`view`): [`ViewConfigService`](ViewConfigService.md)

#### Parameters

• **view**: [`View`](../interfaces/View.md)

#### Returns

[`ViewConfigService`](ViewConfigService.md)

#### Source

[src/lib/schema/application/services/config/viewConfigService.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/b57bb1d116951848254ba54a2a732f51efc20654/src/lib/schema/application/services/config/viewConfigService.ts#L5)

## Accessors

### entities

> `get` **entities**(): [`EntityView`](../interfaces/EntityView.md)[]

#### Returns

[`EntityView`](../interfaces/EntityView.md)[]

#### Source

[src/lib/schema/application/services/config/viewConfigService.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/b57bb1d116951848254ba54a2a732f51efc20654/src/lib/schema/application/services/config/viewConfigService.ts#L21)

***

### name

> `get` **name**(): `string`

#### Returns

`string`

#### Source

[src/lib/schema/application/services/config/viewConfigService.ts:9](https://github.com/lambda-orm/lambdaorm-base/blob/b57bb1d116951848254ba54a2a732f51efc20654/src/lib/schema/application/services/config/viewConfigService.ts#L9)

## Methods

### excludeEntity()

> **excludeEntity**(`name`): `boolean`

#### Parameters

• **name**: `string`

#### Returns

`boolean`

#### Source

[src/lib/schema/application/services/config/viewConfigService.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/b57bb1d116951848254ba54a2a732f51efc20654/src/lib/schema/application/services/config/viewConfigService.ts#L37)

***

### get()

> **get**(): [`View`](../interfaces/View.md)

#### Returns

[`View`](../interfaces/View.md)

#### Source

[src/lib/schema/application/services/config/viewConfigService.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/b57bb1d116951848254ba54a2a732f51efc20654/src/lib/schema/application/services/config/viewConfigService.ts#L13)

***

### getEntity()

> **getEntity**(`name`): `undefined` \| [`EntityView`](../interfaces/EntityView.md)

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| [`EntityView`](../interfaces/EntityView.md)

#### Source

[src/lib/schema/application/services/config/viewConfigService.ts:25](https://github.com/lambda-orm/lambdaorm-base/blob/b57bb1d116951848254ba54a2a732f51efc20654/src/lib/schema/application/services/config/viewConfigService.ts#L25)

***

### getProperty()

> **getProperty**(`entityName`, `name`): `undefined` \| [`PropertyView`](../interfaces/PropertyView.md)

#### Parameters

• **entityName**: `string`

• **name**: `string`

#### Returns

`undefined` \| [`PropertyView`](../interfaces/PropertyView.md)

#### Source

[src/lib/schema/application/services/config/viewConfigService.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/b57bb1d116951848254ba54a2a732f51efc20654/src/lib/schema/application/services/config/viewConfigService.ts#L29)

***

### set()

> **set**(`value`): `void`

#### Parameters

• **value**: [`View`](../interfaces/View.md)

#### Returns

`void`

#### Source

[src/lib/schema/application/services/config/viewConfigService.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/b57bb1d116951848254ba54a2a732f51efc20654/src/lib/schema/application/services/config/viewConfigService.ts#L17)
