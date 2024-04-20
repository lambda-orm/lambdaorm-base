[Lambda ORM](../README.md) / Entity

# Interface: Entity

## Hierarchy

- **`Entity`**

  ↳ [`EntityMapping`](EntityMapping.md)

  ↳ [`FormatMapping`](FormatMapping.md)

## Table of contents

### Properties

- [abstract](Entity.md#abstract)
- [composite](Entity.md#composite)
- [constraints](Entity.md#constraints)
- [dependents](Entity.md#dependents)
- [extends](Entity.md#extends)
- [hadDefaults](Entity.md#haddefaults)
- [hadReadExps](Entity.md#hadreadexps)
- [hadReadValues](Entity.md#hadreadvalues)
- [hadViewReadExp](Entity.md#hadviewreadexp)
- [hadWriteExps](Entity.md#hadwriteexps)
- [hadWriteValues](Entity.md#hadwritevalues)
- [indexes](Entity.md#indexes)
- [intermediate](Entity.md#intermediate)
- [name](Entity.md#name)
- [primaryKey](Entity.md#primarykey)
- [properties](Entity.md#properties)
- [relations](Entity.md#relations)
- [required](Entity.md#required)
- [singular](Entity.md#singular)
- [uniqueKey](Entity.md#uniquekey)
- [view](Entity.md#view)

## Properties

### abstract

• `Optional` **abstract**: `boolean`

#### Defined in

[src/lib/schema/domain/schema.ts:62](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L62)

___

### composite

• `Optional` **composite**: `boolean`

#### Defined in

[src/lib/schema/domain/schema.ts:78](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L78)

___

### constraints

• `Optional` **constraints**: [`Constraint`](Constraint.md)[]

#### Defined in

[src/lib/schema/domain/schema.ts:71](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L71)

___

### dependents

• `Optional` **dependents**: [`Dependent`](Dependent.md)[]

#### Defined in

[src/lib/schema/domain/schema.ts:70](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L70)

___

### extends

• `Optional` **extends**: `string`

#### Defined in

[src/lib/schema/domain/schema.ts:61](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L61)

___

### hadDefaults

• `Optional` **hadDefaults**: `boolean`

#### Defined in

[src/lib/schema/domain/schema.ts:76](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L76)

___

### hadReadExps

• `Optional` **hadReadExps**: `boolean`

#### Defined in

[src/lib/schema/domain/schema.ts:72](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L72)

___

### hadReadValues

• `Optional` **hadReadValues**: `boolean`

#### Defined in

[src/lib/schema/domain/schema.ts:74](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L74)

___

### hadViewReadExp

• `Optional` **hadViewReadExp**: `boolean`

#### Defined in

[src/lib/schema/domain/schema.ts:77](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L77)

___

### hadWriteExps

• `Optional` **hadWriteExps**: `boolean`

#### Defined in

[src/lib/schema/domain/schema.ts:73](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L73)

___

### hadWriteValues

• `Optional` **hadWriteValues**: `boolean`

#### Defined in

[src/lib/schema/domain/schema.ts:75](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L75)

___

### indexes

• `Optional` **indexes**: [`Index`](Index.md)[]

#### Defined in

[src/lib/schema/domain/schema.ts:69](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L69)

___

### intermediate

• `Optional` **intermediate**: `boolean`

#### Defined in

[src/lib/schema/domain/schema.ts:79](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L79)

___

### name

• **name**: `string`

#### Defined in

[src/lib/schema/domain/schema.ts:59](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L59)

___

### primaryKey

• `Optional` **primaryKey**: `string`[]

#### Defined in

[src/lib/schema/domain/schema.ts:65](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L65)

___

### properties

• `Optional` **properties**: [`Property`](Property.md)[]

#### Defined in

[src/lib/schema/domain/schema.ts:60](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L60)

___

### relations

• `Optional` **relations**: [`Relation`](Relation.md)[]

#### Defined in

[src/lib/schema/domain/schema.ts:67](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L67)

___

### required

• `Optional` **required**: `string`[]

#### Defined in

[src/lib/schema/domain/schema.ts:68](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L68)

___

### singular

• `Optional` **singular**: `string`

#### Defined in

[src/lib/schema/domain/schema.ts:63](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L63)

___

### uniqueKey

• `Optional` **uniqueKey**: `string`[]

#### Defined in

[src/lib/schema/domain/schema.ts:66](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L66)

___

### view

• `Optional` **view**: `boolean`

#### Defined in

[src/lib/schema/domain/schema.ts:64](https://github.com/lambda-orm/lambdaorm-base/blob/69f2c1fe8e90fe0a78f67c761506613209d6e5f1/src/lib/schema/domain/schema.ts#L64)
