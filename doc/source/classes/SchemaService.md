[Lambda ORM](../README.md) / SchemaService

# Class: SchemaService

## Table of contents

### Constructors

- [constructor](SchemaService.md#constructor)

### Methods

- [addEntityTypes](SchemaService.md#addentitytypes)
- [newApplication](SchemaService.md#newapplication)
- [newDomain](SchemaService.md#newdomain)
- [newInfrastructure](SchemaService.md#newinfrastructure)
- [newPathsApp](SchemaService.md#newpathsapp)
- [newSchema](SchemaService.md#newschema)

## Constructors

### constructor

• **new SchemaService**(`helper`): [`SchemaService`](SchemaService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `helper` | `H3lp` |

#### Returns

[`SchemaService`](SchemaService.md)

#### Defined in

[src/lib/schema/application/services/schemaService.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/eca2d8e/src/lib/schema/application/services/schemaService.ts#L10)

## Methods

### addEntityTypes

▸ **addEntityTypes**(`schema`, `types`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |
| `types` | [`EntityType`](../interfaces/EntityType.md)[] |

#### Returns

`void`

#### Defined in

[src/lib/schema/application/services/schemaService.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/eca2d8e/src/lib/schema/application/services/schemaService.ts#L32)

___

### newApplication

▸ **newApplication**(): [`ApplicationSchema`](../interfaces/ApplicationSchema.md)

#### Returns

[`ApplicationSchema`](../interfaces/ApplicationSchema.md)

#### Defined in

[src/lib/schema/application/services/schemaService.ts:24](https://github.com/lambda-orm/lambdaorm-base/blob/eca2d8e/src/lib/schema/application/services/schemaService.ts#L24)

___

### newDomain

▸ **newDomain**(): [`DomainSchema`](../interfaces/DomainSchema.md)

#### Returns

[`DomainSchema`](../interfaces/DomainSchema.md)

#### Defined in

[src/lib/schema/application/services/schemaService.ts:20](https://github.com/lambda-orm/lambdaorm-base/blob/eca2d8e/src/lib/schema/application/services/schemaService.ts#L20)

___

### newInfrastructure

▸ **newInfrastructure**(): [`InfrastructureSchema`](../interfaces/InfrastructureSchema.md)

#### Returns

[`InfrastructureSchema`](../interfaces/InfrastructureSchema.md)

#### Defined in

[src/lib/schema/application/services/schemaService.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/eca2d8e/src/lib/schema/application/services/schemaService.ts#L16)

___

### newPathsApp

▸ **newPathsApp**(): [`AppPathsConfig`](../interfaces/AppPathsConfig.md)

#### Returns

[`AppPathsConfig`](../interfaces/AppPathsConfig.md)

#### Defined in

[src/lib/schema/application/services/schemaService.ts:28](https://github.com/lambda-orm/lambdaorm-base/blob/eca2d8e/src/lib/schema/application/services/schemaService.ts#L28)

___

### newSchema

▸ **newSchema**(): [`Schema`](../interfaces/Schema.md)

#### Returns

[`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/services/schemaService.ts:12](https://github.com/lambda-orm/lambdaorm-base/blob/eca2d8e/src/lib/schema/application/services/schemaService.ts#L12)
