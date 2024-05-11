[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / MappingConfigService

# Class: MappingConfigService

## Extends

- `DomainConfigServiceBase`\<[`EntityMapping`](../interfaces/EntityMapping.md), [`PropertyMapping`](../interfaces/PropertyMapping.md)\>

## Constructors

### new MappingConfigService()

> **new MappingConfigService**(`mapping`, `enums`): [`MappingConfigService`](MappingConfigService.md)

#### Parameters

• **mapping**: [`Mapping`](../interfaces/Mapping.md)

• **enums**: [`Enum`](../interfaces/Enum.md)[]= `[]`

#### Returns

[`MappingConfigService`](MappingConfigService.md)

#### Overrides

`DomainConfigServiceBase<EntityMapping, PropertyMapping>.constructor`

#### Source

[src/lib/schema/application/services/config/mappingConfigService.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/mappingConfigService.ts#L7)

## Properties

### enums

> **enums**: [`Enum`](../interfaces/Enum.md)[]

#### Overrides

`DomainConfigServiceBase.enums`

#### Source

[src/lib/schema/application/services/config/mappingConfigService.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/mappingConfigService.ts#L6)

## Accessors

### entities

> `get` **entities**(): [`EntityMapping`](../interfaces/EntityMapping.md)[]

#### Returns

[`EntityMapping`](../interfaces/EntityMapping.md)[]

#### Source

[src/lib/schema/application/services/config/mappingConfigService.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/mappingConfigService.ts#L29)

***

### format

> `get` **format**(): `undefined` \| [`FormatMapping`](../interfaces/FormatMapping.md)

#### Returns

`undefined` \| [`FormatMapping`](../interfaces/FormatMapping.md)

#### Source

[src/lib/schema/application/services/config/mappingConfigService.ts:17](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/mappingConfigService.ts#L17)

***

### name

> `get` **name**(): `string`

#### Returns

`string`

#### Source

[src/lib/schema/application/services/config/mappingConfigService.ts:13](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/mappingConfigService.ts#L13)

## Methods

### entityMapping()

> **entityMapping**(`entityName`): `undefined` \| `string`

#### Parameters

• **entityName**: `string`

#### Returns

`undefined` \| `string`

#### Source

[src/lib/schema/application/services/config/mappingConfigService.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/mappingConfigService.ts#L33)

***

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

### get()

> **get**(): [`Mapping`](../interfaces/Mapping.md)

#### Returns

[`Mapping`](../interfaces/Mapping.md)

#### Source

[src/lib/schema/application/services/config/mappingConfigService.ts:21](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/mappingConfigService.ts#L21)

***

### getAutoIncrement()

> **getAutoIncrement**(`entityName`): `undefined` \| [`PropertyMapping`](../interfaces/PropertyMapping.md)

#### Parameters

• **entityName**: `string`

#### Returns

`undefined` \| [`PropertyMapping`](../interfaces/PropertyMapping.md)

#### Inherited from

`DomainConfigServiceBase.getAutoIncrement`

#### Source

[src/lib/schema/application/services/config/domainConfigServiceBase.ts:57](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L57)

***

### getEntity()

> **getEntity**(`name`): `undefined` \| [`EntityMapping`](../interfaces/EntityMapping.md)

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| [`EntityMapping`](../interfaces/EntityMapping.md)

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

> **getFieldIds**(`entityName`): `undefined` \| [`PropertyMapping`](../interfaces/PropertyMapping.md)[]

#### Parameters

• **entityName**: `string`

#### Returns

`undefined` \| [`PropertyMapping`](../interfaces/PropertyMapping.md)[]

#### Inherited from

`DomainConfigServiceBase.getFieldIds`

#### Source

[src/lib/schema/application/services/config/domainConfigServiceBase.ts:65](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L65)

***

### getForcedEntity()

> **getForcedEntity**(`name`): [`EntityMapping`](../interfaces/EntityMapping.md)

#### Parameters

• **name**: `string`

#### Returns

[`EntityMapping`](../interfaces/EntityMapping.md)

#### Inherited from

`DomainConfigServiceBase.getForcedEntity`

#### Source

[src/lib/schema/application/services/config/domainConfigServiceBase.ts:15](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/domainConfigServiceBase.ts#L15)

***

### getProperty()

> **getProperty**(`entityName`, `name`): [`PropertyMapping`](../interfaces/PropertyMapping.md)

#### Parameters

• **entityName**: `string`

• **name**: `string`

#### Returns

[`PropertyMapping`](../interfaces/PropertyMapping.md)

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

### set()

> **set**(`value`): `void`

#### Parameters

• **value**: [`Mapping`](../interfaces/Mapping.md)

#### Returns

`void`

#### Source

[src/lib/schema/application/services/config/mappingConfigService.ts:25](https://github.com/lambda-orm/lambdaorm-base/blob/f5bdfd5d7ef4bf9d8223ee81080c8ed65a6bb693/src/lib/schema/application/services/config/mappingConfigService.ts#L25)

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
