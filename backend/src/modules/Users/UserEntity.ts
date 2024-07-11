import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class UserEntity {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Solar Man' })
  @Column({ length: 255 })
  name: string;

  @ApiProperty({ example: 'solar@mail.com' })
  @Column({ length: 255 })
  email: string;

  @ApiProperty({ example: 'Solar@!2345' })
  @Column({ length: 255 })
  password: string;

  @ApiProperty({ example: '2024-07-23T23:50:06.000Z' })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ example: '2024-07-23T23:50:06.000Z' })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
