import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ProjectEntity } from '../Projects/ProjectEntity';

@Entity({ name: 'project_watt' })
export class ProjectWattEntity {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProjectEntity, (project) => project.watts)
  @JoinColumn({ name: 'project_id', referencedColumnName: 'id' })
  project: ProjectEntity;

  @ApiProperty({ example: '4500' })
  @Column({ type: 'real' })
  watts: number;

  @ApiProperty({ example: '80' })
  @Column({ type: 'real' })
  costs: number;

  @ApiProperty({ example: '2024-07-23T23:50:06.000Z' })
  @Column({ name: 'produced_at', type: 'datetime' })
  producedAt: Date;

  @ApiProperty({ example: '2024-07-23T23:50:06.000Z' })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ example: '2024-07-23T23:50:06.000Z' })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
