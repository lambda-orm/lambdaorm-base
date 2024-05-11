[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / DomainConfigService

# Class: DomainConfigService

## Extends

- `DomainConfigServiceBase`\<[`Entity`](../interfaces/Entity.md), [`Property`](../interfaces/Property.md)\>

## Constructors

### new DomainConfigService()

> **new DomainConfigService**(`entities`, `enums`): [`DomainConfigService`](DomainConfigService.md)

#### Parameters

• **entities**: [`Entity`](../interfaces/Entity.md)[]= `[]`

• **enums**: [`Enum`](../interfaces/Enum.md)[]= `[]`

#### Returns

[`DomainConfigService`](DomainConfigService.md)

#### Overrides

`DomainConfigServiceBase<Entity, Property>.constructor`

#### Source

[src/lib/schema/application/services/config/domainConfigService.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigService.ts#L8)

## Properties

### entities

> **entities**: [`Entity`](../interfaces/Entity.md)[]

#### Overrides

`DomainConfigServiceBase.entities`

#### Source

[src/lib/schema/application/services/config/domainConfigService.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigService.ts#L5)

***

### enums

> **enums**: [`Enum`](../interfaces/Enum.md)[]

#### Overrides

`DomainConfigServiceBase.enums`

#### Source

[src/lib/schema/application/services/config/domainConfigService.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigService.ts#L6)

## Methods

### existsProperty()

> **existsProperty**(`entityName`, `name`): `boolean`

#### Parameters

• **entityName**: `string`

• **name**: `string`

#### Returns

`boolean`

#### Inherited from

`DomainConfigServiceBase.existsProperty`

#### Source

[src/lib/schema/application/services/config/domainConfigServiceBase.ts:38](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L38)

***

### getAutoIncrement()

> **getAutoIncrement**(`entityName`): `undefined` \| [`Property`](../interfaces/Property.md)

#### Parameters

• **entityName**: `string`

#### Returns

`undefined` \| [`Property`](../interfaces/Property.md)

#### Inherited from

`DomainConfigServiceBase.getAutoIncrement`

#### Source

[src/lib/schema/application/services/config/domainConfigServiceBase.ts:57](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L57)

***

### getEntity()

> **getEntity**(`name`): `undefined` \| [`Entity`](../interfaces/Entity.md)

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| [`Entity`](../interfaces/Entity.md)

#### Inherited from

`DomainConfigServiceBase.getEntity`

#### Source

[src/lib/schema/application/services/config/domainConfigServiceBase.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L11)

***

### getEnum()

> **getEnum**(`name`): `undefined` \| [`Enum`](../interfaces/Enum.md)

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| [`Enum`](../interfaces/Enum.md)

#### Inherited from

`DomainConfigServiceBase.getEnum`

#### Source

[src/lib/schema/application/services/config/domainConfigServiceBase.ts:23](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L23)

***

### getFieldIds()

> **getFieldIds**(`entityName`): `undefined` \| [`Property`](../interfaces/Property.md)[]

#### Parameters

• **entityName**: `string`

#### Returns

`undefined` \| [`Property`](../interfaces/Property.md)[]

#### Inherited from

`DomainConfigServiceBase.getFieldIds`

#### Source

[src/lib/schema/application/services/config/domainConfigServiceBase.ts:65](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L65)

***

### getForcedEntity()

> **getForcedEntity**(`name`): [`Entity`](../interfaces/Entity.md)

#### Parameters

• **name**: `string`

#### Returns

[`Entity`](../interfaces/Entity.md)

#### Inherited from

`DomainConfigServiceBase.getForcedEntity`

#### Source

[src/lib/schema/application/services/config/domainConfigServiceBase.ts:15](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L15)

***

### getProperty()

> **getProperty**(`entityName`, `name`): [`Property`](../interfaces/Property.md)

#### Parameters

• **entityName**: `string`

• **name**: `string`

#### Returns

[`Property`](../interfaces/Property.md)

#### Inherited from

`DomainConfigServiceBase.getProperty`

#### Source

[src/lib/schema/application/services/config/domainConfigServiceBase.ts:45](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L45)

***

### getRelation()

> **getRelation**(`entity`, `relation`): [`RelationInfo`](../interfaces/RelationInfo.md)

#### Parameters

• **entity**: `string`

• **relation**: `string`

#### Returns

[`RelationInfo`](../interfaces/RelationInfo.md)

#### Inherited from

`DomainConfigServiceBase.getRelation`

#### Source

[src/lib/schema/application/services/config/domainConfigServiceBase.ts:284](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L284)

***

### isChild()

> **isChild**(`entityName`): `boolean`

#### Parameters

• **entityName**: `string`

#### Returns

`boolean`

#### Inherited from

`DomainConfigServiceBase.isChild`

#### Source

[src/lib/schema/application/services/config/domainConfigServiceBase.ts:27](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L27)

***

### listEntities()

> **listEntities**(): `string`[]

#### Returns

`string`[]

#### Inherited from

`DomainConfigServiceBase.listEntities`

#### Source

[src/lib/schema/application/services/config/domainConfigServiceBase.ts:76](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L76)

***

### sortByDependencies()

> **sortByDependencies**(`entities`): `string`[]

Sort a list of entities according to their dependencies

#### Parameters

• **entities**: `string`[]= `[]`

entities to order

#### Returns

`string`[]

returns the sorted entities

#### Inherited from

`DomainConfigServiceBase.sortByDependencies`

#### Source

[src/lib/schema/application/services/config/domainConfigServiceBase.ts:139](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L139)

***

### sortByRelations()

> **sortByRelations**(`mainEntities`, `allEntities`): `string`[]

Sort a list of entities according to their relationships

#### Parameters

• **mainEntities**: `string`[]

• **allEntities**: `string`[]

entities to order

#### Returns

`string`[]

returns the sorted entities

#### Inherited from

`DomainConfigServiceBase.sortByRelations`

#### Source

[src/lib/schema/application/services/config/domainConfigServiceBase.ts:85](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L85)
