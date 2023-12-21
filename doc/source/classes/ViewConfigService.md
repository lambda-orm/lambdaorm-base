[Lambda ORM](../README.md) / ViewConfigService

# Class: ViewConfigService

## Table of contents

### Constructors

- [constructor](ViewConfigService.md#constructor)

### Accessors

- [entities](ViewConfigService.md#entities)
- [name](ViewConfigService.md#name)

### Methods

- [excludeEntity](ViewConfigService.md#excludeentity)
- [get](ViewConfigService.md#get)
- [getEntity](ViewConfigService.md#getentity)
- [getProperty](ViewConfigService.md#getproperty)
- [set](ViewConfigService.md#set)

## Constructors

### constructor

• **new ViewConfigService**(`view`): [`ViewConfigService`](ViewConfigService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View`](../interfaces/View.md) |

#### Returns

[`ViewConfigService`](ViewConfigService.md)

#### Defined in

src/lib/schema/application/services/config/viewConfigService.ts:5

## Accessors

### entities

• `get` **entities**(): [`EntityView`](../interfaces/EntityView.md)[]

#### Returns

[`EntityView`](../interfaces/EntityView.md)[]

#### Defined in

src/lib/schema/application/services/config/viewConfigService.ts:21

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

src/lib/schema/application/services/config/viewConfigService.ts:9

## Methods

### excludeEntity

▸ **excludeEntity**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

src/lib/schema/application/services/config/viewConfigService.ts:37

___

### get

▸ **get**(): [`View`](../interfaces/View.md)

#### Returns

[`View`](../interfaces/View.md)

#### Defined in

src/lib/schema/application/services/config/viewConfigService.ts:13

___

### getEntity

▸ **getEntity**(`name`): `undefined` \| [`EntityView`](../interfaces/EntityView.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`EntityView`](../interfaces/EntityView.md)

#### Defined in

src/lib/schema/application/services/config/viewConfigService.ts:25

___

### getProperty

▸ **getProperty**(`entityName`, `name`): `undefined` \| [`PropertyView`](../interfaces/PropertyView.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityName` | `string` |
| `name` | `string` |

#### Returns

`undefined` \| [`PropertyView`](../interfaces/PropertyView.md)

#### Defined in

src/lib/schema/application/services/config/viewConfigService.ts:29

___

### set

▸ **set**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`View`](../interfaces/View.md) |

#### Returns

`void`

#### Defined in

src/lib/schema/application/services/config/viewConfigService.ts:17
