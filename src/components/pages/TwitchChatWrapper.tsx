import { useSession } from 'next-auth/react'
import { TwitchChat } from 'react-twitch-embed'

import Error from '@/components/pages/Error'
import Loader from '@/components/pages/Loader'

export default function TwitchChatWrapper() {
    const session = useSession()

    if(session.status === 'loading' || !session.data) return (
        <div className='h-full w-full flex justify-center items-center rounded-xl overflow-hidden lg:row-span-3'>   
            <Loader size='full' logo={false} />
        </div>
    )

    if(!session.data.user.name) return (
        <div className='h-full w-full flex justify-center items-center rounded-xl overflow-hidden lg:row-span-3'>   
            <Error size='full' />
        </div>
    )

    return (
        <div className='h-full w-full flex justify-center items-center rounded-xl overflow-hidden lg:row-span-3'>
            <TwitchChat height={'100%'} width={'100%'} channel={session.data.user.name}  />
        </div>
    )
}