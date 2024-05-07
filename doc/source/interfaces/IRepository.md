[Lambda ORM](../README.md) / IRepository

# Interface: IRepository\<TEntity, TQuery\>

## Type parameters

| Name |
| :------ |
| `TEntity` |
| `TQuery` |

## Table of contents

### Methods

- [bulkDelete](IRepository.md#bulkdelete)
- [bulkInsert](IRepository.md#bulkinsert)
- [bulkMerge](IRepository.md#bulkmerge)
- [delete](IRepository.md#delete)
- [deleteAll](IRepository.md#deleteall)
- [distinct](IRepository.md#distinct)
- [execute](IRepository.md#execute)
- [first](IRepository.md#first)
- [insert](IRepository.md#insert)
- [last](IRepository.md#last)
- [list](IRepository.md#list)
- [merge](IRepository.md#merge)
- [query](IRepository.md#query)
- [update](IRepository.md#update)
- [updateAll](IRepository.md#updateall)
- [upsert](IRepository.md#upsert)

## Methods

### bulkDelete

▸ **bulkDelete**(`entities`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | `TEntity`[] |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[src/lib/repository/application/repository.ts:40](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L40)

▸ **bulkDelete**(`entities`, `include`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | `TEntity`[] |
| `include` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[src/lib/repository/application/repository.ts:41](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L41)

▸ **bulkDelete**(`entities`, `include?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | `TEntity`[] |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[src/lib/repository/application/repository.ts:42](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L42)

___

### bulkInsert

▸ **bulkInsert**(`entities`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | `TEntity`[] |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[src/lib/repository/application/repository.ts:10](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L10)

▸ **bulkInsert**(`entities`, `include`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | `TEntity`[] |
| `include` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[src/lib/repository/application/repository.ts:11](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L11)

▸ **bulkInsert**(`entities`, `include?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | `TEntity`[] |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[src/lib/repository/application/repository.ts:12](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L12)

___

### bulkMerge

▸ **bulkMerge**(`entities`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | `TEntity`[] |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[src/lib/repository/application/repository.ts:32](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L32)

▸ **bulkMerge**(`entities`, `include`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | `TEntity`[] |
| `include` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[src/lib/repository/application/repository.ts:33](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L33)

▸ **bulkMerge**(`entities`, `include?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | `TEntity`[] |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[src/lib/repository/application/repository.ts:34](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L34)

___

### delete

▸ **delete**(`entity`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/lib/repository/application/repository.ts:36](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L36)

▸ **delete**(`entity`, `include`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `include` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/lib/repository/application/repository.ts:37](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L37)

▸ **delete**(`entity`, `include?`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/lib/repository/application/repository.ts:38](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L38)

___

### deleteAll

▸ **deleteAll**(`data`, `filter?`, `include?`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `filter?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/lib/repository/application/repository.ts:44](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L44)

___

### distinct

▸ **distinct**(`data`, `filter?`, `include?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `filter?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[src/lib/repository/application/repository.ts:54](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L54)

___

### execute

▸ **execute**(`query`, `data?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `data?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/lib/repository/application/repository.ts:5](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L5)

___

### first

▸ **first**(`data`, `filter?`, `include?`): `Promise`\<``null`` \| `TEntity`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `filter?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<``null`` \| `TEntity`\>

#### Defined in

[src/lib/repository/application/repository.ts:59](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L59)

___

### insert

▸ **insert**(`entity`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/lib/repository/application/repository.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L6)

▸ **insert**(`entity`, `include`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `include` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/lib/repository/application/repository.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L7)

▸ **insert**(`entity`, `include?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/lib/repository/application/repository.ts:8](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L8)

___

### last

▸ **last**(`data`, `filter?`, `include?`): `Promise`\<``null`` \| `TEntity`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `filter?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<``null`` \| `TEntity`\>

#### Defined in

[src/lib/repository/application/repository.ts:64](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L64)

___

### list

▸ **list**(`data`, `filter?`, `include?`): `Promise`\<`TEntity`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `filter?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`TEntity`[]\>

#### Defined in

[src/lib/repository/application/repository.ts:49](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L49)

___

### merge

▸ **merge**(`entity`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/lib/repository/application/repository.ts:28](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L28)

▸ **merge**(`entity`, `include`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `include` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/lib/repository/application/repository.ts:29](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L29)

▸ **merge**(`entity`, `include?`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/lib/repository/application/repository.ts:30](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L30)

___

### query

▸ **query**(): [`Queryable`](../classes/Queryable.md)\<`TQuery`\>

#### Returns

[`Queryable`](../classes/Queryable.md)\<`TQuery`\>

#### Defined in

[src/lib/repository/application/repository.ts:69](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L69)

___

### update

▸ **update**(`entity`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/lib/repository/application/repository.ts:14](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L14)

▸ **update**(`entity`, `include`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `include` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/lib/repository/application/repository.ts:15](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L15)

▸ **update**(`entity`, `include?`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/lib/repository/application/repository.ts:16](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L16)

___

### updateAll

▸ **updateAll**(`data`, `map`, `filter?`, `include?`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `map` | (`value`: `TEntity`) => `unknown` |
| `filter?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/lib/repository/application/repository.ts:22](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L22)

___

### upsert

▸ **upsert**(`entity`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/lib/repository/application/repository.ts:18](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L18)

▸ **upsert**(`entity`, `include`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `include` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/lib/repository/application/repository.ts:19](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L19)

▸ **upsert**(`entity`, `include?`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/lib/repository/application/repository.ts:20](https://github.com/lambda-orm/lambdaorm-base/blob/f0d71aa10e836415abad81a08fda57f8dc5c26a5/src/lib/repository/application/repository.ts#L20)
