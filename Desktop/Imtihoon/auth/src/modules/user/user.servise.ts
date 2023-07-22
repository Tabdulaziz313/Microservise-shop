import { refreshSign, sign } from '@helpers';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { SignInRequest, SignUpRequest, SignUpResponse } from './interface';
import { User } from '@prisma/client';

@Injectable()
export class userService {
  readonly #_prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  // Sign In
  async signIn(payload: SignInRequest): Promise<SignUpResponse> {
    const user = await this.#_checkUser({
      username: payload.username,
      password: payload.password,
    });
    return {
      accessToken: await sign({ id: user.id }),
      refreshToken: await refreshSign({ id: user.id }),
    };
  }
  zz;

  // Sign Up

  async signUp(payload: SignUpRequest): Promise<SignUpResponse> {
    await this.#_checkExistingUser({ username: payload.username });

    const newUser = await this.#_prisma.user.create({
      data: {
        username: payload.username,
        password: payload.password,
      },
      select: {
        id: true,
      },
    });

    return {
      accessToken: sign({ id: newUser.id }),
      refreshToken: refreshSign({ id: newUser.id }),
    };
  }

  async #_checkUser(payload: {
    username: string;
    password?: string;
  }): Promise<Pick<User, 'id'>> {
    const user = await this.#_prisma.user.findFirst({
      where: {
        username: payload.username,
        password: payload.password,
        deletedAt: null,
      },
      select: {
        id: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      id: user.id,
    };
  }

  async #_checkExistingUser(payload: { username: string }): Promise<null> {
    const user = await this.#_prisma.user.findFirst({
      where: {
        username: payload.username,
        deletedAt: null,
      },
      select: {
        id: true,
      },
    });

    if (user) {
      throw new ConflictException('User already exists');
    }

    return null;
  }
}
