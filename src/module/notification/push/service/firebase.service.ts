import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import admin, { FirebaseError } from 'firebase-admin';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { NotificationData } from '../../service/notification.service';

@Injectable()
export class FirebaseService {
    firebaseAdmin: admin.app.App;
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
        private configService: ConfigService,
    ) {
        const serviceDetails = {
            projectId: this.configService.get(
                'firebase.notification.projectId',
            ),
            privateKey: this.configService.get(
                'firebase.notification.privateKey',
            ),
            clientEmail: this.configService.get(
                'firebase.notification.clientEmail',
            ),
        };

        this.firebaseAdmin = admin.initializeApp({
            credential: admin.credential.cert(serviceDetails),
        });
        console.log('firebase connected..........');
    }

    async sendNotificationToUsers(
        notificationInfo: NotificationData['message'],
        tokens: string[],
    ) {
        this.logger.info('FirebaseService :: sendNotificationToUsers', {
            notificationInfo,
            tokens,
        });

        const payload = {
            tokens,
            notification: {
                title: notificationInfo.title,
                body: notificationInfo.body,
            },
        };

        try {
            const result = await this.firebaseAdmin
                .messaging()
                .sendEachForMulticast(payload);

            console.log(result);
        } catch (error: any) {
            const firebaseError = error as FirebaseError;

            console.log(firebaseError);
        }

        return 1;
    }
}
