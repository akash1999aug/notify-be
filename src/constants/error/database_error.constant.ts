import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    DB_VALIDATION_ERROR: 'DB_VALIDATION_ERROR',
};

export const errorType = {
    DB_VALIDATION_ERROR: {
        message: 'Data validation error',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.DB_VALIDATION_ERROR,
    },
};
