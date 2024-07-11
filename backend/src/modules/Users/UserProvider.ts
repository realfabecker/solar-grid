import { DataSource } from 'typeorm';
import { UserEntity } from './UserEntity';

export const userProvider = [
  {
    provide: UserEntity.name,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserEntity),
    inject: [DataSource.name],
  },
];
