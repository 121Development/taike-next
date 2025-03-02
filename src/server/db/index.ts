// app.ts
                
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/singlestore";
import { createPool, type Pool } from "mysql2/promise";
import * as schema from "./schema";
import env from "./env";

cont globalForDb = globalThis as unknown as { conn: Pool | undefined };

const conn = {
    globalForDb.conn ?? 
    createPool({
        host: env.DATABASE_HOST,
        user: env.DATABASE_USER,
        password: env.DATABASE_PASSWORD,
        database: env.DATABASE_NAME,
        port: env.DATABASE_PORT,
        ssl: {},
        maxIdle: 0,
    })
}


const pool = mysql.createPool("singlestore://user_14d5c:YUuV6sInwm4ZZQk9zj9wjeRq5fZsYcUP@svc-3482219c-a389-4079-b18b-d50662524e8a-shared-dml.aws-virginia-6.svc.singlestore.com:3333/TAIKE_DB?ssl={}");
const db = drizzle({ client: pool });
