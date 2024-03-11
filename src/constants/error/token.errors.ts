import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    RESET_TOKEN_EXPIRED: 'RESET_TOKEN_EXPIRED',
    RESET_TOKEN_INVALID: 'RESET_TOKEN_INVALID',
    OTP_TOKEN_INVALID: 'OTP_TOKEN_INVALID',
};

export const errorType = {
    RESET_TOKEN_EXPIRED: {
        message: 'Reset token has expired. Please request a new reset token.',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.RESET_TOKEN_EXPIRED,
    },
    RESET_TOKEN_INVALID: {
        message: 'Invalid Reset token',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.RESET_TOKEN_INVALID,
    },
    OTP_TOKEN_INVALID: {
        message: 'Invalid otp token',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.OTP_TOKEN_INVALID,
    },
};
