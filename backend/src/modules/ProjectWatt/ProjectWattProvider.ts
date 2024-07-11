import { DataSource } from 'typeorm';
import { ProjectWattEntity } from './ProjectWattEntity';

export const projectWattProvider = [
  {
    provide: ProjectWattEntity.name,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProjectWattEntity),
    inject: [DataSource.name],
  },
];
