[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / LoadSchema

# Class: LoadSchema

## Constructors

### new LoadSchema()

> **new LoadSchema**(`source`, `domain`, `mapping`, `stage`, `view`, `helper`): [`LoadSchema`](LoadSchema.md)

#### Parameters

• **source**: [`DataSourceConfigService`](DataSourceConfigService.md)

• **domain**: [`DomainConfigService`](DomainConfigService.md)

• **mapping**: [`MappingsConfigService`](MappingsConfigService.md)

• **stage**: [`StageConfigService`](StageConfigService.md)

• **view**: [`ViewsConfigService`](ViewsConfigService.md)

• **helper**: [`OrmBaseH3lp`](OrmBaseH3lp.md)

#### Returns

[`LoadSchema`](LoadSchema.md)

#### Source

[src/lib/schema/application/useCases/load.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/application/useCases/load.ts#L11)

## Methods

### load()

> **load**(`source`): [`Schema`](../interfaces/Schema.md)

#### Parameters

• **source**: [`Schema`](../interfaces/Schema.md)

#### Returns

[`Schema`](../interfaces/Schema.md)

#### Source

[src/lib/schema/application/useCases/load.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/application/useCases/load.ts#L18)
