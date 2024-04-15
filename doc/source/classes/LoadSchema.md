[Lambda ORM](../README.md) / LoadSchema

# Class: LoadSchema

## Table of contents

### Constructors

- [constructor](LoadSchema.md#constructor)

### Methods

- [load](LoadSchema.md#load)

## Constructors

### constructor

• **new LoadSchema**(`source`, `domain`, `mapping`, `stage`, `view`, `helper`): [`LoadSchema`](LoadSchema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`DataSourceConfigService`](DataSourceConfigService.md) |
| `domain` | [`DomainConfigService`](DomainConfigService.md) |
| `mapping` | [`MappingsConfigService`](MappingsConfigService.md) |
| `stage` | [`StageConfigService`](StageConfigService.md) |
| `view` | [`ViewsConfigService`](ViewsConfigService.md) |
| `helper` | [`SchemaH3lp`](SchemaH3lp.md) |

#### Returns

[`LoadSchema`](LoadSchema.md)

#### Defined in

[src/lib/schema/application/useCases/load.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/useCases/load.ts#L11)

## Methods

### load

▸ **load**(`source`): [`Schema`](../interfaces/Schema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`Schema`](../interfaces/Schema.md) |

#### Returns

[`Schema`](../interfaces/Schema.md)

#### Defined in

[src/lib/schema/application/useCases/load.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/fe2f43e578a7a5b6b421dae2d71341dfb5a9738e/src/lib/schema/application/useCases/load.ts#L18)
