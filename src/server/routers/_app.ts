import { router } from '@/server/trpc'
import { fetch } from '@/server/routers/commands/fetch'
import { create } from '@/server/routers/commands/create'
import { update } from '@/server/routers/commands/update'
import { fetchById } from '@/server/routers/commands/fetchById'
import { deleteById } from '@/server/routers/commands/deleteById'

export const appRouter = router({
    fetchCommands: fetch,
    createCommand: create,
    updateCommandById: update,
    fetchCommandById: fetchById,
    deleteCommandById: deleteById
})

export type AppRouter = typeof appRouter
