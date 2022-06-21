import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class UserDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  department?: string;

  // @IsInt()
  // age: number;
}
