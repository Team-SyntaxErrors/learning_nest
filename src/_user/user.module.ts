import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { Module } from '@nestjs/common';


@Module({
    controllers:[UserController],
    providers:[UserService],
    exports:[UserService],
})
export class UserModule {

}