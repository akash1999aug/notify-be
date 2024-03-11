import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    INVALID_PUSH_TOKEN: 'INVALID_PUSH_TOKEN',
    PUSH_SERVICE_MISSING_TOKEN_TOPIC: 'PUSH_SERVICE_MISSING_TOKEN_TOPIC',
};

export const errorType = {
    INVALID_PUSH_TOKEN: {
        message: 'The token is not valid for this operation',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.INVALID_TOKEN,
    },

    PUSH_SERVICE_MISSING_TOKEN_TOPIC: {
        message: "The payload doesn't have target tokens or topic",
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.INVALID_TOKEN,
    },
};
