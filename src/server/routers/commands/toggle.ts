import { z } from 'zod'

import { procedure } from '@/server/trpc'
import { prisma } from '@/utilities/prisma'

export const toggle = procedure
    .input(
        z.object({
            id: z.string(),
            active: z.boolean()
        })
    )
    .mutation(async (opts) => {
        const updatedCommand = await prisma.command.update({
            where: {
                id: opts.input.id
            },
            data: {
                active: opts.input.active
            }
        })
    })