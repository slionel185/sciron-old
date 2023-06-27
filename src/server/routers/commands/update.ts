import { z } from 'zod'

import { procedure } from '@/server/trpc'
import { prisma } from '@/utilities/prisma'

export const update = procedure
    .input(
        z.object({
            id: z.string(),
            name: z.string(),
            description: z.string(),
            commandType: z.enum(['REPLY', 'UTILITY', 'MODERATION']),
            args: z.string().array()
        })
    )
    .mutation(async (opts) => {
        const updatedCommand = await prisma.command.update({
            where: {
                id: opts.input.id
            },
            data: {
                name: opts.input.name,
                description: opts.input.description,
                commandType: opts.input.commandType,
                args: opts.input.args
            }
        })

        return updatedCommand
    })