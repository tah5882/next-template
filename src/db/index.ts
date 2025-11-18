import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from '@/db/schema';

// ローカルのSQLiteファイルに接続
const client = createClient({ url: process.env.DB_FILE_NAME || 'file:dev.db' });

export const db = drizzle(client, { schema });