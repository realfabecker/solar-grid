import { Module } from '@nestjs/common';
import { ProjectWattController } from './ProjectWattController';
import { projectWattProvider } from './ProjectWattProvider';
import { ProjectWattService } from './ProjectWattService';

@Module({
  controllers: [ProjectWattController],
  providers: [...projectWattProvider, ProjectWattService],
})
export class ProjectWattModule {}
