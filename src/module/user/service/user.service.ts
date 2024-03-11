import { HttpException, Injectable } from '@nestjs/common';
import { User } from '../interface/user.interface';

@Injectable()
export class UserService {
    public users: User[] = [];

    // constructor() {}

    async addUser(userDto: Omit<User, 'id'>) {
        if (this.users.find((user) => user.fcmToken === userDto.fcmToken))
            throw new HttpException('User Already Exists', 400);

        this.users.push({ id: `${this.users.length}`, ...userDto });

        return this.users;
    }

    async getAllUser() {
        return this.users;
    }

    async getUserById(id: string) {
        return this.users.find((user) => user.id === id);
    }
}
