[Lambda ORM](../README.md) / EntityMapping

# Interface: EntityMapping

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`EntityMapping`**

## Table of contents

### Properties

- [abstract](EntityMapping.md#abstract)
- [composite](EntityMapping.md#composite)
- [constraints](EntityMapping.md#constraints)
- [dependents](EntityMapping.md#dependents)
- [extends](EntityMapping.md#extends)
- [filter](EntityMapping.md#filter)
- [hadDefaults](EntityMapping.md#haddefaults)
- [hadKeys](EntityMapping.md#hadkeys)
- [hadReadExps](EntityMapping.md#hadreadexps)
- [hadReadMappingExp](EntityMapping.md#hadreadmappingexp)
- [hadReadValues](EntityMapping.md#hadreadvalues)
- [hadViewReadExp](EntityMapping.md#hadviewreadexp)
- [hadWriteExps](EntityMapping.md#hadwriteexps)
- [hadWriteValues](EntityMapping.md#hadwritevalues)
- [indexes](EntityMapping.md#indexes)
- [mapping](EntityMapping.md#mapping)
- [name](EntityMapping.md#name)
- [primaryKey](EntityMapping.md#primarykey)
- [properties](EntityMapping.md#properties)
- [relations](EntityMapping.md#relations)
- [required](EntityMapping.md#required)
- [sequence](EntityMapping.md#sequence)
- [singular](EntityMapping.md#singular)
- [uniqueKey](EntityMapping.md#uniquekey)
- [view](EntityMapping.md#view)

## Properties

### abstract

• `Optional` **abstract**: `boolean`

#### Inherited from

[Entity](Entity.md).[abstract](Entity.md#abstract)

#### Defined in

src/lib/schema/domain/schema.ts:61

___

### composite

• `Optional` **composite**: `boolean`

#### Inherited from

[Entity](Entity.md).[composite](Entity.md#composite)

#### Defined in

src/lib/schema/domain/schema.ts:78

___

### constraints

• `Optional` **constraints**: [`Constraint`](Constraint.md)[]

#### Inherited from

[Entity](Entity.md).[constraints](Entity.md#constraints)

#### Defined in

src/lib/schema/domain/schema.ts:71

___

### dependents

• **dependents**: [`Dependent`](Dependent.md)[]

#### Inherited from

[Entity](Entity.md).[dependents](Entity.md#dependents)

#### Defined in

src/lib/schema/domain/schema.ts:70

___

### extends

• `Optional` **extends**: `string`

#### Inherited from

[Entity](Entity.md).[extends](Entity.md#extends)

#### Defined in

src/lib/schema/domain/schema.ts:60

___

### filter

• `Optional` **filter**: `string`

#### Defined in

src/lib/schema/domain/schema.ts:94

___

### hadDefaults

• `Optional` **hadDefaults**: `boolean`

#### Inherited from

[Entity](Entity.md).[hadDefaults](Entity.md#haddefaults)

#### Defined in

src/lib/schema/domain/schema.ts:76

___

### hadKeys

• `Optional` **hadKeys**: `boolean`

#### Defined in

src/lib/schema/domain/schema.ts:95

___

### hadReadExps

• `Optional` **hadReadExps**: `boolean`

#### Inherited from

[Entity](Entity.md).[hadReadExps](Entity.md#hadreadexps)

#### Defined in

src/lib/schema/domain/schema.ts:72

___

### hadReadMappingExp

• `Optional` **hadReadMappingExp**: `boolean`

#### Defined in

src/lib/schema/domain/schema.ts:96

___

### hadReadValues

• `Optional` **hadReadValues**: `boolean`

#### Inherited from

[Entity](Entity.md).[hadReadValues](Entity.md#hadreadvalues)

#### Defined in

src/lib/schema/domain/schema.ts:74

___

### hadViewReadExp

• `Optional` **hadViewReadExp**: `boolean`

#### Inherited from

[Entity](Entity.md).[hadViewReadExp](Entity.md#hadviewreadexp)

#### Defined in

src/lib/schema/domain/schema.ts:77

___

### hadWriteExps

• `Optional` **hadWriteExps**: `boolean`

#### Inherited from

[Entity](Entity.md).[hadWriteExps](Entity.md#hadwriteexps)

#### Defined in

src/lib/schema/domain/schema.ts:73

___

### hadWriteValues

• `Optional` **hadWriteValues**: `boolean`

#### Inherited from

[Entity](Entity.md).[hadWriteValues](Entity.md#hadwritevalues)

#### Defined in

src/lib/schema/domain/schema.ts:75

___

### indexes

• **indexes**: [`Index`](Index.md)[]

#### Inherited from

[Entity](Entity.md).[indexes](Entity.md#indexes)

#### Defined in

src/lib/schema/domain/schema.ts:67

___

### mapping

• **mapping**: `string`

#### Defined in

src/lib/schema/domain/schema.ts:91

___

### name

• **name**: `string`

#### Inherited from

[Entity](Entity.md).[name](Entity.md#name)

#### Defined in

src/lib/schema/domain/schema.ts:59

___

### primaryKey

• **primaryKey**: `string`[]

#### Inherited from

[Entity](Entity.md).[primaryKey](Entity.md#primarykey)

#### Defined in

src/lib/schema/domain/schema.ts:64

___

### properties

• **properties**: [`PropertyMapping`](PropertyMapping.md)[]

#### Overrides

[Entity](Entity.md).[properties](Entity.md#properties)

#### Defined in

src/lib/schema/domain/schema.ts:93

___

### relations

• **relations**: [`Relation`](Relation.md)[]

#### Inherited from

[Entity](Entity.md).[relations](Entity.md#relations)

#### Defined in

src/lib/schema/domain/schema.ts:69

___

### required

• **required**: `string`[]

#### Inherited from

[Entity](Entity.md).[required](Entity.md#required)

#### Defined in

src/lib/schema/domain/schema.ts:66

___

### sequence

• **sequence**: `string`

#### Defined in

src/lib/schema/domain/schema.ts:92

___

### singular

• `Optional` **singular**: `string`

#### Inherited from

[Entity](Entity.md).[singular](Entity.md#singular)

#### Defined in

src/lib/schema/domain/schema.ts:62

___

### uniqueKey

• **uniqueKey**: `string`[]

#### Inherited from

[Entity](Entity.md).[uniqueKey](Entity.md#uniquekey)

#### Defined in

src/lib/schema/domain/schema.ts:65

___

### view

• `Optional` **view**: `boolean`

#### Inherited from

[Entity](Entity.md).[view](Entity.md#view)

#### Defined in

src/lib/schema/domain/schema.ts:63
