[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / SchemaHelper

# Class: SchemaHelper

## Constructors

### new SchemaHelper()

> **new SchemaHelper**(`str`): [`SchemaHelper`](SchemaHelper.md)

#### Parameters

• **str**: `IStringHelper`

#### Returns

[`SchemaHelper`](SchemaHelper.md)

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L10)

## Properties

### DEFAULT\_LENGTH

> `readonly` **DEFAULT\_LENGTH**: `80` = `80`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L7)

***

### DEFAULT\_TYPE

> `readonly` **DEFAULT\_TYPE**: `"string"` = `'string'`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L6)

## Methods

### capitalize()

> **capitalize**(`name`): `string`

#### Parameters

• **name**: `string`

#### Returns

`string`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:36](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L36)

***

### entityName()

> **entityName**(`name`): `string`

#### Parameters

• **name**: `string`

#### Returns

`string`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L22)

***

### equalName()

> **equalName**(`name1`?, `name2`?): `boolean`

#### Parameters

• **name1?**: `string`

• **name2?**: `string`

#### Returns

`boolean`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L16)

***

### getFk()

> **getFk**(`objType`): `undefined` \| `PropertyType`

#### Parameters

• **objType**: `ObjType`

#### Returns

`undefined` \| `PropertyType`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:58](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L58)

***

### getKey()

> **getKey**(`uniques`): `undefined` \| `PropertyType`

#### Parameters

• **uniques**: `PropertyType`[]

#### Returns

`undefined` \| `PropertyType`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:64](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L64)

***

### getPk()

> **getPk**(`objType`): `undefined` \| `PropertyType`

#### Parameters

• **objType**: `ObjType`

#### Returns

`undefined` \| `PropertyType`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:48](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L48)

***

### getPkName()

> **getPkName**(`objType`): `string`

#### Parameters

• **objType**: `ObjType`

#### Returns

`string`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:53](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L53)

***

### indexName()

> **indexName**(`name`): `string`

#### Parameters

• **name**: `string`

#### Returns

`string`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:40](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L40)

***

### length()

> **length**(`length`?): `undefined` \| `number`

#### Parameters

• **length?**: `number`

#### Returns

`undefined` \| `number`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:87](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L87)

***

### lengthFromType()

> **lengthFromType**(`type`): `undefined` \| `number`

#### Parameters

• **type**: `Type`

#### Returns

`undefined` \| `number`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:91](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L91)

***

### newId()

> **newId**(): `string`

#### Returns

`string`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:12](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L12)

***

### propertyName()

> **propertyName**(`name`): `string`

#### Parameters

• **name**: `string`

#### Returns

`string`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:28](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L28)

***

### refPropertyName()

> **refPropertyName**(`entityName`, `propertyName`): `string`

#### Parameters

• **entityName**: `string`

• **propertyName**: `string`

#### Returns

`string`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L32)

***

### relationName()

> **relationName**(`name`): `string`

#### Parameters

• **name**: `string`

#### Returns

`string`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:44](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L44)

***

### type()

> **type**(`type`?, `length`?): `undefined` \| `string`

#### Parameters

• **type?**: `string`

• **length?**: `number`

#### Returns

`undefined` \| `string`

#### Source

[src/lib/schema/infrastructure/schemaHelper.ts:82](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/schema/infrastructure/schemaHelper.ts#L82)
