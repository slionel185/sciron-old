import { z } from 'zod'

import { procedure } from '@/server/trpc'
import { prisma } from '@/utilities/prisma'

export const deleteById = procedure
    .input(
        z.object({
            id: z.string()
        })
    )
    .mutation(async (opts) => {
        const deleted = await prisma.command.delete({
            where: {
                id: opts.input.id
            }
        })

        return deleted.id
    })