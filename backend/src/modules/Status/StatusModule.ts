import { Module } from '@nestjs/common';
import { StatusController } from './StatusController';

@Module({ controllers: [StatusController] })
export class StatusModule {}
