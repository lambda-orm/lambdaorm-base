[**Lambda ORM**](../README.md) • **Docs**

***

[Lambda ORM](../README.md) / IRepository

# Interface: IRepository\<TEntity, TQuery\>

## Type parameters

• **TEntity**

• **TQuery**

## Methods

### bulkDelete()

#### bulkDelete(entities)

> **bulkDelete**(`entities`): `Promise`\<`any`[]\>

##### Parameters

• **entities**: `TEntity`[]

##### Returns

`Promise`\<`any`[]\>

##### Source

[src/lib/repository/application/repository.ts:40](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L40)

#### bulkDelete(entities, include)

> **bulkDelete**(`entities`, `include`): `Promise`\<`any`[]\>

##### Parameters

• **entities**: `TEntity`[]

• **include**

##### Returns

`Promise`\<`any`[]\>

##### Source

[src/lib/repository/application/repository.ts:41](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L41)

#### bulkDelete(entities, include)

> **bulkDelete**(`entities`, `include`?): `Promise`\<`any`[]\>

##### Parameters

• **entities**: `TEntity`[]

• **include?**

##### Returns

`Promise`\<`any`[]\>

##### Source

[src/lib/repository/application/repository.ts:42](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L42)

***

### bulkInsert()

#### bulkInsert(entities)

> **bulkInsert**(`entities`): `Promise`\<`any`[]\>

##### Parameters

• **entities**: `TEntity`[]

##### Returns

`Promise`\<`any`[]\>

##### Source

[src/lib/repository/application/repository.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L10)

#### bulkInsert(entities, include)

> **bulkInsert**(`entities`, `include`): `Promise`\<`any`[]\>

##### Parameters

• **entities**: `TEntity`[]

• **include**

##### Returns

`Promise`\<`any`[]\>

##### Source

[src/lib/repository/application/repository.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L11)

#### bulkInsert(entities, include)

> **bulkInsert**(`entities`, `include`?): `Promise`\<`any`[]\>

##### Parameters

• **entities**: `TEntity`[]

• **include?**

##### Returns

`Promise`\<`any`[]\>

##### Source

[src/lib/repository/application/repository.ts:12](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L12)

***

### bulkMerge()

#### bulkMerge(entities)

> **bulkMerge**(`entities`): `Promise`\<`any`[]\>

##### Parameters

• **entities**: `TEntity`[]

##### Returns

`Promise`\<`any`[]\>

##### Source

[src/lib/repository/application/repository.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L32)

#### bulkMerge(entities, include)

> **bulkMerge**(`entities`, `include`): `Promise`\<`any`[]\>

##### Parameters

• **entities**: `TEntity`[]

• **include**

##### Returns

`Promise`\<`any`[]\>

##### Source

[src/lib/repository/application/repository.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L33)

#### bulkMerge(entities, include)

> **bulkMerge**(`entities`, `include`?): `Promise`\<`any`[]\>

##### Parameters

• **entities**: `TEntity`[]

• **include?**

##### Returns

`Promise`\<`any`[]\>

##### Source

[src/lib/repository/application/repository.ts:34](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L34)

***

### delete()

#### delete(entity)

> **delete**(`entity`): `Promise`\<`number`\>

##### Parameters

• **entity**: `TEntity`

##### Returns

`Promise`\<`number`\>

##### Source

[src/lib/repository/application/repository.ts:36](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L36)

#### delete(entity, include)

> **delete**(`entity`, `include`): `Promise`\<`number`\>

##### Parameters

• **entity**: `TEntity`

• **include**

##### Returns

`Promise`\<`number`\>

##### Source

[src/lib/repository/application/repository.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L37)

#### delete(entity, include)

> **delete**(`entity`, `include`?): `Promise`\<`number`\>

##### Parameters

• **entity**: `TEntity`

• **include?**

##### Returns

`Promise`\<`number`\>

##### Source

[src/lib/repository/application/repository.ts:38](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L38)

***

### deleteAll()

> **deleteAll**(`data`, `filter`?, `include`?): `Promise`\<`number`\>

#### Parameters

• **data**: `any`

• **filter?**

• **include?**

#### Returns

`Promise`\<`number`\>

#### Source

[src/lib/repository/application/repository.ts:44](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L44)

***

### distinct()

> **distinct**(`data`, `filter`?, `include`?): `Promise`\<`any`[]\>

#### Parameters

• **data**: `any`

• **filter?**

• **include?**

#### Returns

`Promise`\<`any`[]\>

#### Source

[src/lib/repository/application/repository.ts:54](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L54)

***

### execute()

> **execute**(`query`, `data`?): `Promise`\<`any`\>

#### Parameters

• **query**: `string`

• **data?**: `any`

#### Returns

`Promise`\<`any`\>

#### Source

[src/lib/repository/application/repository.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L5)

***

### first()

> **first**(`data`, `filter`?, `include`?): `Promise`\<`null` \| `TEntity`\>

