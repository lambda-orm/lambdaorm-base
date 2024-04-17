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

[src/lib/shared/application/ports/logger.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/607e1fafed50a330f31ab43c22ecec31e40b455d/src/lib/shared/application/ports/logger.ts#L7)
