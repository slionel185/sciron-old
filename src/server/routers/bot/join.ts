import { z } from 'zod'

import { procedure } from '@/server/trpc'

export const join = procedure
    .input(
        z.object({
            channel: z.string()
        })
    )
    .query(async (opts) => {
        const res = await fetch('https://bot.sciron.app/api/v1/bot/action/join', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                channel: opts.input.channel
            })
        })

        const data = res.json()
        return data
    })