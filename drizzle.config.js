/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: "postgresql://neondb_owner:Y8jvDQg7zGen@ep-ancient-dust-a5rnmp3u.us-east-2.aws.neon.tech/ai-content-generator?sslmode=require",
    }
};