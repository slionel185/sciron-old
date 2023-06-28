import { z } from 'zod'

import { procedure } from '@/server/trpc'

export const join = procedure
    .input(
        z.object({
            channel: z.string()
        })
    )
    .query(async (opts) => {
        const res = await fetch(`https://bot.sciron.app/trpc/joinChannel?input=${encodeURIComponent(JSON.stringify({ channelName: opts.input.channel }))}`, {
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