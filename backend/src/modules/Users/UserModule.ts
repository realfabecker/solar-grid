import { Module } from '@nestjs/common';
import { UserController } from './UserController';
import { userProvider } from './UserProvider';
import { UserService } from './UserService';

@Module({
  controllers: [UserController],
  providers: [...userProvider, UserService],
})
export class UserModule {}
