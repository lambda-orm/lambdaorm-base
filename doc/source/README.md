Lambda ORM

# Lambda ORM

## Table of contents

### Enumerations

- [Dialect](enums/Dialect.md)
- [LogLevel](enums/LogLevel.md)
- [ObservableAction](enums/ObservableAction.md)
- [RelationType](enums/RelationType.md)
- [SentenceAction](enums/SentenceAction.md)
- [SentenceCrudAction](enums/SentenceCrudAction.md)

### Classes

- [BulkDelete](classes/BulkDelete.md)
- [BulkInsert](classes/BulkInsert.md)
- [BulkMerge](classes/BulkMerge.md)
- [Clause](classes/Clause.md)
- [Constant](classes/Constant.md)
- [CreateEntitiesService](classes/CreateEntitiesService.md)
- [CreateSchema](classes/CreateSchema.md)
- [Data](classes/Data.md)
- [DataSourceConfigService](classes/DataSourceConfigService.md)
- [Delete](classes/Delete.md)
- [DomainConfigService](classes/DomainConfigService.md)
- [Field](classes/Field.md)
- [Filter](classes/Filter.md)
- [FilterAction](classes/FilterAction.md)
- [FilterClauses](classes/FilterClauses.md)
- [FilterIncludeClauses](classes/FilterIncludeClauses.md)
- [From](classes/From.md)
- [GetSchemaSchema](classes/GetSchemaSchema.md)
- [GroupBy](classes/GroupBy.md)
- [Having](classes/Having.md)
- [HavingClauses](classes/HavingClauses.md)
- [IncludeAction](classes/IncludeAction.md)
- [IncludeClauses](classes/IncludeClauses.md)
- [Insert](classes/Insert.md)
- [Join](classes/Join.md)
- [LoadSchema](classes/LoadSchema.md)
- [Logger](classes/Logger.md)
- [LoggerBuilder](classes/LoggerBuilder.md)
- [Map](classes/Map.md)
- [Map2Clauses](classes/Map2Clauses.md)
- [MapClauses](classes/MapClauses.md)
- [MappingConfigService](classes/MappingConfigService.md)
- [MappingsConfigService](classes/MappingsConfigService.md)
- [MatchSchema](classes/MatchSchema.md)
- [MethodNotImplemented](classes/MethodNotImplemented.md)
- [ModificableClauses](classes/ModificableClauses.md)
- [NotImplemented](classes/NotImplemented.md)
- [Page](classes/Page.md)
- [PageClauses](classes/PageClauses.md)
- [QueryAction](classes/QueryAction.md)
- [Queryable](classes/Queryable.md)
- [RouteService](classes/RouteService.md)
- [SchemaError](classes/SchemaError.md)
- [SchemaExtender](classes/SchemaExtender.md)
- [SchemaFacade](classes/SchemaFacade.md)
- [SchemaFacadeBuilder](classes/SchemaFacadeBuilder.md)
- [SchemaH3lp](classes/SchemaH3lp.md)
- [SchemaHelper](classes/SchemaHelper.md)
- [SchemaState](classes/SchemaState.md)
- [SchemaStateBuilder](classes/SchemaStateBuilder.md)
- [Sentence](classes/Sentence.md)
- [SentenceInclude](classes/SentenceInclude.md)
- [SintaxisError](classes/SintaxisError.md)
- [Sort](classes/Sort.md)
- [StageConfigService](classes/StageConfigService.md)
- [Update](classes/Update.md)
- [UpdateSchema](classes/UpdateSchema.md)
- [Upsert](classes/Upsert.md)
- [ViewConfigService](classes/ViewConfigService.md)
- [ViewsConfigService](classes/ViewsConfigService.md)

### Interfaces

