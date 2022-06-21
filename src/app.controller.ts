import { UserService } from './_user/services/user.service';
import { Controller, Get } from "@nestjs/common";


@Controller()
export class AppController {

    constructor(private userService:UserService) {

    }

    @Get()
    index() {
        return this.userService.get();
    }
}