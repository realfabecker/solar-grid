import {
  IsDate,
  IsDateString,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class ProjectWattCreateDto {
  project: number;

  @ApiProperty({ required: true, example: 4500 })
  @IsNotEmpty()
  @IsNumber()
  watts: string;

  @ApiProperty({ required: true, example: 80 })
  @IsNotEmpty()
  @IsNumber()
  costs: string;

  @ApiProperty({ required: true, example: '2023-03-25T14:35:20Z' })
  @Transform(({ value }) => new Date(value))
  @IsDate()
  producedAt: Date;
}
