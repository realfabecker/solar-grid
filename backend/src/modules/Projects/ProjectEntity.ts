import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ProjectWattEntity } from '../ProjectWatt/ProjectWattEntity';

@Entity({ name: 'projects' })
export class ProjectEntity {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => ProjectWattEntity, (watt) => watt.project)
  watts: ProjectWattEntity[];

  @ApiProperty({ example: 'Solar Power Plant' })
  @Column({ length: 255 })
  name: string;

  @ApiProperty({ example: '2024-07-23T23:50:06.000Z' })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ example: '2024-07-23T23:50:06.000Z' })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
