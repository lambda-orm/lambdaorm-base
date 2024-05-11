[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / FormatMapping

# Interface: FormatMapping

## Extends

- [`Entity`](Entity.md)

## Properties

### abstract?

> `optional` **abstract**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`abstract`](Entity.md#abstract)

#### Source

[src/lib/schema/domain/schema.ts:62](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L62)

***

### composite?

> `optional` **composite**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`composite`](Entity.md#composite)

#### Source

[src/lib/schema/domain/schema.ts:78](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L78)

***

### constraints?

> `optional` **constraints**: [`Constraint`](Constraint.md)[]

#### Inherited from

[`Entity`](Entity.md).[`constraints`](Entity.md#constraints)

#### Source

[src/lib/schema/domain/schema.ts:71](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L71)

***

### date?

> `optional` **date**: `string`

#### Source

[src/lib/schema/domain/schema.ts:102](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L102)

***

### dateTime?

> `optional` **dateTime**: `string`

#### Source

[src/lib/schema/domain/schema.ts:101](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L101)

***

### dependents?

> `optional` **dependents**: [`Dependent`](Dependent.md)[]

#### Inherited from

[`Entity`](Entity.md).[`dependents`](Entity.md#dependents)

#### Source

[src/lib/schema/domain/schema.ts:70](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L70)

***

### extends?

> `optional` **extends**: `string`

#### Inherited from

[`Entity`](Entity.md).[`extends`](Entity.md#extends)

#### Source

[src/lib/schema/domain/schema.ts:61](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L61)

***

### hadDefaults?

> `optional` **hadDefaults**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`hadDefaults`](Entity.md#haddefaults)

#### Source

[src/lib/schema/domain/schema.ts:76](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L76)

***

### hadReadExps?

> `optional` **hadReadExps**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`hadReadExps`](Entity.md#hadreadexps)

#### Source

[src/lib/schema/domain/schema.ts:72](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L72)

***

### hadReadValues?

> `optional` **hadReadValues**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`hadReadValues`](Entity.md#hadreadvalues)

#### Source

[src/lib/schema/domain/schema.ts:74](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L74)

***

### hadViewReadExp?

> `optional` **hadViewReadExp**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`hadViewReadExp`](Entity.md#hadviewreadexp)

#### Source

[src/lib/schema/domain/schema.ts:77](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L77)

***

### hadWriteExps?

> `optional` **hadWriteExps**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`hadWriteExps`](Entity.md#hadwriteexps)

#### Source

[src/lib/schema/domain/schema.ts:73](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L73)

***

### hadWriteValues?

> `optional` **hadWriteValues**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`hadWriteValues`](Entity.md#hadwritevalues)

#### Source

[src/lib/schema/domain/schema.ts:75](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L75)

***

### indexes?

> `optional` **indexes**: [`Index`](Index.md)[]

#### Inherited from

[`Entity`](Entity.md).[`indexes`](Entity.md#indexes)

#### Source

[src/lib/schema/domain/schema.ts:69](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L69)

***

### intermediate?

> `optional` **intermediate**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`intermediate`](Entity.md#intermediate)

#### Source

[src/lib/schema/domain/schema.ts:79](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L79)

***

### name

> **name**: `string`

#### Inherited from

[`Entity`](Entity.md).[`name`](Entity.md#name)

#### Source

[src/lib/schema/domain/schema.ts:59](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L59)

***

### primaryKey?

> `optional` **primaryKey**: `string`[]

#### Inherited from

[`Entity`](Entity.md).[`primaryKey`](Entity.md#primarykey)

#### Source

[src/lib/schema/domain/schema.ts:65](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L65)

***

### properties?

> `optional` **properties**: [`Property`](Property.md)[]

#### Inherited from

[`Entity`](Entity.md).[`properties`](Entity.md#properties)

#### Source

[src/lib/schema/domain/schema.ts:60](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L60)

***

### relations?

> `optional` **relations**: [`Relation`](Relation.md)[]

#### Inherited from

[`Entity`](Entity.md).[`relations`](Entity.md#relations)

#### Source

[src/lib/schema/domain/schema.ts:67](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L67)

***

### required?

> `optional` **required**: `string`[]

#### Inherited from

[`Entity`](Entity.md).[`required`](Entity.md#required)

#### Source

[src/lib/schema/domain/schema.ts:68](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L68)

***

### singular?

> `optional` **singular**: `string`

#### Inherited from

[`Entity`](Entity.md).[`singular`](Entity.md#singular)

#### Source

[src/lib/schema/domain/schema.ts:63](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L63)

***

### time?

> `optional` **time**: `string`

#### Source

[src/lib/schema/domain/schema.ts:103](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L103)

***

### uniqueKey?

> `optional` **uniqueKey**: `string`[]

#### Inherited from

[`Entity`](Entity.md).[`uniqueKey`](Entity.md#uniquekey)

#### Source

[src/lib/schema/domain/schema.ts:66](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L66)

***

### view?

> `optional` **view**: `boolean`

#### Inherited from

[`Entity`](Entity.md).[`view`](Entity.md#view)

#### Source

[src/lib/schema/domain/schema.ts:64](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L64)
