import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { AppProps } from 'next/app'

import Router from 'next/router'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { SessionProvider } from 'next-auth/react'

import { trpc } from '@/utilities/trpc'
import Loader from '@/components/pages/Loader'
import CreateCommandModal from '@/components/modals/CreateCommandModal'
import UpdateCommandModal from '@/components/modals/UpdateCommandModal'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const start = () => {
            setLoading(true)
        }

        const end = () => {
            setLoading(false)
        }

        Router.events.on('routeChangeStart', start)
        Router.events.on('routeChangeComplete', end)
        Router.events.on('routeChangeError', end)
    }, [])

    return (
        <SessionProvider session={session}>
            {loading ? <Loader size='screen' logo={true} /> : <Component {...pageProps} />}
            <ToastContainer position='bottom-right' theme='dark' />
            <CreateCommandModal />
            <UpdateCommandModal />
        </SessionProvider>
    )
}

export default trpc.withTRPC(App)
