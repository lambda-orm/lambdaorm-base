[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / SentenceInclude

# Class: SentenceInclude

Defined in: [src/lib/sentence/domain/sentence.ts:108](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/sentence/domain/sentence.ts#L108)

## Extends

- `Operand`

## Constructors

### Constructor

> **new SentenceInclude**(`pos`, `name`, `children`, `relation`): `SentenceInclude`

Defined in: [src/lib/sentence/domain/sentence.ts:110](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/sentence/domain/sentence.ts#L110)

#### Parameters

##### pos

`Position`

##### name

`string`

##### children

`Operand`[]

##### relation

[`Relation`](../interfaces/Relation.md)

#### Returns

`SentenceInclude`

#### Overrides

`Operand.constructor`

## Properties

### children

> **children**: `Operand`[]

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:44

#### Inherited from

`Operand.children`

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

### pos

> `readonly` **pos**: `Position`

Defined in: node\_modules/3xpr/shared/domain/operand.d.ts:41

#### Inherited from

`Operand.pos`

***

### relation

> **relation**: [`Relation`](../interfaces/Relation.md)

Defined in: [src/lib/sentence/domain/sentence.ts:109](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/sentence/domain/sentence.ts#L109)

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
