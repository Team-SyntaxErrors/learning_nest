import { UserService } from "./_user/services/user.service";
import { AppController } from "./app.controller";
import { UserModule } from "./_user/user.module";
import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { CategoryModule } from "./category/category.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./category/entities/category.entity";


@Module({
  controllers: [AppController],
  imports: [UserModule, AuthModule, CategoryModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "learning_nest",
      entities: [Category],
      synchronize: true
    })]
})
export class AppModule {

}
