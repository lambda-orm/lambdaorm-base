[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / IRepository

# Interface: IRepository\<TEntity, TQuery\>

Defined in: [src/lib/repository/application/repository.ts:3](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L3)

## Type Parameters

### TEntity

`TEntity`

### TQuery

`TQuery`

## Methods

### bulkDelete()

#### Call Signature

> **bulkDelete**(`entities`): `Promise`\<`any`[]\>

Defined in: [src/lib/repository/application/repository.ts:40](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L40)

##### Parameters

###### entities

`TEntity`[]

##### Returns

`Promise`\<`any`[]\>

#### Call Signature

> **bulkDelete**(`entities`, `include`): `Promise`\<`any`[]\>

Defined in: [src/lib/repository/application/repository.ts:41](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L41)

##### Parameters

###### entities

`TEntity`[]

###### include

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`any`[]\>

#### Call Signature

> **bulkDelete**(`entities`, `include?`): `Promise`\<`any`[]\>

Defined in: [src/lib/repository/application/repository.ts:42](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L42)

##### Parameters

###### entities

`TEntity`[]

###### include?

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`any`[]\>

***

### bulkInsert()

#### Call Signature

> **bulkInsert**(`entities`): `Promise`\<`any`[]\>

Defined in: [src/lib/repository/application/repository.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L10)

##### Parameters

###### entities

`TEntity`[]

##### Returns

`Promise`\<`any`[]\>

#### Call Signature

> **bulkInsert**(`entities`, `include`): `Promise`\<`any`[]\>

Defined in: [src/lib/repository/application/repository.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L11)

##### Parameters

###### entities

`TEntity`[]

###### include

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`any`[]\>

#### Call Signature

> **bulkInsert**(`entities`, `include?`): `Promise`\<`any`[]\>

Defined in: [src/lib/repository/application/repository.ts:12](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L12)

##### Parameters

###### entities

`TEntity`[]

###### include?

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`any`[]\>

***

### bulkMerge()

#### Call Signature

> **bulkMerge**(`entities`): `Promise`\<`any`[]\>

Defined in: [src/lib/repository/application/repository.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L32)

##### Parameters

###### entities

`TEntity`[]

##### Returns

`Promise`\<`any`[]\>

#### Call Signature

> **bulkMerge**(`entities`, `include`): `Promise`\<`any`[]\>

Defined in: [src/lib/repository/application/repository.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L33)

##### Parameters

###### entities

`TEntity`[]

###### include

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`any`[]\>

#### Call Signature

> **bulkMerge**(`entities`, `include?`): `Promise`\<`any`[]\>

Defined in: [src/lib/repository/application/repository.ts:34](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L34)

##### Parameters

###### entities

`TEntity`[]

###### include?

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`any`[]\>

***

### delete()

#### Call Signature

> **delete**(`entity`): `Promise`\<`number`\>

Defined in: [src/lib/repository/application/repository.ts:36](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L36)

##### Parameters

###### entity

`TEntity`

##### Returns

`Promise`\<`number`\>

#### Call Signature

> **delete**(`entity`, `include`): `Promise`\<`number`\>

Defined in: [src/lib/repository/application/repository.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L37)

##### Parameters

###### entity

`TEntity`

###### include

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`number`\>

#### Call Signature

> **delete**(`entity`, `include?`): `Promise`\<`number`\>

Defined in: [src/lib/repository/application/repository.ts:38](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L38)

##### Parameters

###### entity

`TEntity`

###### include?

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`number`\>

***

### deleteAll()

> **deleteAll**(`data`, `filter?`, `include?`): `Promise`\<`number`\>

Defined in: [src/lib/repository/application/repository.ts:44](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L44)

#### Parameters

##### data

`any`

##### filter?

(`value`, `index`, `array`) => `unknown`

##### include?

(`value`, `index`, `array`) => `unknown`

#### Returns

`Promise`\<`number`\>

***

### distinct()

> **distinct**(`data`, `filter?`, `include?`): `Promise`\<`any`[]\>

Defined in: [src/lib/repository/application/repository.ts:54](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L54)

#### Parameters

##### data

`any`

##### filter?

(`value`, `index`, `array`) => `unknown`

##### include?

(`value`, `index`, `array`) => `unknown`

#### Returns

`Promise`\<`any`[]\>

***

### execute()

> **execute**(`query`, `data?`): `Promise`\<`any`\>

Defined in: [src/lib/repository/application/repository.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L5)

#### Parameters

##### query

`string`

##### data?

`any`

#### Returns

`Promise`\<`any`\>

***

### first()

> **first**(`data`, `filter?`, `include?`): `Promise`\<`null` \| `TEntity`\>

Defined in: [src/lib/repository/application/repository.ts:59](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L59)

#### Parameters

##### data

`any`

##### filter?

(`value`, `index`, `array`) => `unknown`

##### include?

(`value`, `index`, `array`) => `unknown`

#### Returns

`Promise`\<`null` \| `TEntity`\>

***

### insert()

#### Call Signature

> **insert**(`entity`): `Promise`\<`any`\>

Defined in: [src/lib/repository/application/repository.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L6)

##### Parameters

###### entity

`TEntity`

##### Returns

`Promise`\<`any`\>

#### Call Signature

> **insert**(`entity`, `include`): `Promise`\<`any`\>

Defined in: [src/lib/repository/application/repository.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L7)

##### Parameters

###### entity

`TEntity`

###### include

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`any`\>

#### Call Signature

> **insert**(`entity`, `include?`): `Promise`\<`any`\>

Defined in: [src/lib/repository/application/repository.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L8)

##### Parameters

###### entity

`TEntity`

###### include?

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`any`\>

***

### last()

> **last**(`data`, `filter?`, `include?`): `Promise`\<`null` \| `TEntity`\>

Defined in: [src/lib/repository/application/repository.ts:64](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L64)

#### Parameters

##### data

`any`

##### filter?

(`value`, `index`, `array`) => `unknown`

##### include?

(`value`, `index`, `array`) => `unknown`

#### Returns

`Promise`\<`null` \| `TEntity`\>

***

### list()

> **list**(`data`, `filter?`, `include?`): `Promise`\<`TEntity`[]\>

Defined in: [src/lib/repository/application/repository.ts:49](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L49)

#### Parameters

##### data

`any`

##### filter?

(`value`, `index`, `array`) => `unknown`

##### include?

(`value`, `index`, `array`) => `unknown`

#### Returns

`Promise`\<`TEntity`[]\>

***

### merge()

#### Call Signature

> **merge**(`entity`): `Promise`\<`number`\>

Defined in: [src/lib/repository/application/repository.ts:28](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L28)

##### Parameters

###### entity

`TEntity`

##### Returns

`Promise`\<`number`\>

#### Call Signature

> **merge**(`entity`, `include`): `Promise`\<`number`\>

Defined in: [src/lib/repository/application/repository.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L29)

##### Parameters

###### entity

`TEntity`

###### include

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`number`\>

#### Call Signature

> **merge**(`entity`, `include?`): `Promise`\<`number`\>

Defined in: [src/lib/repository/application/repository.ts:30](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L30)

##### Parameters

###### entity

`TEntity`

###### include?

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`number`\>

***

### query()

> **query**(): [`Queryable`](../classes/Queryable.md)\<`TQuery`\>

Defined in: [src/lib/repository/application/repository.ts:69](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L69)

#### Returns

[`Queryable`](../classes/Queryable.md)\<`TQuery`\>

***

### update()

#### Call Signature

> **update**(`entity`): `Promise`\<`number`\>

Defined in: [src/lib/repository/application/repository.ts:14](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L14)

##### Parameters

###### entity

`TEntity`

##### Returns

`Promise`\<`number`\>

#### Call Signature

> **update**(`entity`, `include`): `Promise`\<`number`\>

Defined in: [src/lib/repository/application/repository.ts:15](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L15)

##### Parameters

###### entity

`TEntity`

###### include

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`number`\>

#### Call Signature

> **update**(`entity`, `include?`): `Promise`\<`number`\>

Defined in: [src/lib/repository/application/repository.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L16)

##### Parameters

###### entity

`TEntity`

###### include?

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`number`\>

***

### updateAll()

> **updateAll**(`data`, `map`, `filter?`, `include?`): `Promise`\<`number`\>

Defined in: [src/lib/repository/application/repository.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L22)

#### Parameters

##### data

`any`

##### map

(`value`) => `unknown`

##### filter?

(`value`, `index`, `array`) => `unknown`

##### include?

(`value`, `index`, `array`) => `unknown`

#### Returns

`Promise`\<`number`\>

***

### upsert()

#### Call Signature

> **upsert**(`entity`): `Promise`\<`number`\>

Defined in: [src/lib/repository/application/repository.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L18)

##### Parameters

###### entity

`TEntity`

##### Returns

`Promise`\<`number`\>

#### Call Signature

> **upsert**(`entity`, `include`): `Promise`\<`number`\>

Defined in: [src/lib/repository/application/repository.ts:19](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L19)

##### Parameters

###### entity

`TEntity`

###### include

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`number`\>

#### Call Signature

> **upsert**(`entity`, `include?`): `Promise`\<`number`\>

Defined in: [src/lib/repository/application/repository.ts:20](https://github.com/lambda-orm/lambdaorm-base/blob/54d568062b637a6aed5442a048b140146d1f573b/src/lib/repository/application/repository.ts#L20)

##### Parameters

###### entity

`TEntity`

###### include?

(`value`, `index`, `array`) => `unknown`

##### Returns

`Promise`\<`number`\>
