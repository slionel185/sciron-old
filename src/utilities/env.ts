import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
    client: {
        NEXT_PUBLIC_PARENT_URL: z.string()
    },
    server: {
        DATABASE_URL: z.string(),
        NEXTAUTH_URL: z.string().url(),
        NEXTAUTH_SECRET: z.string(),
        TWITCH_CLIENT_ID: z.string(),
        TWITCH_CLIENT_SECRET: z.string(),
    },
    runtimeEnv: {
        NEXT_PUBLIC_PARENT_URL: process.env.NEXTAUTH_URL,
        DATABASE_URL: process.env.DATABASE_URL,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
        TWITCH_CLIENT_SECRET: process.env.TWITCH_CLIENT_SECRET,
    },
})
