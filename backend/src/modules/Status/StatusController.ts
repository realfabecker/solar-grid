import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('status')
@ApiTags('Status')
export class StatusController {
  @Get()
  async getStatus() {
    return 'healthy';
  }
}
