import { Body, Controller, Inject, Post } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { UserService } from 'src/module/user/service/user.service';
import { Logger } from 'winston';
import { NotificationDto } from '../dto/notification.dto';
import { NotificationService } from '../service/notification.service';

@Controller()
export class NotificationController {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
        private userService: UserService,
        private notificationService: NotificationService,
    ) {}

    @Post('/send-notification')
    async sendNotificationToUSerController(
        @Body() notificationInfo: NotificationDto,
    ) {
        this.logger.info('NotificationController :: send-notification', {
            notificationInfo,
        });

        const senderId = notificationInfo?.notificationSenderID;
        const receiverId = notificationInfo?.notificationReceiverID;

        const senderInfo = await this.userService.getUserById(senderId);
        const receiverInfo = await this.userService.getUserById(receiverId);

        const body = `${senderInfo.name} has pinged ${receiverInfo.name}`;

        return await this.notificationService.sendNotification({
            message: { title: 'User Pinged', body },
            tokens: [receiverInfo?.fcmToken],
        });
    }
}
