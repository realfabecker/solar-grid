import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './UserService';
import { UserCreateDto } from './Dto/UserCreateDto';
import { UserEntity } from './UserEntity';
import {
  ApiExtraModels,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PaginatedApiOkResponse } from '../Common/Decorators/PaginatedApiOkResponse';
import { PaginatedDto } from '../Common/Dto/PaginatedDto';
import { UserQueryDto } from './Dto/UserQueryDto';

@Controller('users')
@ApiTags('Users')
@ApiExtraModels(PaginatedDto, UserEntity)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED })
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() dto: UserCreateDto) {
    return this.userService.create(dto);
  }

  @Get()
  @PaginatedApiOkResponse(UserEntity)
  @ApiQuery({ name: 'limit', required: true, type: 'integer' })
  @ApiQuery({ name: 'offset', required: true, type: 'integer' })
  @HttpCode(HttpStatus.OK)
  async listUsers(@Query() qry: UserQueryDto) {
    const items = await this.userService.findAll(qry);
    const count = await this.userService.count();
    return new PaginatedDto({
      items: items,
      total: count,
      limit: qry.limit,
      offset: qry.offset,
    });
  }

  @Get(':id')
  @ApiParam({ name: 'id', required: true, type: 'integer' })
  @ApiResponse({ status: HttpStatus.OK })
  @HttpCode(HttpStatus.OK)
  async findUserById(@Param('id') id: number) {
    const user = await this.userService.findById(id);
    if (!user) throw new NotFoundException();
    return user;
  }

  @Delete(':id')
  @ApiParam({ name: 'id', required: true, type: 'integer' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUserById(@Param('id') id: number) {
    const user = await this.userService.findById(id);
    if (!user) throw new NotFoundException();
    await this.userService.deleteById(id);
  }
}
