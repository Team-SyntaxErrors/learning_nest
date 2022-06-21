import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ProfileController } from './profile/profile.controller';

@Module({
  controllers: [AuthController, ProfileController],
  providers: [AuthService]
})
export class AuthModule {}
