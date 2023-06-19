import { z } from 'zod'

import { procedure } from '@/server/trpc'
import { prisma } from '@/utilities/prisma'

export const create = procedure
    .input(
        z.object({
            userId: z.string(),
            name: z.string(),
            description: z.string(),
            commandType: z.enum([ 'REPLY', 'UTILITY', 'MODERATION' ]),
            args: z.string().array()
        })
    )
    .mutation((opts) => {
        const command = prisma.command.create({
            data: {
                userId: opts.input.userId,
                name: opts.input.name,
                description: opts.input.description,
                commandType: opts.input.commandType,
                args: opts.input.args
            }
        })

        return command
    })