[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / PropertyMapping

# Interface: PropertyMapping

Defined in: [src/lib/schema/domain/schema.ts:87](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L87)

## Extends

- [`Property`](Property.md)

## Properties

### autoIncrement?

> `optional` **autoIncrement**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:30](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L30)

#### Inherited from

[`Property`](Property.md).[`autoIncrement`](Property.md#autoincrement)

***

### dbType?

> `optional` **dbType**: `string`

Defined in: [src/lib/schema/domain/schema.ts:90](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L90)

***

### default?

> `optional` **default**: `string`

Defined in: [src/lib/schema/domain/schema.ts:34](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L34)

#### Inherited from

[`Property`](Property.md).[`default`](Property.md#default)

***

### enum?

> `optional` **enum**: `string`

Defined in: [src/lib/schema/domain/schema.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L37)

#### Inherited from

[`Property`](Property.md).[`enum`](Property.md#enum)

***

### key?

> `optional` **key**: `string`

Defined in: [src/lib/schema/domain/schema.ts:38](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L38)

#### Inherited from

[`Property`](Property.md).[`key`](Property.md#key)

***

### length?

> `optional` **length**: `number`

Defined in: [src/lib/schema/domain/schema.ts:27](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L27)

#### Inherited from

[`Property`](Property.md).[`length`](Property.md#length)

***

### mapping

> **mapping**: `string`

Defined in: [src/lib/schema/domain/schema.ts:88](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L88)

***

### name

> **name**: `string`

Defined in: [src/lib/schema/domain/schema.ts:25](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L25)

#### Inherited from

[`Property`](Property.md).[`name`](Property.md#name)

***

### primaryKey?

> `optional` **primaryKey**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L29)

#### Inherited from

[`Property`](Property.md).[`primaryKey`](Property.md#primarykey)

***

### readExp?

> `optional` **readExp**: `string`

Defined in: [src/lib/schema/domain/schema.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L32)

#### Inherited from

[`Property`](Property.md).[`readExp`](Property.md#readexp)

***

### readMappingExp?

> `optional` **readMappingExp**: `string`

Defined in: [src/lib/schema/domain/schema.ts:89](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L89)

***

### readValue?

> `optional` **readValue**: `string`

Defined in: [src/lib/schema/domain/schema.ts:35](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L35)

#### Inherited from

[`Property`](Property.md).[`readValue`](Property.md#readvalue)

***

### required?

> `optional` **required**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:28](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L28)

#### Inherited from

[`Property`](Property.md).[`required`](Property.md#required)

***

### type?

> `optional` **type**: `string`

Defined in: [src/lib/schema/domain/schema.ts:26](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L26)

#### Inherited from

[`Property`](Property.md).[`type`](Property.md#type)

***

### view?

> `optional` **view**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:31](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L31)

#### Inherited from

[`Property`](Property.md).[`view`](Property.md#view)

***

### writeExp?

> `optional` **writeExp**: `string`

Defined in: [src/lib/schema/domain/schema.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L33)

#### Inherited from

[`Property`](Property.md).[`writeExp`](Property.md#writeexp)

***

### writeValue?

> `optional` **writeValue**: `string`

Defined in: [src/lib/schema/domain/schema.ts:36](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/schema/domain/schema.ts#L36)

#### Inherited from

[`Property`](Property.md).[`writeValue`](Property.md#writevalue)
