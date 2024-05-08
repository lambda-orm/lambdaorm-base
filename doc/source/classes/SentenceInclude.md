[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / SentenceInclude

# Class: SentenceInclude

## Extends

- `Operand`

## Constructors

### new SentenceInclude()

> **new SentenceInclude**(`pos`, `name`, `children`, `relation`): [`SentenceInclude`](SentenceInclude.md)

#### Parameters

• **pos**: `Position`

• **name**: `string`

• **children**: `Operand`[]

• **relation**: [`Relation`](../interfaces/Relation.md)

#### Returns

[`SentenceInclude`](SentenceInclude.md)

#### Overrides

`Operand.constructor`

#### Source

[src/lib/sentence/domain/sentence.ts:110](https://github.com/lambda-orm/lambdaorm-base/blob/7ab89b6bcd2fea05971e688ab15feca3a500d972/src/lib/sentence/domain/sentence.ts#L110)

## Properties

### children

> **children**: `Operand`[]

#### Inherited from

`Operand.children`

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:44

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

### pos

> `readonly` **pos**: `Position`

#### Inherited from

`Operand.pos`

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:41

***

### relation

> **relation**: [`Relation`](../interfaces/Relation.md)

#### Source

[src/lib/sentence/domain/sentence.ts:109](https://github.com/lambda-orm/lambdaorm-base/blob/7ab89b6bcd2fea05971e688ab15feca3a500d972/src/lib/sentence/domain/sentence.ts#L109)

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
