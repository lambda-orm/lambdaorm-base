[**Lambda ORM**](../README.md)

***

[Lambda ORM](../README.md) / Logger

# Class: `abstract` Logger

Defined in: [src/lib/shared/domain/ports/logger.ts:6](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/domain/ports/logger.ts#L6)

## Constructors

### Constructor

> **new Logger**(): `Logger`

#### Returns

`Logger`

## Methods

### log()

> **log**(`message`, `level`): `Promise`\<`void`\>

Defined in: [src/lib/shared/domain/ports/logger.ts:7](https://github.com/lambda-orm/lambdaorm-base/blob/5f10bdc7d0f008296efbcbe89bc2bf1ed03aaaef/src/lib/shared/domain/ports/logger.ts#L7)

#### Parameters

##### message

`any`

##### level

[`LogLevel`](../enumerations/LogLevel.md) = `LogLevel.INFO`

#### Returns

`Promise`\<`void`\>
