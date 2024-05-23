import entities from '../typeorm';
import { DataSource } from 'typeorm';
import 'dotenv/config';

export default new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password:'postgres',
  database: 'postgres',
  entities: entities,
  synchronize: false,
  migrations: ['./src/database/migrations/*.ts'],
  migrationsTableName: 'cs_migration_table',
});