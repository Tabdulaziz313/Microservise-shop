import { Module } from '@nestjs/common';
import { userService } from './user.servise';
import { userController } from './user.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [userService, PrismaService],
  controllers: [userController],
})
export class UserModule {}
