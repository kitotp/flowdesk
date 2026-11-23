import { Controller, Get, Query } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';

@Controller('workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Get()
  async getUserWorkspaces(@Query('userId') userId: number) {
    return this.workspacesService.getUserWorkspaces(userId);
  }
}
