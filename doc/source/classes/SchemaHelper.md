[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / SchemaHelper

# Class: SchemaHelper

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L5)

## Constructors

### Constructor

> **new SchemaHelper**(`str`): `SchemaHelper`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L10)

#### Parameters

##### str

`IStringHelper`

#### Returns

`SchemaHelper`

## Properties

### DEFAULT\_LENGTH

> `readonly` **DEFAULT\_LENGTH**: `80` = `80`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L7)

***

### DEFAULT\_TYPE

> `readonly` **DEFAULT\_TYPE**: `"string"` = `'string'`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L6)

## Methods

### capitalize()

> **capitalize**(`name`): `string`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:36](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L36)

#### Parameters

##### name

`string`

#### Returns

`string`

***

### entityName()

> **entityName**(`name`): `string`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L22)

#### Parameters

##### name

`string`

#### Returns

`string`

***

### equalName()

> **equalName**(`name1?`, `name2?`): `boolean`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L16)

#### Parameters

##### name1?

`string`

##### name2?

`string`

#### Returns

`boolean`

***

### getFk()

> **getFk**(`objType`): `undefined` \| `PropertyType`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:58](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L58)

#### Parameters

##### objType

`ObjType`

#### Returns

`undefined` \| `PropertyType`

***

### getKey()

> **getKey**(`uniques`): `undefined` \| `PropertyType`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:64](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L64)

#### Parameters

##### uniques

`PropertyType`[]

#### Returns

`undefined` \| `PropertyType`

***

### getPk()

> **getPk**(`objType`): `undefined` \| `PropertyType`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:48](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L48)

#### Parameters

##### objType

`ObjType`

#### Returns

`undefined` \| `PropertyType`

***

### getPkName()

> **getPkName**(`objType`): `string`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:53](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L53)

#### Parameters

##### objType

`ObjType`

#### Returns

`string`

***

### indexName()

> **indexName**(`name`): `string`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:40](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L40)

#### Parameters

##### name

`string`

#### Returns

`string`

***

### length()

> **length**(`length?`): `undefined` \| `number`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:87](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L87)

#### Parameters

##### length?

`number`

#### Returns

`undefined` \| `number`

***

### lengthFromType()

> **lengthFromType**(`type`): `undefined` \| `number`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:91](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L91)

#### Parameters

##### type

`Type`

#### Returns

`undefined` \| `number`

***

### newId()

> **newId**(): `string`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:12](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L12)

#### Returns

`string`

***

### propertyName()

> **propertyName**(`name`): `string`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:28](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L28)

#### Parameters

##### name

`string`

#### Returns

`string`

***

### refPropertyName()

> **refPropertyName**(`entityName`, `propertyName`): `string`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L32)

#### Parameters

##### entityName

`string`

##### propertyName

`string`

#### Returns

`string`

***

### relationName()

> **relationName**(`name`): `string`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:44](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L44)

#### Parameters

##### name

`string`

#### Returns

`string`

***

### type()

> **type**(`type?`, `length?`): `undefined` \| `string`

Defined in: [src/lib/schema/infrastructure/schemaHelper.ts:82](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/schema/infrastructure/schemaHelper.ts#L82)

#### Parameters

##### type?

`string`

##### length?

`number`

#### Returns

`undefined` \| `string`
