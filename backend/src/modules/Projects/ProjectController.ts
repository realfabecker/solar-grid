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
import { ProjectService } from './ProjectService';
import { ProjectCreateDto } from './Dto/ProjectCreateDto';
import { ProjectEntity } from './ProjectEntity';
import {
  ApiExtraModels,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PaginatedApiOkResponse } from '../Common/Decorators/PaginatedApiOkResponse';
import { PaginatedDto } from '../Common/Dto/PaginatedDto';
import { ProjectQueryDto } from './Dto/ProjectQueryDto';

@Controller('projects')
@ApiTags('Projects')
@ApiExtraModels(PaginatedDto, ProjectEntity)
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED })
  @HttpCode(HttpStatus.CREATED)
  async createProject(@Body() dto: ProjectCreateDto) {
    return this.projectService.create(dto);
  }

  @Get()
  @PaginatedApiOkResponse(ProjectEntity)
  @ApiQuery({ name: 'limit', required: true, type: 'integer' })
  @ApiQuery({ name: 'offset', required: true, type: 'integer' })
  @HttpCode(HttpStatus.OK)
  async listProjects(@Query() qry: ProjectQueryDto) {
    const items = await this.projectService.findAll(qry);
    const count = await this.projectService.count();
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
  async findProjectById(@Param('id') id: number) {
    const project = await this.projectService.findById(id);
    if (!project) throw new NotFoundException();
    return project;
  }

  @Delete(':id')
  @ApiParam({ name: 'id', required: true, type: 'integer' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProjectById(@Param('id') id: number) {
    const project = await this.projectService.findById(id);
    if (!project) throw new NotFoundException();
    await this.projectService.deleteById(id);
  }
}
