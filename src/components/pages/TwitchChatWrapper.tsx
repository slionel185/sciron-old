import { TwitchChat } from 'react-twitch-embed'

import { env } from '@/utilities/env'

export default function TwitchChatWrapper({ name, size }: { name: string, size?: string }) {

    if(size === 'screen') return (
        <div className='h-screen w-full flex justify-center items-center rounded-xl overflow-hidden lg:col-span-2 lg:row-span-2'>
            <TwitchChat parent={env.NEXT_PUBLIC_PARENT_URL} height={'100%'} width={'100%'} channel={name}  />
        </div>
    )

    return (
        <div className='h-full w-full flex justify-center items-center rounded-xl overflow-hidden lg:row-span-3'>
            <TwitchChat parent={env.NEXT_PUBLIC_PARENT_URL} height={'100%'} width={'100%'} channel={name}  />
        </div>
    )
}