- [AppPathsConfig](interfaces/AppPathsConfig.md)
- [ApplicationSchema](interfaces/ApplicationSchema.md)
- [Behavior](interfaces/Behavior.md)
- [ClauseInfo](interfaces/ClauseInfo.md)
- [Constraint](interfaces/Constraint.md)
- [ContextInfo](interfaces/ContextInfo.md)
- [Dependent](interfaces/Dependent.md)
- [DomainSchema](interfaces/DomainSchema.md)
- [Entity](interfaces/Entity.md)
- [EntityMapping](interfaces/EntityMapping.md)
- [EntityView](interfaces/EntityView.md)
- [Enum](interfaces/Enum.md)
- [EnumValue](interfaces/EnumValue.md)
- [ExpressionActions](interfaces/ExpressionActions.md)
- [FormatMapping](interfaces/FormatMapping.md)
- [IFileSchemaService](interfaces/IFileSchemaService.md)
- [IRelation](interfaces/IRelation.md)
- [IRepository](interfaces/IRepository.md)
- [IRouteService](interfaces/IRouteService.md)
- [ISentenceBuilder](interfaces/ISentenceBuilder.md)
- [ISentenceCompleteBuilder](interfaces/ISentenceCompleteBuilder.md)
- [Index](interfaces/Index.md)
- [InfrastructureSchema](interfaces/InfrastructureSchema.md)
- [ListenerConfig](interfaces/ListenerConfig.md)
- [Mapping](interfaces/Mapping.md)
- [MappingConfig](interfaces/MappingConfig.md)
- [MatchOptions](interfaces/MatchOptions.md)
- [Metadata](interfaces/Metadata.md)
- [MetadataConstraint](interfaces/MetadataConstraint.md)
- [MetadataModel](interfaces/MetadataModel.md)
- [MetadataParameter](interfaces/MetadataParameter.md)
- [ModelConfig](interfaces/ModelConfig.md)
- [ModifyAllClauses](interfaces/ModifyAllClauses.md)
- [ModifyClauses](interfaces/ModifyClauses.md)
- [ModifyFilterClauses](interfaces/ModifyFilterClauses.md)
- [ModifyIncludeClauses](interfaces/ModifyIncludeClauses.md)
- [Property](interfaces/Property.md)
- [PropertyMapping](interfaces/PropertyMapping.md)
- [PropertyView](interfaces/PropertyView.md)
- [QueryOptions](interfaces/QueryOptions.md)
- [QueryPlan](interfaces/QueryPlan.md)
- [Relation](interfaces/Relation.md)
- [RelationIncludeClauses](interfaces/RelationIncludeClauses.md)
- [RelationInfo](interfaces/RelationInfo.md)
- [RelationMapClauses](interfaces/RelationMapClauses.md)
- [Schema](interfaces/Schema.md)
- [SchemaData](interfaces/SchemaData.md)
- [SchemaEntityData](interfaces/SchemaEntityData.md)
- [SchemaInfo](interfaces/SchemaInfo.md)
- [SentenceSerializer](interfaces/SentenceSerializer.md)
- [Source](interfaces/Source.md)
- [SourceRule](interfaces/SourceRule.md)
- [Stage](interfaces/Stage.md)
- [TaskConfig](interfaces/TaskConfig.md)
- [View](interfaces/View.md)

### Type Aliases

