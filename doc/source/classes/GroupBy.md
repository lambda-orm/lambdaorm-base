[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / GroupBy

# Class: GroupBy

Defined in: [src/lib/sentence/domain/sentence.ts:63](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/sentence/domain/sentence.ts#L63)

## Extends

- [`Clause`](Clause.md)

## Constructors

### Constructor

> **new GroupBy**(`pos`, `name`, `children`, `entity`, `alias`): `GroupBy`

Defined in: [src/lib/sentence/domain/sentence.ts:54](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/sentence/domain/sentence.ts#L54)

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

`GroupBy`

#### Inherited from

[`Clause`](Clause.md).[`constructor`](Clause.md#constructor)

## Properties

### alias

> **alias**: `string`

Defined in: [src/lib/sentence/domain/sentence.ts:52](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/sentence/domain/sentence.ts#L52)

#### Inherited from

[`Clause`](Clause.md).[`alias`](Clause.md#alias)

***

### children

> **children**: `Operand`[]

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:44

#### Inherited from

[`Clause`](Clause.md).[`children`](Clause.md#children)

***

### entity

> **entity**: `string`

Defined in: [src/lib/sentence/domain/sentence.ts:53](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/sentence/domain/sentence.ts#L53)

#### Inherited from

[`Clause`](Clause.md).[`entity`](Clause.md#entity)

***

### evaluator?

> `optional` **evaluator**: `IEvaluator`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:46

#### Inherited from

[`Clause`](Clause.md).[`evaluator`](Clause.md#evaluator)

***

### id?

> `optional` **id**: `string`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:48

#### Inherited from

[`Clause`](Clause.md).[`id`](Clause.md#id)

***

### name

> **name**: `any`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:42

#### Inherited from

[`Clause`](Clause.md).[`name`](Clause.md#name)

***

### number?

> `optional` **number**: `number`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:47

#### Inherited from

[`Clause`](Clause.md).[`number`](Clause.md#number)

***

### pos

> `readonly` **pos**: `Position`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:41

#### Inherited from

[`Clause`](Clause.md).[`pos`](Clause.md#pos)

***

### returnType?

> `optional` **returnType**: `Type`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:45

#### Inherited from

[`Clause`](Clause.md).[`returnType`](Clause.md#returntype)

***

### type

> `readonly` **type**: `OperandType`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:43

#### Inherited from

[`Clause`](Clause.md).[`type`](Clause.md#type)

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

[`Clause`](Clause.md).[`eval`](Clause.md#eval)

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

[`Clause`](Clause.md).[`evalAsync`](Clause.md#evalasync)

***

### isAsync()

> **isAsync**(): `boolean`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:52

#### Returns

`boolean`

#### Inherited from

[`Clause`](Clause.md).[`isAsync`](Clause.md#isasync)

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

[`Clause`](Clause.md).[`solve`](Clause.md#solve)
