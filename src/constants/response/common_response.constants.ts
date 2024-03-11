import { HttpStatus } from '@nestjs/common';
import { iResponseStatusMessage } from 'src/utils/response/response.interface';

export const responseName = {
    SUCESS : 'SUCESS',
    NOTIFIED : 'NOTIFIED',
    USER_CREATED: 'USER_CREATED',
    EMAIL_SENT: 'EMAIL_SENT',
    PUSH_SENT : 'PUSH_SENT',
    SMS_SENT : 'SMS_SENT',
    ADDED : 'ADDED',
    UPDATED : 'UPDATED',
    DELETED : 'DELETED'
};

export const responseInfo: Record<string, iResponseStatusMessage> = {
    USER_CREATED: {
        message: 'User created successfully',
        statusCode: HttpStatus.CREATED,
    },
};
