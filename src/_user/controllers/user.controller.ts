import { UserService } from "./../services/user.service";
import { Body, Controller, Get, Param, ParseIntPipe, Post, Req } from "@nestjs/common";
import { UserDto } from "../dto/user.dto";


@Controller("/users")
export class UserController {

  constructor(private userService: UserService) {

  }


  @Get()
  index() {
    return this.userService.get();
  }

  @Post()
  store(@Body() userDto: UserDto) {
    return userDto;
  }

  @Get("/:id")
  show(@Param('id',ParseIntPipe) id: number) {
    return id;
  }
}