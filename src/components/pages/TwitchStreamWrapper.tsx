import { TwitchPlayer } from 'react-twitch-embed'

import { env } from '@/utilities/env'

export default function TwitchStreamWrapper({ name, size }: { name: string, size?: string }) {

    if(size === 'screen') return <div className='h-80 w-full flex justify-center items-center rounded-xl overflow-hidden lg:col-span-2 lg:row-span-2'>
        <TwitchPlayer parent={env.NEXT_PUBLIC_PARENT_URL} id='small-screen-player' height={'100%'} width={'100%'} channel={name}  />
    </div>

    return (
        <div className='h-full w-full flex justify-center items-center rounded-xl overflow-hidden lg:col-span-2 lg:row-span-2'>
            <TwitchPlayer parent={env.NEXT_PUBLIC_PARENT_URL} id='big-screen-player' height={'100%'} width={'100%'} channel={name}  />
        </div>
    )
}