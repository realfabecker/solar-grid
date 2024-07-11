import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './UserEntity';
import { plainToInstance } from 'class-transformer';
import { UserCreateDto } from './Dto/UserCreateDto';
import { UserQueryDto } from './Dto/UserQueryDto';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserEntity.name)
    private readonly projectRepository: Repository<UserEntity>,
  ) {}

  async create(dto: UserCreateDto): Promise<UserEntity> {
    const project = plainToInstance(UserEntity, dto);
    const res = await this.projectRepository.insert(project);
    return this.findById(res.identifiers[0].id);
  }

  async findById(id: number): Promise<UserEntity> {
    return this.projectRepository.findOneBy({ id });
  }

  async findAll(dto: UserQueryDto): Promise<UserEntity[]> {
    return this.projectRepository.find({
      skip: dto.offset,
      take: dto.limit - 1,
    });
  }

  async count(): Promise<number> {
    return this.projectRepository.count();
  }

  async deleteById(id: number): Promise<void> {
    await this.projectRepository.delete({ id });
  }
}
