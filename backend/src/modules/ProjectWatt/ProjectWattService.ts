import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProjectWattEntity } from './ProjectWattEntity';
import { plainToInstance } from 'class-transformer';
import { ProjectWattCreateDto } from './Dto/ProjectWattCreateDto';
import { ProjectWattQueryDto } from './Dto/ProjectWattQueryDto';

@Injectable()
export class ProjectWattService {
  constructor(
    @Inject(ProjectWattEntity.name)
    private readonly projectRepository: Repository<ProjectWattEntity>,
  ) {}

  async create(dto: ProjectWattCreateDto): Promise<ProjectWattEntity> {
    const project = plainToInstance(ProjectWattEntity, dto);
    const res = await this.projectRepository.insert(project);
    return this.findById(res.identifiers[0].id);
  }

  async findById(id: number): Promise<ProjectWattEntity> {
    return this.projectRepository.findOneBy({ id });
  }

  async findAll(dto: ProjectWattQueryDto): Promise<ProjectWattEntity[]> {
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
