import type { AppRouter } from '@/server/routers/_app'

import { createTRPCNext } from '@trpc/next'
import { httpBatchLink } from '@trpc/client'

import getBaseUrl from '@/functions/getBaseUrl'

export const trpc = createTRPCNext<AppRouter>({
    config(opts) {
        return {
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                    async headers() {
                        return {}
                    },
                }),
            ],
        }
    },
    ssr: false,
})
