import { env } from "~/env";
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

config({ path: '.env' }); // or .env.local

const client = postgres(env.DATABASE_URL);
export const db = drizzle({ client });

