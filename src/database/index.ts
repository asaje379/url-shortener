import postgres from 'postgres';
import { env } from '../config/env.config';
import { setupDatabase } from './setup';

export async function initDatabaseConfigs() {
  const sql = postgres(env.DATABASE_URL);
  await setupDatabase(sql);
}