- [ManyToOne](README.md#manytoone)
- [OneToMany](README.md#onetomany)
- [OneToOne](README.md#onetoone)

### Variables

- [DIALECT\_DEFAULT](README.md#dialect_default)

### Functions

- [abs](README.md#abs)
- [acos](README.md#acos)
- [addDay](README.md#addday)
- [addHours](README.md#addhours)
- [addMinutes](README.md#addminutes)
- [addMonth](README.md#addmonth)
- [addSeconds](README.md#addseconds)
- [addTime](README.md#addtime)
- [addYear](README.md#addyear)
- [as](README.md#as)
- [asc](README.md#asc)
- [asin](README.md#asin)
- [atan](README.md#atan)
- [atan2](README.md#atan2)
- [avg](README.md#avg)
- [between](README.md#between)
- [ceil](README.md#ceil)
- [chr](README.md#chr)
- [concat](README.md#concat)
- [cos](README.md#cos)
- [cosh](README.md#cosh)
- [count](README.md#count)
- [curTime](README.md#curtime)
- [date](README.md#date)
- [dateDiff](README.md#datediff)
- [dateTime](README.md#datetime)
- [day](README.md#day)
- [desc](README.md#desc)
- [distinct](README.md#distinct)
- [exp](README.md#exp)
- [first](README.md#first)
- [floor](README.md#floor)
- [hours](README.md#hours)
- [includes](README.md#includes)
- [isNotNull](README.md#isnotnull)
- [isNull](README.md#isnull)
- [last](README.md#last)
- [like](README.md#like)
- [ln](README.md#ln)
- [log](README.md#log)
- [lower](README.md#lower)
- [lpad](README.md#lpad)
- [ltrim](README.md#ltrim)
- [max](README.md#max)
- [min](README.md#min)
- [minutes](README.md#minutes)
- [month](README.md#month)
- [now](README.md#now)
- [nvl](README.md#nvl)
- [nvl2](README.md#nvl2)
- [remainder](README.md#remainder)
- [replace](README.md#replace)
- [round](README.md#round)
- [rpad](README.md#rpad)
- [rtrim](README.md#rtrim)
- [seconds](README.md#seconds)
- [sign](README.md#sign)
- [sin](README.md#sin)
- [sinh](README.md#sinh)
- [source](README.md#source)
- [startsWith](README.md#startswith)
- [substr](README.md#substr)
- [substring](README.md#substring)
- [sum](README.md#sum)
- [tan](README.md#tan)
- [tanh](README.md#tanh)
- [time](README.md#time)
- [timeDiff](README.md#timediff)
- [toDate](README.md#todate)
- [toDateTime](README.md#todatetime)
- [toJson](README.md#tojson)
- [toNumber](README.md#tonumber)
- [toString](README.md#tostring)
- [toTime](README.md#totime)
- [today](README.md#today)
- [trim](README.md#trim)
- [trunc](README.md#trunc)
- [upper](README.md#upper)
- [user](README.md#user)
- [weekday](README.md#weekday)
- [year](README.md#year)

## Type Aliases

### ManyToOne

Ƭ **ManyToOne**\<`T`\>: [`IRelation`](interfaces/IRelation.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/lib/repository/domain/queryable.ts:281](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L281)

___

### OneToMany

Ƭ **OneToMany**\<`T`\>: [`IRelation`](interfaces/IRelation.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/lib/repository/domain/queryable.ts:279](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L279)

___

### OneToOne

Ƭ **OneToOne**\<`T`\>: [`IRelation`](interfaces/IRelation.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/lib/repository/domain/queryable.ts:280](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L280)

## Variables

### DIALECT\_DEFAULT

• `Const` **DIALECT\_DEFAULT**: [`MySQL`](enums/Dialect.md#mysql) = `Dialect.MySQL`

#### Defined in

[src/lib/schema/domain/schema.ts:3](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/schema/domain/schema.ts#L3)

## Functions

### abs

▸ **abs**(`value`): `number`

Get the absolute value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:298](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L298)

___

### acos

▸ **acos**(`value`): `number`

Get the arc cosine

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:300](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L300)

___

### addDay

▸ **addDay**(`date`, `value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `value` | `number` |

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:408](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L408)

___

### addHours

▸ **addHours**(`date`, `value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `value` | `number` |

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:410](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L410)

___

### addMinutes

▸ **addMinutes**(`date`, `value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `value` | `number` |

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:412](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L412)

___

### addMonth

▸ **addMonth**(`date`, `value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `value` | `number` |

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:406](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L406)

___

### addSeconds

▸ **addSeconds**(`date`, `value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `value` | `number` |

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:414](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L414)

___

### addTime

▸ **addTime**(`date`, `value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `value` | `number` |

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:416](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L416)

___

### addYear

▸ **addYear**(`date`, `value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `value` | `number` |

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:404](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L404)

___

### as

▸ **as**(`value`, `name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `name` | `any` |

#### Returns

`any`

#### Defined in

[src/lib/repository/domain/queryable.ts:285](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L285)

___

### asc

▸ **asc**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[src/lib/repository/domain/queryable.ts:289](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L289)

___

### asin

▸ **asin**(`value`): `number`

Get the arc sine

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:302](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L302)

___

### atan

▸ **atan**(`value`): `number`

Get the arc tangent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:304](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L304)

___

### atan2

▸ **atan2**(`x`, `y`): `number`

Get the arc tangent of x and y

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:306](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L306)

___

### avg

▸ **avg**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[src/lib/repository/domain/queryable.ts:450](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L450)

___

### between

▸ **between**(`value`, `from`, `to`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `from` | `any` |
| `to` | `any` |

#### Returns

`boolean`

#### Defined in

[src/lib/repository/domain/queryable.ts:291](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L291)

___

### ceil

▸ **ceil**(`value`): `number`

Get the smallest following integer

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:308](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L308)

___

### chr

▸ **chr**(`value`): `string`

Get character from ASCII code

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:339](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L339)

___

### concat

▸ **concat**(`...values`): `string`

String concatenation

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `string`[] |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:363](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L363)

___

### cos

▸ **cos**(`value`): `number`

Get the cosine

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:310](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L310)

___

### cosh

▸ **cosh**(`value`): `number`

Get hyperbolic cosine

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:312](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L312)

___

### count

▸ **count**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[src/lib/repository/domain/queryable.ts:452](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L452)

___

### curTime

▸ **curTime**(): `Date`

Get the current time

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:378](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L378)

___

### date

▸ **date**(`value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:386](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L386)

___

### dateDiff

▸ **dateDiff**(`date`, `date2`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `date2` | `Date` |

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:418](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L418)

___

### dateTime

▸ **dateTime**(`value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:388](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L388)

___

### day

▸ **day**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:394](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L394)

___

### desc

▸ **desc**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[src/lib/repository/domain/queryable.ts:287](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L287)

___

### distinct

▸ **distinct**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[src/lib/repository/domain/queryable.ts:295](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L295)

___

### exp

▸ **exp**(`value`): `number`

Raise e to the nth power

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:314](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L314)

___

### first

▸ **first**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[src/lib/repository/domain/queryable.ts:454](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L454)

___

### floor

▸ **floor**(`value`): `number`

Get the largest preceding integer

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:316](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L316)

___

### hours

▸ **hours**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:398](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L398)

___

### includes

▸ **includes**(`value`, `list`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `list` | `any`[] |

#### Returns

`boolean`

#### Defined in

[src/lib/repository/domain/queryable.ts:293](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L293)

▸ **includes**(`field`, `searchString`): `string`

Returns true if searchString appears as a substring of the result of converting this

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `searchString` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:374](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L374)

___

### isNotNull

▸ **isNotNull**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/lib/repository/domain/queryable.ts:447](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L447)

___

### isNull

▸ **isNull**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/lib/repository/domain/queryable.ts:445](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L445)

___

### last

▸ **last**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[src/lib/repository/domain/queryable.ts:456](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L456)

___

### like

▸ **like**(`field`, `searchString`): `string`

Get the position of the first occurrence of substring

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `searchString` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:366](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L366)

___

### ln

▸ **ln**(`value`): `number`

Get natural logarithm of num

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:318](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L318)

___

### log

▸ **log**(`num1`, `num2`): `number`

Get logarithm, base num1, of num2

#### Parameters

| Name | Type |
| :------ | :------ |
| `num1` | `number` |
| `num2` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:320](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L320)

___

### lower

▸ **lower**(`value`): `string`

Lowercase string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:343](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L343)

___

### lpad

▸ **lpad**(`value`, `len`, `pad`): `string`

Pad the left-side of string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `len` | `number` |
| `pad` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:345](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L345)

___

### ltrim

▸ **ltrim**(`value`): `string`

Remove leading chars

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:347](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L347)

___

### max

▸ **max**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[src/lib/repository/domain/queryable.ts:458](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L458)

___

### min

▸ **min**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[src/lib/repository/domain/queryable.ts:460](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L460)

___

### minutes

▸ **minutes**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:400](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L400)

___

### month

▸ **month**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:392](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L392)

___

### now

▸ **now**(): `Date`

Get the current dateTime

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:382](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L382)

___

### nvl

▸ **nvl**(`value`, `_default`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `_default` | `any` |

#### Returns

`any`

#### Defined in

[src/lib/repository/domain/queryable.ts:441](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L441)

___

### nvl2

▸ **nvl2**(`value`, `a`, `b`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `a` | `any` |
| `b` | `any` |

#### Returns

`any`

#### Defined in

[src/lib/repository/domain/queryable.ts:443](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L443)

___

### remainder

▸ **remainder**(`n1`, `n2`): `number`

Get remainder

#### Parameters

| Name | Type |
| :------ | :------ |
| `n1` | `number` |
| `n2` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:322](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L322)

___

### replace

▸ **replace**(`value`, `source`, `target`): `string`

The replace() method searches a string for a specified value and returns a new string where the specified values are replaced.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `source` | `string` |
| `target` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:349](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L349)

___

### round

▸ **round**(`value`, `decimals`): `number`

Get rounded value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `decimals` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:324](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L324)

___

### rpad

▸ **rpad**(`value`, `len`, `pad`): `string`

Pad the right-side of string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `len` | `number` |
| `pad` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:351](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L351)

___

### rtrim

▸ **rtrim**(`value`): `string`

Remove trailing spaces

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:353](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L353)

___

### seconds

▸ **seconds**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:402](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L402)

___

### sign

▸ **sign**(`value`): `number`

Get sign of exp

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:326](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L326)

___

### sin

▸ **sin**(`value`): `number`

Get sine

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:328](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L328)

___

### sinh

▸ **sinh**(`value`): `number`

Get hyperbolic sine

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:330](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L330)

___

### source

▸ **source**(): `string`

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:438](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L438)

___

### startsWith

▸ **startsWith**(`field`, `searchString`): `string`

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `searchString` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:372](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L372)

___

### substr

▸ **substr**(`value`, `from`, `count`): `string`

Get a substring of string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `from` | `number` |
| `count` | `number` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:355](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L355)

___

### substring

▸ **substring**(`value`, `from`, `count`): `string`

Get a substring of string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `from` | `number` |
| `count` | `number` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:357](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L357)

___

### sum

▸ **sum**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[src/lib/repository/domain/queryable.ts:462](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L462)

___

### tan

▸ **tan**(`value`): `number`

Get tangent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:332](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L332)

___

### tanh

▸ **tanh**(`value`): `number`

Get hyperbolic tangent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:334](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L334)

___

### time

▸ **time**(`value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:384](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L384)

___

### timeDiff

▸ **timeDiff**(`time`, `time2`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `Date` |
| `time2` | `Date` |

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:420](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L420)

___

### toDate

▸ **toDate**(`value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:425](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L425)

___

### toDateTime

▸ **toDateTime**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:427](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L427)

___

### toJson

▸ **toJson**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[src/lib/repository/domain/queryable.ts:431](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L431)

___

### toNumber

▸ **toNumber**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:433](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L433)

___

### toString

▸ **toString**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:423](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L423)

___

### toTime

▸ **toTime**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:429](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L429)

___

### today

▸ **today**(): `Date`

Get the current date

#### Returns

`Date`

#### Defined in

[src/lib/repository/domain/queryable.ts:380](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L380)

___

### trim

▸ **trim**(`value`): `string`

Remove characters

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:359](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L359)

___

### trunc

▸ **trunc**(`value`, `decimals`): `number`

Truncate num

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `decimals` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:336](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L336)

___

### upper

▸ **upper**(`value`): `string`

Uppercase string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:361](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L361)

___

### user

▸ **user**(): `string`

#### Returns

`string`

#### Defined in

[src/lib/repository/domain/queryable.ts:436](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L436)

___

### weekday

▸ **weekday**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:396](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L396)

___

### year

▸ **year**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`number`

#### Defined in

[src/lib/repository/domain/queryable.ts:390](https://github.com/lambda-orm/lambdaorm-base/blob/18a48bdf05b264fa0e5a92f5c2fa8abbd9587acd/src/lib/repository/domain/queryable.ts#L390)
