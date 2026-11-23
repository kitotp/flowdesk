import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class WorkspacesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserWorkspaces(userId: number) {
    return this.prismaService.workspace.findMany({
      where: {
        members: {
          some: {
            userId,
          },
        },
      },
    });
  }
}
