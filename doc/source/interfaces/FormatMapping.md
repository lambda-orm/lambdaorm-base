[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / FormatMapping

# Interface: FormatMapping

Defined in: [src/lib/schema/domain/schema.ts:100](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L100)

## Extends

- [`Entity`](Entity.md)

## Properties

### abstract?

> `optional` **abstract**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:62](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L62)

#### Inherited from

[`Entity`](Entity.md).[`abstract`](Entity.md#abstract)

***

### composite?

> `optional` **composite**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:78](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L78)

#### Inherited from

[`Entity`](Entity.md).[`composite`](Entity.md#composite)

***

### constraints?

> `optional` **constraints**: [`Constraint`](Constraint.md)[]

Defined in: [src/lib/schema/domain/schema.ts:71](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L71)

#### Inherited from

[`Entity`](Entity.md).[`constraints`](Entity.md#constraints)

***

### date?

> `optional` **date**: `string`

Defined in: [src/lib/schema/domain/schema.ts:102](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L102)

***

### dateTime?

> `optional` **dateTime**: `string`

Defined in: [src/lib/schema/domain/schema.ts:101](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L101)

***

### dependents?

> `optional` **dependents**: [`Dependent`](Dependent.md)[]

Defined in: [src/lib/schema/domain/schema.ts:70](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L70)

#### Inherited from

[`Entity`](Entity.md).[`dependents`](Entity.md#dependents)

***

### extends?

> `optional` **extends**: `string`

Defined in: [src/lib/schema/domain/schema.ts:61](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L61)

#### Inherited from

[`Entity`](Entity.md).[`extends`](Entity.md#extends)

***

### hadDefaults?

> `optional` **hadDefaults**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:76](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L76)

#### Inherited from

[`Entity`](Entity.md).[`hadDefaults`](Entity.md#haddefaults)

***

### hadReadExps?

> `optional` **hadReadExps**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:72](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L72)

#### Inherited from

[`Entity`](Entity.md).[`hadReadExps`](Entity.md#hadreadexps)

***

### hadReadValues?

> `optional` **hadReadValues**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:74](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L74)

#### Inherited from

[`Entity`](Entity.md).[`hadReadValues`](Entity.md#hadreadvalues)

***

### hadViewReadExp?

> `optional` **hadViewReadExp**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:77](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L77)

#### Inherited from

[`Entity`](Entity.md).[`hadViewReadExp`](Entity.md#hadviewreadexp)

***

### hadWriteExps?

> `optional` **hadWriteExps**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:73](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L73)

#### Inherited from

[`Entity`](Entity.md).[`hadWriteExps`](Entity.md#hadwriteexps)

***

### hadWriteValues?

> `optional` **hadWriteValues**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:75](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L75)

#### Inherited from

[`Entity`](Entity.md).[`hadWriteValues`](Entity.md#hadwritevalues)

***

### indexes?

> `optional` **indexes**: [`Index`](Index.md)[]

Defined in: [src/lib/schema/domain/schema.ts:69](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L69)

#### Inherited from

[`Entity`](Entity.md).[`indexes`](Entity.md#indexes)

***

### intermediate?

> `optional` **intermediate**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:79](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L79)

#### Inherited from

[`Entity`](Entity.md).[`intermediate`](Entity.md#intermediate)

***

### name

> **name**: `string`

Defined in: [src/lib/schema/domain/schema.ts:59](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L59)

#### Inherited from

[`Entity`](Entity.md).[`name`](Entity.md#name)

***

### primaryKey?

> `optional` **primaryKey**: `string`[]

Defined in: [src/lib/schema/domain/schema.ts:65](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L65)

#### Inherited from

[`Entity`](Entity.md).[`primaryKey`](Entity.md#primarykey)

***

### properties?

> `optional` **properties**: [`Property`](Property.md)[]

Defined in: [src/lib/schema/domain/schema.ts:60](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L60)

#### Inherited from

[`Entity`](Entity.md).[`properties`](Entity.md#properties)

***

### relations?

> `optional` **relations**: [`Relation`](Relation.md)[]

Defined in: [src/lib/schema/domain/schema.ts:67](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L67)

#### Inherited from

[`Entity`](Entity.md).[`relations`](Entity.md#relations)

***

### required?

> `optional` **required**: `string`[]

Defined in: [src/lib/schema/domain/schema.ts:68](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L68)

#### Inherited from

[`Entity`](Entity.md).[`required`](Entity.md#required)

***

### singular?

> `optional` **singular**: `string`

Defined in: [src/lib/schema/domain/schema.ts:63](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L63)

#### Inherited from

[`Entity`](Entity.md).[`singular`](Entity.md#singular)

***

### time?

> `optional` **time**: `string`

Defined in: [src/lib/schema/domain/schema.ts:103](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L103)

***

### uniqueKey?

> `optional` **uniqueKey**: `string`[]

Defined in: [src/lib/schema/domain/schema.ts:66](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L66)

#### Inherited from

[`Entity`](Entity.md).[`uniqueKey`](Entity.md#uniquekey)

***

### view?

> `optional` **view**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:64](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L64)

#### Inherited from

[`Entity`](Entity.md).[`view`](Entity.md#view)
