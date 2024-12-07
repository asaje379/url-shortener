import { Sql } from 'postgres';
import { setupAppsTable } from './apps.db';

export async function setupDatabase(sql: Sql) {
  await setupAppsTable(sql);
}
