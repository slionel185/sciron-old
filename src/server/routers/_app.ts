import { z } from 'zod'

import { procedure, router } from '@/server/trpc'

export const appRouter = router({})

export type AppRouter = typeof appRouter
