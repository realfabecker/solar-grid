import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1721263757751 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`    
        CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR NOT NULL,
            email VARCHAR NOT NULL,
            password VARCHAR NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`);
    await queryRunner.query(`
        CREATE UNIQUE INDEX idx_uq_users_email ON users (email);
    `);

    await queryRunner.query(`    
        CREATE TABLE projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
    await queryRunner.query(`
        CREATE UNIQUE INDEX idx_uq_projects_name ON projects (name);
    `);

    await queryRunner.query(`
        CREATE TABLE user_project (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            project_id INTEGER NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users (id),
            FOREIGN KEY (project_id) REFERENCES projects (id)
        );
    `);
    await queryRunner.query(
      `CREATE INDEX idx_user_project_user_id on user_project (user_id);`,
    );
    await queryRunner.query(
      `CREATE INDEX idx_user_project_project_id on user_project (project_id); `,
    );

    await queryRunner.query(`
        CREATE TABLE project_watt (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            project_id INTEGER NOT NULL,
            watts NUMERIC NOT NULL,
            costs numeric NOT NULL,
            produced_at TIMESTAMP NOT NULL, 
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (project_id) REFERENCES projects (id)                                
        )
    `);
    await queryRunner.query(`
        CREATE INDEX idx_project_watt_project_id_produced_at on project_watt (project_id, produced_at);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS users;
    `);
    await queryRunner.query(`
      DROP TABLE IF EXISTS projects;
    `);
    await queryRunner.query(`
      DROP TABLE IF EXISTS user_project;
    `);
    await queryRunner.query(`
      DROP TABLE IF EXISTS project_watt;
    `);
  }
}
