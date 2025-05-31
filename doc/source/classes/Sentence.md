[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / Sentence

# Class: Sentence

Defined in: [src/lib/sentence/domain/sentence.ts:77](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L77)

## Extends

- `Operand`

## Constructors

### Constructor

> **new Sentence**(`pos`, `name`, `children`, `entity`, `alias`): `Sentence`

Defined in: [src/lib/sentence/domain/sentence.ts:87](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L87)

#### Parameters

##### pos

`Position`

##### name

`string`

##### children

`Operand`[]

##### entity

`string`

##### alias

`string`

#### Returns

`Sentence`

#### Overrides

`Operand.constructor`

## Properties

### action

> **action**: [`SentenceAction`](../enumerations/SentenceAction.md)

Defined in: [src/lib/sentence/domain/sentence.ts:82](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L82)

***

### alias

> **alias**: `string`

Defined in: [src/lib/sentence/domain/sentence.ts:81](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L81)

***

### children

> **children**: `Operand`[]

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:44

#### Inherited from

`Operand.children`

***

### columns

> **columns**: [`Property`](../interfaces/Property.md)[]

Defined in: [src/lib/sentence/domain/sentence.ts:78](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L78)

***

### constraints

> **constraints**: [`Constraint`](../interfaces/Constraint.md)[]

Defined in: [src/lib/sentence/domain/sentence.ts:83](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L83)

***

### defaults

> **defaults**: [`Behavior`](../interfaces/Behavior.md)[]

Defined in: [src/lib/sentence/domain/sentence.ts:85](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L85)

***

### entity

> **entity**: `string`

Defined in: [src/lib/sentence/domain/sentence.ts:80](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L80)

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

### parameters

> **parameters**: `Parameter`[]

Defined in: [src/lib/sentence/domain/sentence.ts:79](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L79)

***

### pos

> `readonly` **pos**: `Position`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:41

#### Inherited from

`Operand.pos`

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

***

### values

> **values**: [`Behavior`](../interfaces/Behavior.md)[]

Defined in: [src/lib/sentence/domain/sentence.ts:84](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L84)

## Methods

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

### getCompositeIncludes()

> **getCompositeIncludes**(): [`SentenceInclude`](SentenceInclude.md)[]

Defined in: [src/lib/sentence/domain/sentence.ts:103](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L103)

#### Returns

[`SentenceInclude`](SentenceInclude.md)[]

***

### getIncludes()

> **getIncludes**(): [`SentenceInclude`](SentenceInclude.md)[]

Defined in: [src/lib/sentence/domain/sentence.ts:99](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/sentence/domain/sentence.ts#L99)

#### Returns

[`SentenceInclude`](SentenceInclude.md)[]

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
