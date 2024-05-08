[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / Upsert

# Class: Upsert

## Extends

- [`Clause`](Clause.md)

## Constructors

### new Upsert()

> **new Upsert**(`pos`, `name`, `children`, `entity`, `alias`): [`Upsert`](Upsert.md)

#### Parameters

• **pos**: `Position`

• **name**: `string`

• **children**: `Operand`[]

• **entity**: `string`

• **alias**: `string`

#### Returns

[`Upsert`](Upsert.md)

#### Inherited from

[`Clause`](Clause.md).[`constructor`](Clause.md#constructors)

#### Source

[src/lib/sentence/domain/sentence.ts:54](https://github.com/lambda-orm/lambdaorm-base/blob/7ab89b6bcd2fea05971e688ab15feca3a500d972/src/lib/sentence/domain/sentence.ts#L54)

## Properties

### alias

> **alias**: `string`

#### Inherited from

[`Clause`](Clause.md).[`alias`](Clause.md#alias)

#### Source

[src/lib/sentence/domain/sentence.ts:52](https://github.com/lambda-orm/lambdaorm-base/blob/7ab89b6bcd2fea05971e688ab15feca3a500d972/src/lib/sentence/domain/sentence.ts#L52)

***

### children

> **children**: `Operand`[]

#### Inherited from

[`Clause`](Clause.md).[`children`](Clause.md#children)

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:44

***

### entity

> **entity**: `string`

#### Inherited from

[`Clause`](Clause.md).[`entity`](Clause.md#entity)

#### Source

[src/lib/sentence/domain/sentence.ts:53](https://github.com/lambda-orm/lambdaorm-base/blob/7ab89b6bcd2fea05971e688ab15feca3a500d972/src/lib/sentence/domain/sentence.ts#L53)

***

### evaluator?

> `optional` **evaluator**: `IEvaluator`

#### Inherited from

[`Clause`](Clause.md).[`evaluator`](Clause.md#evaluator)

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:46

***

### id?

> `optional` **id**: `string`

#### Inherited from

[`Clause`](Clause.md).[`id`](Clause.md#id)

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:48

***

### name

> **name**: `any`

#### Inherited from

[`Clause`](Clause.md).[`name`](Clause.md#name)

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:42

***

### number?

> `optional` **number**: `number`

#### Inherited from

[`Clause`](Clause.md).[`number`](Clause.md#number)

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:47

***

### pos

> `readonly` **pos**: `Position`

#### Inherited from

[`Clause`](Clause.md).[`pos`](Clause.md#pos)

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:41

***

### returnType?

> `optional` **returnType**: `Type`

#### Inherited from

[`Clause`](Clause.md).[`returnType`](Clause.md#returntype)

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:45

***

### type

> `readonly` **type**: `OperandType`

#### Inherited from

[`Clause`](Clause.md).[`type`](Clause.md#type)

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

[`Clause`](Clause.md).[`eval`](Clause.md#eval)

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

[`Clause`](Clause.md).[`evalAsync`](Clause.md#evalasync)

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:51

***

### isAsync()

> **isAsync**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Clause`](Clause.md).[`isAsync`](Clause.md#isasync)

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

[`Clause`](Clause.md).[`solve`](Clause.md#solve)

#### Source

node\_modules/3xpr/shared/domain/operand.d.ts:53
