import { Injectable } from "@nestjs/common";


@Injectable()
export class UserService {
    get() {
        return {
            name : "Shakil Ahmmed",
            department:"CSE",
        };
    }
}