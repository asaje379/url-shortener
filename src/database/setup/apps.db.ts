import { Sql } from 'postgres';

export async function setupAppsTable(sql: Sql) {
  await sql`
    CREATE TABLE IF NOT EXISTS apps (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      api_key VARCHAR(128) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
}
