import { Global, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [
    {
      provide: DataSource.name,
      useFactory: async (configService: ConfigService) => {
        const config = configService.get('typeorm');
        return new DataSource(config).initialize();
      },
      inject: [ConfigService],
    },
  ],
  exports: [DataSource.name],
})
export class DatabaseModule {}
