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
import { ProjectWattService } from './ProjectWattService';
import { ProjectWattEntity } from './ProjectWattEntity';
import {
  ApiExtraModels,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PaginatedApiOkResponse } from '../Common/Decorators/PaginatedApiOkResponse';
import { PaginatedDto } from '../Common/Dto/PaginatedDto';
import { ProjectWattQueryDto } from './Dto/ProjectWattQueryDto';
import { ProjectWattCreateDto } from './Dto/ProjectWattCreateDto';

@Controller()
@ApiTags('Project Watt')
@ApiExtraModels(PaginatedDto, ProjectWattEntity)
export class ProjectWattController {
  constructor(private readonly projectWattService: ProjectWattService) {}

  @Post('project/:project/watt')
  @ApiResponse({ status: HttpStatus.CREATED })
  @HttpCode(HttpStatus.CREATED)
  async createProjectWatt(
    @Param('project') project: number,
    @Body() dto: ProjectWattCreateDto,
  ) {
    return this.projectWattService.create({
      project,
      ...dto,
    });
  }

  @Get('project/:project/watt')
  @PaginatedApiOkResponse(ProjectWattEntity)
  @ApiQuery({ name: 'limit', required: true, type: 'integer' })
  @ApiQuery({ name: 'offset', required: true, type: 'integer' })
  @HttpCode(HttpStatus.OK)
  async listProjectWatt(@Query() qry: ProjectWattQueryDto) {
    const items = await this.projectWattService.findAll(qry);
    const count = await this.projectWattService.count();
    return new PaginatedDto({
      items: items,
      total: count,
      limit: qry.limit,
      offset: qry.offset,
    });
  }

  @Get('project/:project/watt/:id')
  @ApiParam({ name: 'id', required: true, type: 'integer' })
  @ApiResponse({ status: HttpStatus.OK })
  @HttpCode(HttpStatus.OK)
  async findProjectWattById(@Param('id') id: number) {
    const project = await this.projectWattService.findById(id);
    if (!project) throw new NotFoundException();
    return project;
  }

  @Delete('project/:project/watt/:id')
  @ApiParam({ name: 'id', required: true, type: 'integer' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProjectWattById(@Param('id') id: number) {
    const project = await this.projectWattService.findById(id);
    if (!project) throw new NotFoundException();
    await this.projectWattService.deleteById(id);
  }
}
