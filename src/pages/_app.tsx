import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { SessionProvider } from 'next-auth/react'

import { trpc } from '@/utilities/trpc'
import CreateCommandModal from '@/components/modals/CreateCommandModal'
import UpdateCommandModal from '@/components/modals/UpdateCommandModal'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
            <ToastContainer position='bottom-right' theme='dark' />
            <CreateCommandModal />
            <UpdateCommandModal />
        </SessionProvider>
    )
}

export default trpc.withTRPC(App)
