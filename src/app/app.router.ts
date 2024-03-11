import { DynamicModule, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { NotificationModule } from 'src/module/notification/notification.module';
import { UserModule } from 'src/module/user/user.module';

@Module({})
export class AppRouterModule {
    static register(): DynamicModule {
        return {
            module: AppRouterModule,
            imports: [
                UserModule,
                NotificationModule,
                RouterModule.register([
                    { path: 'user', module: UserModule },
                    {
                        path: 'notify',
                        module: NotificationModule,
                    },
                ]),
            ],
        };
    }
}
