import { TwitchPlayer } from 'react-twitch-embed'

export default function TwitchStreamWrapper({ name, size }: { name: string, size?: string }) {

    if(size === 'screen') return <div className='h-80 w-full flex justify-center items-center rounded-xl overflow-hidden lg:col-span-2 lg:row-span-2'>
        <TwitchPlayer id='small-screen-player' height={'100%'} width={'100%'} channel={name}  />
    </div>

    return (
        <div className='h-full w-full flex justify-center items-center rounded-xl overflow-hidden lg:col-span-2 lg:row-span-2'>
            <TwitchPlayer id='big-screen-player' height={'100%'} width={'100%'} channel={name}  />
        </div>
    )
}