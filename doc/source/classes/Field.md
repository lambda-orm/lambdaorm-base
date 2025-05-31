[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / Field

# Class: Field

Defined in: [src/lib/sentence/domain/sentence.ts:27](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L27)

## Extends

- `Operand`

## Constructors

### Constructor

> **new Field**(`pos`, `entity`, `name`, `returnType?`, `alias?`, `isRoot?`): `Field`

Defined in: [src/lib/sentence/domain/sentence.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L32)

#### Parameters

##### pos

`Position`

##### entity

`string`

##### name

`string`

##### returnType?

`Type`

##### alias?

`string`

##### isRoot?

`boolean`

#### Returns

`Field`

#### Overrides

`Operand.constructor`

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: [src/lib/sentence/domain/sentence.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L29)

***

### children

> **children**: `Operand`[]

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:44

#### Inherited from

`Operand.children`

***

### entity

> **entity**: `string`

Defined in: [src/lib/sentence/domain/sentence.ts:28](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L28)

***

### evaluator?

> `optional` **evaluator**: `IEvaluator`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:46

#### Inherited from

`Operand.evaluator`

***

### id?

> `optional` **id**: `string`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:48

#### Inherited from

`Operand.id`

***

### isRoot?

> `optional` **isRoot**: `boolean`

Defined in: [src/lib/sentence/domain/sentence.ts:30](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L30)

***

### name

> **name**: `any`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:42

#### Inherited from

`Operand.name`

***

### number?

> `optional` **number**: `number`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:47

#### Inherited from

`Operand.number`

***

### pos

> `readonly` **pos**: `Position`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:41

#### Inherited from

`Operand.pos`

***

### prefix?

> `optional` **prefix**: `string`

Defined in: [src/lib/sentence/domain/sentence.ts:31](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L31)

***

### returnType?

> `optional` **returnType**: `Type`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:45

#### Inherited from

`Operand.returnType`

***

### type

> `readonly` **type**: `OperandType`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:43

#### Inherited from

`Operand.type`

## Methods

### clone()

> **clone**(): `Field`

Defined in: [src/lib/sentence/domain/sentence.ts:46](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L46)

#### Returns

`Field`

***

### eval()

> **eval**(`context`): `any`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:50

#### Parameters

##### context

`Context`

#### Returns

`any`

#### Inherited from

`Operand.eval`

***

### evalAsync()

> **evalAsync**(`context`): `Promise`\<`any`\>

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:51

#### Parameters

##### context

`Context`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`Operand.evalAsync`

***

### fieldName()

> **fieldName**(): `any`

Defined in: [src/lib/sentence/domain/sentence.ts:39](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L39)

#### Returns

`any`

***

### isAsync()

> **isAsync**(): `boolean`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:52

#### Returns

`boolean`

#### Inherited from

`Operand.isAsync`

***

### solve()

> **solve**(`context`): `Promise`\<`any`\>

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:53

#### Parameters

##### context

`Context`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`Operand.solve`
