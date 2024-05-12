[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / Clause

# Class: Clause

## Extends

- `Operand`

## Constructors

### new Clause()

> **new Clause**(`pos`, `name`, `children`, `entity`, `alias`): [`Clause`](Clause.md)

#### Parameters

• **pos**: `Position`

• **name**: `string`

• **children**: `Operand`[]

• **entity**: `string`

• **alias**: `string`

#### Returns

[`Clause`](Clause.md)

#### Overrides

`Operand.constructor`

#### Source

[src/lib/sentence/domain/sentence.ts:54](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/sentence/domain/sentence.ts#L54)

## Properties

### alias

> **alias**: `string`

#### Source

[src/lib/sentence/domain/sentence.ts:52](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/sentence/domain/sentence.ts#L52)

***

### children

> **children**: `Operand`[]

#### Inherited from

`Operand.children`

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:44

***

### entity

> **entity**: `string`

#### Source

[src/lib/sentence/domain/sentence.ts:53](https://github.com/lambda-orm/lambdaorm-base/blob/369fa6c47dfcaa18334efd22efe5cc76c83a011a/src/lib/sentence/domain/sentence.ts#L53)

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
