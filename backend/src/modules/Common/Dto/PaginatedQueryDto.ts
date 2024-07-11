import { IsNotEmpty, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PaginatedQueryDto {
  @ApiProperty({ required: true, example: 10 })
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @Max(50)
  limit: number;

  @ApiProperty({ required: true, example: 1 })
  @IsNotEmpty()
  @Min(1)
  @Transform(({ value }) => Number(value))
  offset: number;
}
