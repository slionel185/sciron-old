import { z } from 'zod'

import { procedure } from '@/server/trpc'
import { prisma } from '@/utilities/prisma'

export const fetch = procedure
    .input(
        z.object({
            userId: z.string()
        })
    )
    .query((opts) => {
        const commands = prisma.command.findMany({
            where: {
                userId: opts.input.userId
            },
            orderBy: [
                {
                    createdAt: 'asc'
                }
            ]
        })

        return commands
    })