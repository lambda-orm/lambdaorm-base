[Lambda ORM](../README.md) / Logger

# Class: Logger

## Table of contents

### Constructors

- [constructor](Logger.md#constructor)

### Methods

- [log](Logger.md#log)

## Constructors

### constructor

• **new Logger**(): [`Logger`](Logger.md)

#### Returns

[`Logger`](Logger.md)

## Methods

### log

▸ **log**(`message`, `level?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `any` | `undefined` |
| `level` | [`LogLevel`](../enums/LogLevel.md) | `LogLevel.INFO` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/shared/application/ports/logger.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/003144648abf70422862859950af236b7fb049f7/src/lib/shared/application/ports/logger.ts#L7)
