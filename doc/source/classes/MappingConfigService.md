[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / MappingConfigService

# Class: MappingConfigService

Defined in: [src/lib/schema/application/services/config/mappingConfigService.ts:4](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingConfigService.ts#L4)

## Extends

- `DomainConfigServiceBase`\<[`EntityMapping`](../interfaces/EntityMapping.md), [`PropertyMapping`](../interfaces/PropertyMapping.md)\>

## Constructors

### Constructor

> **new MappingConfigService**(`mapping`, `enums`): `MappingConfigService`

Defined in: [src/lib/schema/application/services/config/mappingConfigService.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingConfigService.ts#L7)

#### Parameters

##### mapping

[`Mapping`](../interfaces/Mapping.md)

##### enums

[`Enum`](../interfaces/Enum.md)[] = `[]`

#### Returns

`MappingConfigService`

#### Overrides

`DomainConfigServiceBase<EntityMapping, PropertyMapping>.constructor`

## Properties

### enums

> **enums**: [`Enum`](../interfaces/Enum.md)[]

Defined in: [src/lib/schema/application/services/config/mappingConfigService.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingConfigService.ts#L6)

#### Overrides

`DomainConfigServiceBase.enums`

## Accessors

### entities

#### Get Signature

> **get** **entities**(): [`EntityMapping`](../interfaces/EntityMapping.md)[]

Defined in: [src/lib/schema/application/services/config/mappingConfigService.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingConfigService.ts#L29)

##### Returns

[`EntityMapping`](../interfaces/EntityMapping.md)[]

#### Overrides

`DomainConfigServiceBase.entities`

***

### format

#### Get Signature

> **get** **format**(): `undefined` \| [`FormatMapping`](../interfaces/FormatMapping.md)

Defined in: [src/lib/schema/application/services/config/mappingConfigService.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingConfigService.ts#L17)

##### Returns

`undefined` \| [`FormatMapping`](../interfaces/FormatMapping.md)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/schema/application/services/config/mappingConfigService.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingConfigService.ts#L13)

##### Returns

`string`

## Methods

### entityMapping()

> **entityMapping**(`entityName`): `undefined` \| `string`

Defined in: [src/lib/schema/application/services/config/mappingConfigService.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingConfigService.ts#L33)

#### Parameters

##### entityName

`string`

#### Returns

`undefined` \| `string`

***

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

### get()

> **get**(): [`Mapping`](../interfaces/Mapping.md)

Defined in: [src/lib/schema/application/services/config/mappingConfigService.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingConfigService.ts#L21)

#### Returns

[`Mapping`](../interfaces/Mapping.md)

***

### getAutoIncrement()

> **getAutoIncrement**(`entityName`): `undefined` \| [`PropertyMapping`](../interfaces/PropertyMapping.md)

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:57](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L57)

#### Parameters

##### entityName

`string`

#### Returns

`undefined` \| [`PropertyMapping`](../interfaces/PropertyMapping.md)

#### Inherited from

`DomainConfigServiceBase.getAutoIncrement`

***

### getEntity()

> **getEntity**(`name`): `undefined` \| [`EntityMapping`](../interfaces/EntityMapping.md)

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L11)

#### Parameters

##### name

`string`

#### Returns

`undefined` \| [`EntityMapping`](../interfaces/EntityMapping.md)

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

> **getFieldIds**(`entityName`): `undefined` \| [`PropertyMapping`](../interfaces/PropertyMapping.md)[]

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:65](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L65)

#### Parameters

##### entityName

`string`

#### Returns

`undefined` \| [`PropertyMapping`](../interfaces/PropertyMapping.md)[]

#### Inherited from

`DomainConfigServiceBase.getFieldIds`

***

### getForcedEntity()

> **getForcedEntity**(`name`): [`EntityMapping`](../interfaces/EntityMapping.md)

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:15](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L15)

#### Parameters

##### name

`string`

#### Returns

[`EntityMapping`](../interfaces/EntityMapping.md)

#### Inherited from

`DomainConfigServiceBase.getForcedEntity`

***

### getProperty()

> **getProperty**(`entityName`, `name`): [`PropertyMapping`](../interfaces/PropertyMapping.md)

Defined in: [src/lib/schema/application/services/config/domainConfigServiceBase.ts:45](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L45)

#### Parameters

##### entityName

`string`

##### name

`string`

#### Returns

[`PropertyMapping`](../interfaces/PropertyMapping.md)

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

### set()

> **set**(`value`): `void`

Defined in: [src/lib/schema/application/services/config/mappingConfigService.ts:25](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/application/services/config/mappingConfigService.ts#L25)

#### Parameters

##### value

[`Mapping`](../interfaces/Mapping.md)

#### Returns

`void`

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
