import { Module } from '@nestjs/common';
import ConfigModule from './config.module';
import { ErrorModule } from 'src/utils/error/error.module';
import { WinstonModule } from 'nest-winston';
import { DebuggerService } from 'src/utils/debugger/debugger.service';
import { DebuggerModule } from 'src/utils/debugger/debugger.module';
import { DatabaseModule } from 'src/database/database.module';
import { PaginationModule } from 'src/utils/pagination/pagination.module';
import { ServiceGatewayModule } from 'src/service-gateway/service_gateway.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigService } from '@nestjs/config';
import { ClientOpts } from 'redis';
@Module({
    imports: [
        // Config setup for environment file and values
        ConfigModule,

        // Winston setup for logging
        WinstonModule.forRootAsync({
            inject: [DebuggerService],
            imports: [DebuggerModule],
            useFactory: (debuggerService: DebuggerService) =>
                debuggerService.createLogger(),
        }),

        // Error Module
        ErrorModule,

        // Database Modules
        // DatabaseModule,

        // Pagination Modules
        PaginationModule,

        // ServiceGateway Module
        ServiceGatewayModule,

        // Redis setup
        // CacheModule.registerAsync<ClientOpts>({
        //     imports: [ConfigModule],
        //     inject: [ConfigService],
        //     isGlobal: true,
        //     useFactory: async (configService: ConfigService) => {
        //         const host = configService.get<string>('redis.url');
        //         const port = configService.get<string>('redis.port');
        //         const password = configService.get<string>('redis.password');

        //         return {
        //             store: redisStore,
        //             host: host,
        //             port: +port,
        //             password: password,
        //             options: {
        //                 stringify: true, // Disable JSON stringify for values
        //                 parse: true, // Disable JSON parse for retrieved values
        //             },
        //         };
        //     },
        // }),
    ],
})
export class CoreModule {}
