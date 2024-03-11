import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Post('')
    async addUser(@Req() req: Request, @Body() userDto: UserDto) {
        return await this.userService.addUser(userDto);
    }

    @Get('')
    async getAllUsers() {
        return this.userService.getAllUser();
    }
}
