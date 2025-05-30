[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / DomainConfigService

# Class: DomainConfigService

Defined in: [src/lib/schema/application/services/config/domainConfigService.ts:4](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigService.ts#L4)

## Extends

- `DomainConfigServiceBase`\<[`Entity`](../interfaces/Entity.md), [`Property`](../interfaces/Property.md)\>

## Constructors

### Constructor

> **new DomainConfigService**(`entities`, `enums`): `DomainConfigService`

Defined in: [src/lib/schema/application/services/config/domainConfigService.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigService.ts#L8)

#### Parameters

##### entities

[`Entity`](../interfaces/Entity.md)[] = `[]`

##### enums

[`Enum`](../interfaces/Enum.md)[] = `[]`

#### Returns

`DomainConfigService`

#### Overrides

`DomainConfigServiceBase<Entity, Property>.constructor`

## Properties

### entities

> **entities**: [`Entity`](../interfaces/Entity.md)[]

Defined in: [src/lib/schema/application/services/config/domainConfigService.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigService.ts#L5)

#### Overrides

`DomainConfigServiceBase.entities`

***

### enums

> **enums**: [`Enum`](../interfaces/Enum.md)[]

Defined in: [src/lib/schema/application/services/config/domainConfigService.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigService.ts#L6)

#### Overrides

`DomainConfigServiceBase.enums`

## Methods

### existsProperty()

> **existsProperty**(`entityName`, `name`): `boolean`

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:38](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L38)

#### Parameters

##### entityName

`string`

##### name

`string`

#### Returns

`boolean`

#### Inherited from

`DomainConfigServiceBase.existsProperty`

***

### getAutoIncrement()

> **getAutoIncrement**(`entityName`): `undefined` \| [`Property`](../interfaces/Property.md)

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:57](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L57)

#### Parameters

##### entityName

`string`

#### Returns

`undefined` \| [`Property`](../interfaces/Property.md)

#### Inherited from

`DomainConfigServiceBase.getAutoIncrement`

***

### getEntity()

> **getEntity**(`name`): `undefined` \| [`Entity`](../interfaces/Entity.md)

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L11)

#### Parameters

##### name

`string`

#### Returns

`undefined` \| [`Entity`](../interfaces/Entity.md)

#### Inherited from

`DomainConfigServiceBase.getEntity`

***

### getEnum()

> **getEnum**(`name`): `undefined` \| [`Enum`](../interfaces/Enum.md)

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:23](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L23)

#### Parameters

##### name

`string`

#### Returns

`undefined` \| [`Enum`](../interfaces/Enum.md)

#### Inherited from

`DomainConfigServiceBase.getEnum`

***

### getFieldIds()

> **getFieldIds**(`entityName`): `undefined` \| [`Property`](../interfaces/Property.md)[]

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:65](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L65)

#### Parameters

##### entityName

`string`

#### Returns

`undefined` \| [`Property`](../interfaces/Property.md)[]

#### Inherited from

`DomainConfigServiceBase.getFieldIds`

***

### getForcedEntity()

> **getForcedEntity**(`name`): [`Entity`](../interfaces/Entity.md)

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:15](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L15)

#### Parameters

##### name

`string`

#### Returns

[`Entity`](../interfaces/Entity.md)

#### Inherited from

`DomainConfigServiceBase.getForcedEntity`

***

### getProperty()

> **getProperty**(`entityName`, `name`): [`Property`](../interfaces/Property.md)

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:45](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L45)

#### Parameters

##### entityName

`string`

##### name

`string`

#### Returns

[`Property`](../interfaces/Property.md)

#### Inherited from

`DomainConfigServiceBase.getProperty`

***

### getRelation()

> **getRelation**(`entity`, `relation`): [`RelationInfo`](../interfaces/RelationInfo.md)

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:284](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L284)

#### Parameters

##### entity

`string`

##### relation

`string`

#### Returns

[`RelationInfo`](../interfaces/RelationInfo.md)

#### Inherited from

`DomainConfigServiceBase.getRelation`

***

### isChild()

> **isChild**(`entityName`): `boolean`

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:27](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L27)

#### Parameters

##### entityName

`string`

#### Returns

`boolean`

#### Inherited from

`DomainConfigServiceBase.isChild`

***

### listEntities()

> **listEntities**(): `string`[]

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:76](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L76)

#### Returns

`string`[]

#### Inherited from

`DomainConfigServiceBase.listEntities`

***

### sortByDependencies()

> **sortByDependencies**(`entities`): `string`[]

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:139](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L139)

Sort a list of entities according to their dependencies

#### Parameters

##### entities

`string`[] = `[]`

entities to order

#### Returns

`string`[]

returns the sorted entities

#### Inherited from

`DomainConfigServiceBase.sortByDependencies`

***

### sortByRelations()

> **sortByRelations**(`mainEntities`, `allEntities`): `string`[]

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:85](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L85)

Sort a list of entities according to their relationships

#### Parameters

##### mainEntities

`string`[]

##### allEntities

`string`[]

entities to order

#### Returns

`string`[]

returns the sorted entities

#### Inherited from

`DomainConfigServiceBase.sortByRelations`
