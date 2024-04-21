[Lambda ORM](../README.md) / MatchSchema

# Class: MatchSchema

## Table of contents

### Constructors

- [constructor](MatchSchema.md#constructor)

### Methods

- [match](MatchSchema.md#match)

## Constructors

### constructor

• **new MatchSchema**(`schemaService`, `helper`): [`MatchSchema`](MatchSchema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaService` | `SchemaService` |
| `helper` | [`SchemaHelper`](SchemaHelper.md) |

#### Returns

[`MatchSchema`](MatchSchema.md)

#### Defined in

[src/lib/schema/application/useCases/match.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/d0a857cc1bc4a7a4e62ea32e87b10c56fb9eaf37/src/lib/schema/application/useCases/match.ts#L7)

## Methods

### match

▸ **match**(`schema`, `mappings`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../interfaces/Schema.md) |
| `mappings` | [`Mapping`](../interfaces/Mapping.md)[] |
| `options` | [`MatchOptions`](../interfaces/MatchOptions.md) |

#### Returns

`void`

#### Defined in

[src/lib/schema/application/useCases/match.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/d0a857cc1bc4a7a4e62ea32e87b10c56fb9eaf37/src/lib/schema/application/useCases/match.ts#L11)
