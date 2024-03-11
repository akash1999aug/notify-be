import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { FirebaseService } from '../push/service/firebase.service';

export type NotificationData = {
    message: { title: string; body: string };
    tokens: string[];
};

@Injectable()
export class NotificationService {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
        private firebaseService: FirebaseService,
    ) {}

    async sendNotification(notificationData: NotificationData) {
        this.logger.info('NotificationService :: send-notification', {
            notificationData,
        });

        await this.firebaseService.sendNotificationToUsers(
            notificationData?.message,
            notificationData?.tokens,
        );
    }
}
