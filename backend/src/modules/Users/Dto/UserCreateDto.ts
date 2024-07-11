import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @ApiProperty({ required: true, example: 'Solar Man' })
  @IsString()
  name: string;

  @ApiProperty({ required: true, example: 'Solar@!2345' })
  @IsString()
  password: string;

  @ApiProperty({ required: true, example: 'solar@mail.com' })
  @IsEmail()
  email: string;
}
