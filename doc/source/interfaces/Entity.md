[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / Entity

# Interface: Entity

Defined in: [src/lib/schema/domain/schema.ts:58](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L58)

## Extended by

- [`EntityMapping`](EntityMapping.md)
- [`FormatMapping`](FormatMapping.md)

## Properties

### abstract?

> `optional` **abstract**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:62](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L62)

***

### composite?

> `optional` **composite**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:78](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L78)

***

### constraints?

> `optional` **constraints**: [`Constraint`](Constraint.md)[]

Defined in: [src/lib/schema/domain/schema.ts:71](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L71)

***

### dependents?

> `optional` **dependents**: [`Dependent`](Dependent.md)[]

Defined in: [src/lib/schema/domain/schema.ts:70](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L70)

***

### extends?

> `optional` **extends**: `string`

Defined in: [src/lib/schema/domain/schema.ts:61](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L61)

***

### hadDefaults?

> `optional` **hadDefaults**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:76](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L76)

***

### hadReadExps?

> `optional` **hadReadExps**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:72](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L72)

***

### hadReadValues?

> `optional` **hadReadValues**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:74](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L74)

***

### hadViewReadExp?

> `optional` **hadViewReadExp**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:77](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L77)

***

### hadWriteExps?

> `optional` **hadWriteExps**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:73](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L73)

***

### hadWriteValues?

> `optional` **hadWriteValues**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:75](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L75)

***

### indexes?

> `optional` **indexes**: [`Index`](Index.md)[]

Defined in: [src/lib/schema/domain/schema.ts:69](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L69)

***

### intermediate?

> `optional` **intermediate**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:79](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L79)

***

### name

> **name**: `string`

Defined in: [src/lib/schema/domain/schema.ts:59](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L59)

***

### primaryKey?

> `optional` **primaryKey**: `string`[]

Defined in: [src/lib/schema/domain/schema.ts:65](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L65)

***

### properties?

> `optional` **properties**: [`Property`](Property.md)[]

Defined in: [src/lib/schema/domain/schema.ts:60](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L60)

***

### relations?

> `optional` **relations**: [`Relation`](Relation.md)[]

Defined in: [src/lib/schema/domain/schema.ts:67](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L67)

***

### required?

> `optional` **required**: `string`[]

Defined in: [src/lib/schema/domain/schema.ts:68](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L68)

***

### singular?

> `optional` **singular**: `string`

Defined in: [src/lib/schema/domain/schema.ts:63](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L63)

***

### uniqueKey?

> `optional` **uniqueKey**: `string`[]

Defined in: [src/lib/schema/domain/schema.ts:66](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L66)

***

### view?

> `optional` **view**: `boolean`

Defined in: [src/lib/schema/domain/schema.ts:64](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/domain/schema.ts#L64)
