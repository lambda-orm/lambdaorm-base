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
| `helper` | `H3lp` |

#### Returns

[`MatchSchema`](MatchSchema.md)

#### Defined in

[src/lib/schema/application/useCases/match.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/8617cc5/src/lib/schema/application/useCases/match.ts#L7)

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

[src/lib/schema/application/useCases/match.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/8617cc5/src/lib/schema/application/useCases/match.ts#L11)