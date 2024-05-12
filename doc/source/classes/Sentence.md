[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / Sentence

# Class: Sentence

## Extends

- `Operand`

## Constructors

### new Sentence()

> **new Sentence**(`pos`, `name`, `children`, `entity`, `alias`): [`Sentence`](Sentence.md)

#### Parameters

• **pos**: `Position`

• **name**: `string`

• **children**: `Operand`[]

• **entity**: `string`

• **alias**: `string`

#### Returns

[`Sentence`](Sentence.md)

#### Overrides

`Operand.constructor`

#### Source

[src/lib/sentence/domain/sentence.ts:87](https://github.com/lambda-orm/lambdaorm-base/blob/5d74b344f8322b5f4e53698b0a2759c1bc628a31/src/lib/sentence/domain/sentence.ts#L87)

## Properties

### action

> **action**: [`SentenceAction`](../enumerations/SentenceAction.md)

#### Source

[src/lib/sentence/domain/sentence.ts:82](https://github.com/lambda-orm/lambdaorm-base/blob/5d74b344f8322b5f4e53698b0a2759c1bc628a31/src/lib/sentence/domain/sentence.ts#L82)

***

### alias

> **alias**: `string`

#### Source

[src/lib/sentence/domain/sentence.ts:81](https://github.com/lambda-orm/lambdaorm-base/blob/5d74b344f8322b5f4e53698b0a2759c1bc628a31/src/lib/sentence/domain/sentence.ts#L81)

***

### children

> **children**: `Operand`[]

#### Inherited from

`Operand.children`

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:44

***

### columns

> **columns**: [`Property`](../interfaces/Property.md)[]

#### Source

[src/lib/sentence/domain/sentence.ts:78](https://github.com/lambda-orm/lambdaorm-base/blob/5d74b344f8322b5f4e53698b0a2759c1bc628a31/src/lib/sentence/domain/sentence.ts#L78)

***

### constraints

> **constraints**: [`Constraint`](../interfaces/Constraint.md)[]

#### Source

[src/lib/sentence/domain/sentence.ts:83](https://github.com/lambda-orm/lambdaorm-base/blob/5d74b344f8322b5f4e53698b0a2759c1bc628a31/src/lib/sentence/domain/sentence.ts#L83)

***

### defaults

> **defaults**: [`Behavior`](../interfaces/Behavior.md)[]

#### Source

[src/lib/sentence/domain/sentence.ts:85](https://github.com/lambda-orm/lambdaorm-base/blob/5d74b344f8322b5f4e53698b0a2759c1bc628a31/src/lib/sentence/domain/sentence.ts#L85)

***

### entity

> **entity**: `string`

#### Source

[src/lib/sentence/domain/sentence.ts:80](https://github.com/lambda-orm/lambdaorm-base/blob/5d74b344f8322b5f4e53698b0a2759c1bc628a31/src/lib/sentence/domain/sentence.ts#L80)

***

### evaluator?

> `optional` **evaluator**: `IEvaluator`

#### Inherited from

`Operand.evaluator`

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:46

***

### id?

> `optional` **id**: `string`

#### Inherited from

`Operand.id`

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:48

***

### name

> **name**: `any`

#### Inherited from

`Operand.name`

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:42

***

### number?

> `optional` **number**: `number`

#### Inherited from

`Operand.number`

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:47

***

### parameters

> **parameters**: `Parameter`[]

#### Source

[src/lib/sentence/domain/sentence.ts:79](https://github.com/lambda-orm/lambdaorm-base/blob/5d74b344f8322b5f4e53698b0a2759c1bc628a31/src/lib/sentence/domain/sentence.ts#L79)

***

### pos

> `readonly` **pos**: `Position`

#### Inherited from

`Operand.pos`

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:41

***

### returnType?

> `optional` **returnType**: `Type`

#### Inherited from

`Operand.returnType`

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:45

***

### type

> `readonly` **type**: `OperandType`

#### Inherited from

`Operand.type`

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:43

***

### values

> **values**: [`Behavior`](../interfaces/Behavior.md)[]

#### Source

[src/lib/sentence/domain/sentence.ts:84](https://github.com/lambda-orm/lambdaorm-base/blob/5d74b344f8322b5f4e53698b0a2759c1bc628a31/src/lib/sentence/domain/sentence.ts#L84)

## Methods

### eval()

> **eval**(`context`): `any`

#### Parameters

• **context**: `Context`

#### Returns

`any`

#### Inherited from

`Operand.eval`

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:50

***

### evalAsync()

> **evalAsync**(`context`): `Promise`\<`any`\>

#### Parameters

• **context**: `Context`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`Operand.evalAsync`

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:51

***

### getCompositeIncludes()

> **getCompositeIncludes**(): [`SentenceInclude`](SentenceInclude.md)[]

#### Returns

[`SentenceInclude`](SentenceInclude.md)[]

#### Source

[src/lib/sentence/domain/sentence.ts:103](https://github.com/lambda-orm/lambdaorm-base/blob/5d74b344f8322b5f4e53698b0a2759c1bc628a31/src/lib/sentence/domain/sentence.ts#L103)

***

### getIncludes()

> **getIncludes**(): [`SentenceInclude`](SentenceInclude.md)[]

#### Returns

[`SentenceInclude`](SentenceInclude.md)[]

#### Source

[src/lib/sentence/domain/sentence.ts:99](https://github.com/lambda-orm/lambdaorm-base/blob/5d74b344f8322b5f4e53698b0a2759c1bc628a31/src/lib/sentence/domain/sentence.ts#L99)

***

### isAsync()

> **isAsync**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`Operand.isAsync`

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:52

***

### solve()

> **solve**(`context`): `Promise`\<`any`\>

#### Parameters

• **context**: `Context`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`Operand.solve`

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:53
