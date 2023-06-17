import type { NextAuthOptions } from 'next-auth'
import type { Adapter } from 'next-auth/adapters'

import NextAuth from 'next-auth/next'
import { PrismaAdapter } from '@auth/prisma-adapter'
import TwitchProvider from 'next-auth/providers/twitch'

import { env } from '@/utilities/env'
import { prisma } from '@/utilities/prisma'

export const authOptions: NextAuthOptions = {
    callbacks: {
        session: ({ session, user }) => ({
            ...session,
            user: {
                ...session.user,
                id: user.id,
            },
        }),
    },
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        TwitchProvider({
            clientId: env.TWITCH_CLIENT_ID,
            clientSecret: env.TWITCH_CLIENT_SECRET,
        }),
    ],
}

export default NextAuth(authOptions)
