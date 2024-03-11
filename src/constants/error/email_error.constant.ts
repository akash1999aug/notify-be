import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    EMAIL_SEND_FAILED: 'EMAIL_SEND_FAILED',
};

export const errorType = {
    EMAIL_SEND_FAILED: {
        message: 'Send Email failed',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.EMAIL_SEND_FAILED,
    },
};
