import { router } from '@/server/trpc'
import { fetch } from '@/server/routers/commands/fetch'
import { create } from '@/server/routers/commands/create'

export const appRouter = router({
    fetchCommands: fetch,
    createCommand: create
})

export type AppRouter = typeof appRouter
