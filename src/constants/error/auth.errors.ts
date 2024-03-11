import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    AUTH_INVALID_ACCESS_TOKEN: 'AUTH_INVALID_ACCESS_TOKEN',
    AUTH_ACCESS_TOKEN_EXPIRE: 'AUTH_ACCESS_TOKEN_EXPIRE',
    AUTH_INVALID_REFRESH_TOKEN: 'AUTH_INVALID_REFRESH_TOKEN',
    USER_ALREADY_EXIST: 'USER_ALREADY_EXIST',
    INCORRECT_PASSWORD: 'INCORRECT_PASSWORD',
    USER_DOES_NOT_EXIST: 'USER_DOES_NOT_EXIST',
    INCORRECT_OTP: 'INCORRECT_OTP',
};

export const errorType = {
    AUTH_INVALID_ACCESS_TOKEN: {
        message: 'Invalid access token ',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.AUTH_INVALID_ACCESS_TOKEN,
    },
    AUTH_ACCESS_TOKEN_EXPIRE: {
        message: 'Access token expired',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.AUTH_ACCESS_TOKEN_EXPIRE,
    },
    AUTH_INVALID_REFRESH_TOKEN: {
        message: 'Invalid refresh token',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.AUTH_INVALID_REFRESH_TOKEN,
    },
    USER_ALREADY_EXIST: {
        message: 'User already exist',
        statusCode: HttpStatus.CONFLICT,
        errorCode: errorCode.USER_ALREADY_EXIST,
    },
    USER_DOES_NOT_EXIST: {
        message: 'User Does not exist',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.USER_DOES_NOT_EXIST,
    },
    INCORRECT_PASSWORD: {
        message: 'Incorrect password',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: errorCode.INCORRECT_PASSWORD,
    },
    INCORRECT_OTP: {
        message: 'Incorrect OTP',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: errorCode.INCORRECT_OTP,
    },
};
