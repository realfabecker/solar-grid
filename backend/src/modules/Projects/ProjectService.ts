import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProjectEntity } from './ProjectEntity';
import { plainToInstance } from 'class-transformer';
import { ProjectCreateDto } from './Dto/ProjectCreateDto';
import { ProjectQueryDto } from './Dto/ProjectQueryDto';

@Injectable()
export class ProjectService {
  constructor(
    @Inject(ProjectEntity.name)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {}

  async create(dto: ProjectCreateDto): Promise<ProjectEntity> {
    const project = plainToInstance(ProjectEntity, dto);
    const res = await this.projectRepository.insert(project);
    return this.findById(res.identifiers[0].id);
  }

  async findById(id: number): Promise<ProjectEntity> {
    return this.projectRepository.findOneBy({ id });
  }

  async findAll(dto: ProjectQueryDto): Promise<ProjectEntity[]> {
    return this.projectRepository.find({
      take: dto.limit,
      skip: dto.offset - 1,
    });
  }

  async count(): Promise<number> {
    return this.projectRepository.count();
  }

  async deleteById(id: number): Promise<void> {
    await this.projectRepository.delete({ id });
  }
}
