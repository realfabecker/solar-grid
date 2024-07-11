import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import driver from '@libsql/sqlite3';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

export const config: SqliteConnectionOptions = {
  type: 'sqlite',
  driver: driver,
  flags: 0x00000040,
  database: process.env.DATABASE_URL,
  migrationsTableName: 'migration_versions',
  entities: ['dist/**/*Entity{.ts,.js}'],
  migrations: ['dist/modules/Database/Migrations/*{.ts,.js}'],
  synchronize: false,
};

export const typeormConfig = registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
