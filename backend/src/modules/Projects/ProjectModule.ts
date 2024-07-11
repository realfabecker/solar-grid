import { Module } from '@nestjs/common';
import { ProjectController } from './ProjectController';
import { projectProvider } from './ProjectProvider';
import { ProjectService } from './ProjectService';

@Module({
  controllers: [ProjectController],
  providers: [...projectProvider, ProjectService],
})
export class ProjectModule {}
