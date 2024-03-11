import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
