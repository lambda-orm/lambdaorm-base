[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / Entity

# Interface: Entity

## Extended by

- [`EntityMapping`](EntityMapping.md)
- [`FormatMapping`](FormatMapping.md)

## Properties

### abstract?

> `optional` **abstract**: `boolean`

#### Source

[src/lib/schema/domain/schema.ts:62](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L62)

***

### composite?

> `optional` **composite**: `boolean`

#### Source

[src/lib/schema/domain/schema.ts:78](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L78)

***

### constraints?

> `optional` **constraints**: [`Constraint`](Constraint.md)[]

#### Source

[src/lib/schema/domain/schema.ts:71](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L71)

***

### dependents?

> `optional` **dependents**: [`Dependent`](Dependent.md)[]

#### Source

[src/lib/schema/domain/schema.ts:70](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L70)

***

### extends?

> `optional` **extends**: `string`

#### Source

[src/lib/schema/domain/schema.ts:61](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L61)

***

### hadDefaults?

> `optional` **hadDefaults**: `boolean`

#### Source

[src/lib/schema/domain/schema.ts:76](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L76)

***

### hadReadExps?

> `optional` **hadReadExps**: `boolean`

#### Source

[src/lib/schema/domain/schema.ts:72](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L72)

***

### hadReadValues?

> `optional` **hadReadValues**: `boolean`

#### Source

[src/lib/schema/domain/schema.ts:74](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L74)

***

### hadViewReadExp?

> `optional` **hadViewReadExp**: `boolean`

#### Source

[src/lib/schema/domain/schema.ts:77](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L77)

***

### hadWriteExps?

> `optional` **hadWriteExps**: `boolean`

#### Source

[src/lib/schema/domain/schema.ts:73](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L73)

***

### hadWriteValues?

> `optional` **hadWriteValues**: `boolean`

#### Source

[src/lib/schema/domain/schema.ts:75](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L75)

***

### indexes?

> `optional` **indexes**: [`Index`](Index.md)[]

#### Source

[src/lib/schema/domain/schema.ts:69](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L69)

***

### intermediate?

> `optional` **intermediate**: `boolean`

#### Source

[src/lib/schema/domain/schema.ts:79](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L79)

***

### name

> **name**: `string`

#### Source

[src/lib/schema/domain/schema.ts:59](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L59)

***

### primaryKey?

> `optional` **primaryKey**: `string`[]

#### Source

[src/lib/schema/domain/schema.ts:65](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L65)

***

### properties?

> `optional` **properties**: [`Property`](Property.md)[]

#### Source

[src/lib/schema/domain/schema.ts:60](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L60)

***

### relations?

> `optional` **relations**: [`Relation`](Relation.md)[]

#### Source

[src/lib/schema/domain/schema.ts:67](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L67)

***

### required?

> `optional` **required**: `string`[]

#### Source

[src/lib/schema/domain/schema.ts:68](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L68)

***

### singular?

> `optional` **singular**: `string`

#### Source

[src/lib/schema/domain/schema.ts:63](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L63)

***

### uniqueKey?

> `optional` **uniqueKey**: `string`[]

#### Source

[src/lib/schema/domain/schema.ts:66](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L66)

***

### view?

> `optional` **view**: `boolean`

#### Source

[src/lib/schema/domain/schema.ts:64](https://github.com/lambda-orm/lambdaorm-base/blob/2b4bbf4c1401295bf2ed95d8b326e6cfc5d3f301/src/lib/schema/domain/schema.ts#L64)
