import { Injectable, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  createUser(email: string) {
    return this.prismaService.user.create({
      data: {
        email: email,
        name: 'test',
      },
    });
  }

  loginWithGmail(email: string) {
    return this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    });
  }
}
