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

[src/lib/schema/application/useCases/match.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/f05639463d61009f8bbb0506eec30106c529593e/src/lib/schema/application/useCases/match.ts#L7)

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

[src/lib/schema/application/useCases/match.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/f05639463d61009f8bbb0506eec30106c529593e/src/lib/schema/application/useCases/match.ts#L11)
