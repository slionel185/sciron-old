import { z } from 'zod'

import { procedure } from '@/server/trpc'
import { prisma } from '@/utilities/prisma'

export const fetchById = procedure
    .input(
        z.object({
            commandId: z.string()
        })
    )
    .query((opts) => {
        const commands = prisma.command.findFirst({
            where: {
                id: opts.input.commandId
            }
        })

        return commands
    })