import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProjectCreateDto {
  @ApiProperty({ required: true, example: 'Solar Power plant' })
  @IsString()
  name: string;
}
