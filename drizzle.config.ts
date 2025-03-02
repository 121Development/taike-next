// import { type Config } from "drizzle-kit";
//
// import { env } from "~/env";
//
// export default {
//   schema: "./src/server/db/schema.ts",
//   dialect: "sqlite",
//   dbCredentials: {
//     url: env.DATABASE_URL,
//   },
//   tablesFilter: ["taike-next_*"],
// } satisfies Config;
//

// drizzle.config.ts

import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "singlestore",
    schema: "<path/to/schema>",
    dbCredentials: {
        host: "svc-3482219c-a389-4079-b18b-d50662524e8a-shared-dml.aws-virginia-6.svc.singlestore.com",
        user: "user_14d5c",
        password: "YUuV6sInwm4ZZQk9zj9wjeRq5fZsYcUP",
        port: 3333,
	database: "TAIKE_DB",
	ssl: {},
    },
});
