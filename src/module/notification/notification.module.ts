import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '../user/user.module';
import { NotificationController } from './controller/notification.controller';
import { FirebaseService } from './push/service/firebase.service';
import { NotificationService } from './service/notification.service';

@Module({
    imports: [ConfigModule, UserModule],
    controllers: [NotificationController],
    providers: [NotificationService, FirebaseService],
    exports: [],
})
export class NotificationModule {}
