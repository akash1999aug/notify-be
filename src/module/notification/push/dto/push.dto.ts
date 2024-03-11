import {
    IsArray,
    IsObject,
    IsOptional,
    IsString,
    isString,
} from 'class-validator';
import { DEVICES } from '../../../notification-manager/constants';

export class PushDto {
    @IsOptional()
    @IsArray()
    tokens?: TokenData[];

    @IsObject()
    payload: object;

    @IsOptional()
    @IsString()
    topic?: string;
}

export class TokenData {
    token: string;
    deviceType: string;
    constructor(token: string, deviceType: string) {
        this.token = token;
        this.deviceType = deviceType;
    }
}
