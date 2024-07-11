import { Module } from '@nestjs/common';
import { StatusModule } from './Status/StatusModule';
import { DatabaseModule } from './Database/DatabaseModule';
import { ConfigModule } from '@nestjs/config';
import { typeormConfig } from './Database/typeorm.config';
import { ProjectModule } from './Projects/ProjectModule';
import { UserModule } from './Users/UserModule';
import { ProjectWattModule } from './ProjectWatt/ProjectWattModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig],
    }),
    DatabaseModule,
    StatusModule,
    ProjectModule,
    ProjectWattModule,
    UserModule,
  ],
})
export class AppModule {}
