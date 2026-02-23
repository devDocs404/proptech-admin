import { db } from "@proptech-admin/db";
import { account, session, user } from "@proptech-admin/db/schema/auth";
import { env } from "@proptech-admin/env/server";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: { user, account, session },
  }),

  trustedOrigins: [env.CORS_ORIGIN],

  emailAndPassword: {
    enabled: true,
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
      },
    },
  },

  plugins: [nextCookies()],
});
