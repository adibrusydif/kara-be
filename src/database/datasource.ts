import entities from '../typeorm';
import { DataSource } from 'typeorm';
import 'dotenv/config';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password:'postgres',
  database: 'kara',
  entities: entities,
  synchronize: false,
  migrations: ['./src/database/migrations/*.ts'],
  migrationsTableName: 'cs_migration_table',
});