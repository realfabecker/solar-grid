import { DataSource } from 'typeorm';
import { ProjectEntity } from './ProjectEntity';

export const projectProvider = [
  {
    provide: ProjectEntity.name,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProjectEntity),
    inject: [DataSource.name],
  },
];