#### Parameters

• **data**: `any`

• **filter?**

• **include?**

#### Returns

`Promise`\<`null` \| `TEntity`\>

#### Source

[src/lib/repository/application/repository.ts:59](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L59)

***

### insert()

#### insert(entity)

> **insert**(`entity`): `Promise`\<`any`\>

##### Parameters

• **entity**: `TEntity`

##### Returns

`Promise`\<`any`\>

##### Source

[src/lib/repository/application/repository.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L6)

#### insert(entity, include)

> **insert**(`entity`, `include`): `Promise`\<`any`\>

##### Parameters

• **entity**: `TEntity`

• **include**

##### Returns

`Promise`\<`any`\>

##### Source

[src/lib/repository/application/repository.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L7)

#### insert(entity, include)

> **insert**(`entity`, `include`?): `Promise`\<`any`\>

##### Parameters

• **entity**: `TEntity`

• **include?**

##### Returns

`Promise`\<`any`\>

##### Source

[src/lib/repository/application/repository.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L8)

***

### last()

> **last**(`data`, `filter`?, `include`?): `Promise`\<`null` \| `TEntity`\>

#### Parameters

• **data**: `any`

• **filter?**

• **include?**

#### Returns

`Promise`\<`null` \| `TEntity`\>

#### Source

[src/lib/repository/application/repository.ts:64](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L64)

***

### list()

> **list**(`data`, `filter`?, `include`?): `Promise`\<`TEntity`[]\>

#### Parameters

• **data**: `any`

• **filter?**

• **include?**

#### Returns

`Promise`\<`TEntity`[]\>

#### Source

[src/lib/repository/application/repository.ts:49](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L49)

***

### merge()

#### merge(entity)

> **merge**(`entity`): `Promise`\<`number`\>

##### Parameters

• **entity**: `TEntity`

##### Returns

`Promise`\<`number`\>

##### Source

[src/lib/repository/application/repository.ts:28](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L28)

#### merge(entity, include)

> **merge**(`entity`, `include`): `Promise`\<`number`\>

##### Parameters

• **entity**: `TEntity`

• **include**

##### Returns

`Promise`\<`number`\>

##### Source

[src/lib/repository/application/repository.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L29)

#### merge(entity, include)

> **merge**(`entity`, `include`?): `Promise`\<`number`\>

##### Parameters

• **entity**: `TEntity`

• **include?**

##### Returns

`Promise`\<`number`\>

##### Source

[src/lib/repository/application/repository.ts:30](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L30)

***

### query()

> **query**(): [`Queryable`](../classes/Queryable.md)\<`TQuery`\>

#### Returns

[`Queryable`](../classes/Queryable.md)\<`TQuery`\>

#### Source

[src/lib/repository/application/repository.ts:69](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L69)

***

### update()

#### update(entity)

> **update**(`entity`): `Promise`\<`number`\>

##### Parameters

• **entity**: `TEntity`

##### Returns

`Promise`\<`number`\>

##### Source

[src/lib/repository/application/repository.ts:14](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L14)

#### update(entity, include)

> **update**(`entity`, `include`): `Promise`\<`number`\>

##### Parameters

• **entity**: `TEntity`

• **include**

##### Returns

`Promise`\<`number`\>

##### Source

[src/lib/repository/application/repository.ts:15](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L15)

#### update(entity, include)

> **update**(`entity`, `include`?): `Promise`\<`number`\>

##### Parameters

• **entity**: `TEntity`

• **include?**

##### Returns

`Promise`\<`number`\>

##### Source

[src/lib/repository/application/repository.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L16)

***

### updateAll()

> **updateAll**(`data`, `map`, `filter`?, `include`?): `Promise`\<`number`\>

#### Parameters

• **data**: `any`

• **map**

• **filter?**

• **include?**

#### Returns

`Promise`\<`number`\>

#### Source

[src/lib/repository/application/repository.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L22)

***

### upsert()

#### upsert(entity)

> **upsert**(`entity`): `Promise`\<`number`\>

##### Parameters

• **entity**: `TEntity`

##### Returns

`Promise`\<`number`\>

##### Source

[src/lib/repository/application/repository.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L18)

#### upsert(entity, include)

> **upsert**(`entity`, `include`): `Promise`\<`number`\>

##### Parameters

• **entity**: `TEntity`

• **include**

##### Returns

`Promise`\<`number`\>

##### Source

[src/lib/repository/application/repository.ts:19](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L19)

#### upsert(entity, include)

> **upsert**(`entity`, `include`?): `Promise`\<`number`\>

##### Parameters

• **entity**: `TEntity`

• **include?**

##### Returns

`Promise`\<`number`\>

##### Source

[src/lib/repository/application/repository.ts:20](https://github.com/lambda-orm/lambdaorm-base/blob/b218b3f63a52b1177feec1e7ed5eb0f37947c503/src/lib/repository/application/repository.ts#L20)
