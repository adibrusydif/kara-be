import entities from '../typeorm';
import { DataSource } from 'typeorm';
import 'dotenv/config';

const hostProd = 'db'
const hostLocal = 'localhost'

export default new DataSource({
  type: 'postgres',
  host: hostProd,
  port: 5432,
  username: 'postgres',
  password:'postgres',
  database: 'postgres',
  entities: entities,
  synchronize: false,
  migrations: ['./src/database/migrations/*.ts'],
  migrationsTableName: 'cs_migration_table',
});