[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / EntityMapping

# Interface: EntityMapping

## Extends

- [`Entity`](Entity.md)

## Properties

### abstract?

> `optional` **abstract**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`abstract`](Entity.md#abstract)

#### Source

[src/lib/schema/domain/schema.ts:62](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L62)

***

### composite?

> `optional` **composite**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`composite`](Entity.md#composite)

#### Source

[src/lib/schema/domain/schema.ts:78](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L78)

***

### constraints?

> `optional` **constraints**: [`Constraint`](Constraint.md)[]

#### Inherited from

[`Entity`](Entity.md).[`constraints`](Entity.md#constraints)

#### Source

[src/lib/schema/domain/schema.ts:71](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L71)

***

### dependents?

> `optional` **dependents**: [`Dependent`](Dependent.md)[]

#### Inherited from

[`Entity`](Entity.md).[`dependents`](Entity.md#dependents)

#### Source

[src/lib/schema/domain/schema.ts:70](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L70)

***

### extends?

> `optional` **extends**: `string`

#### Inherited from

[`Entity`](Entity.md).[`extends`](Entity.md#extends)

#### Source

[src/lib/schema/domain/schema.ts:61](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L61)

***

### filter?

> `optional` **filter**: `string`

#### Source

[src/lib/schema/domain/schema.ts:96](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L96)

***

### hadDefaults?

> `optional` **hadDefaults**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`hadDefaults`](Entity.md#haddefaults)

#### Source

[src/lib/schema/domain/schema.ts:76](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L76)

***

### hadKeys?

> `optional` **hadKeys**: `boolean`

#### Source

[src/lib/schema/domain/schema.ts:97](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L97)

***

### hadReadExps?

> `optional` **hadReadExps**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`hadReadExps`](Entity.md#hadreadexps)

#### Source

[src/lib/schema/domain/schema.ts:72](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L72)

***

### hadReadMappingExp?

> `optional` **hadReadMappingExp**: `boolean`

#### Source

[src/lib/schema/domain/schema.ts:98](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L98)

***

### hadReadValues?

> `optional` **hadReadValues**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`hadReadValues`](Entity.md#hadreadvalues)

#### Source

[src/lib/schema/domain/schema.ts:74](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L74)

***

### hadViewReadExp?

> `optional` **hadViewReadExp**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`hadViewReadExp`](Entity.md#hadviewreadexp)

#### Source

[src/lib/schema/domain/schema.ts:77](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L77)

***

### hadWriteExps?

> `optional` **hadWriteExps**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`hadWriteExps`](Entity.md#hadwriteexps)

#### Source

[src/lib/schema/domain/schema.ts:73](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L73)

***

### hadWriteValues?

> `optional` **hadWriteValues**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`hadWriteValues`](Entity.md#hadwritevalues)

#### Source

[src/lib/schema/domain/schema.ts:75](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L75)

***

### indexes?

> `optional` **indexes**: [`Index`](Index.md)[]

#### Inherited from

[`Entity`](Entity.md).[`indexes`](Entity.md#indexes)

#### Source

[src/lib/schema/domain/schema.ts:69](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L69)

***

### intermediate?

> `optional` **intermediate**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`intermediate`](Entity.md#intermediate)

#### Source

[src/lib/schema/domain/schema.ts:79](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L79)

***

### mapping?

> `optional` **mapping**: `string`

#### Source

[src/lib/schema/domain/schema.ts:93](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L93)

***

### name

> **name**: `string`

#### Inherited from

[`Entity`](Entity.md).[`name`](Entity.md#name)

#### Source

[src/lib/schema/domain/schema.ts:59](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L59)

***

### primaryKey?

> `optional` **primaryKey**: `string`[]

#### Inherited from

[`Entity`](Entity.md).[`primaryKey`](Entity.md#primarykey)

#### Source

[src/lib/schema/domain/schema.ts:65](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L65)

***

### properties?

> `optional` **properties**: [`PropertyMapping`](PropertyMapping.md)[]

#### Overrides

[`Entity`](Entity.md).[`properties`](Entity.md#properties)

#### Source

[src/lib/schema/domain/schema.ts:95](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L95)

***

### relations?

> `optional` **relations**: [`Relation`](Relation.md)[]

#### Inherited from

[`Entity`](Entity.md).[`relations`](Entity.md#relations)

#### Source

[src/lib/schema/domain/schema.ts:67](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L67)

***

### required?

> `optional` **required**: `string`[]

#### Inherited from

[`Entity`](Entity.md).[`required`](Entity.md#required)

#### Source

[src/lib/schema/domain/schema.ts:68](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L68)

***

### sequence?

> `optional` **sequence**: `string`

#### Source

[src/lib/schema/domain/schema.ts:94](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L94)

***

### singular?

> `optional` **singular**: `string`

#### Inherited from

[`Entity`](Entity.md).[`singular`](Entity.md#singular)

#### Source

[src/lib/schema/domain/schema.ts:63](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L63)

***

### uniqueKey?

> `optional` **uniqueKey**: `string`[]

#### Inherited from

[`Entity`](Entity.md).[`uniqueKey`](Entity.md#uniquekey)

#### Source

[src/lib/schema/domain/schema.ts:66](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L66)

***

### view?

> `optional` **view**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`view`](Entity.md#view)

#### Source

[src/lib/schema/domain/schema.ts:64](https://github.com/lambda-orm/lambdaorm-base/blob/e3a7772bb5fa4082532c38729067cbcb8dfa89b9/src/lib/schema/domain/schema.ts#L64)
