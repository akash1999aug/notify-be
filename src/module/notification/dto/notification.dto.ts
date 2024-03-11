import { IsNotEmpty } from 'class-validator';

export class NotificationDto {
    @IsNotEmpty()
    public notificationSenderID: string;

    @IsNotEmpty()
    public notificationReceiverID: string;
}
