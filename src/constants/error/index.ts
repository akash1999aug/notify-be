import { iErrorInfo } from 'src/utils/error/error.interface';

import * as AuthError from './auth.errors';
import * as CommonError from './common_error.constants';
import * as DatabaseError from './database_error.constant';
import * as EmailError from './email_error.constant';
import * as NotificationError from './notfication_error.constant';
import * as TokenError from './token.errors';

// Define error name
export const errorName = {
    ...CommonError.errorName,
    ...NotificationError.errorName,
    ...DatabaseError.errorName,
    ...EmailError.errorName,
    ...AuthError.errorName,
    ...TokenError.errorName,
};

// Error information
export const errorType: Record<string, iErrorInfo> = {
    ...CommonError.errorType,
    ...NotificationError.errorType,
    ...DatabaseError.errorType,
    ...EmailError.errorType,
    ...AuthError.errorType,
    ...TokenError.errorType,
};
