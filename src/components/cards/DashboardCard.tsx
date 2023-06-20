import Image from 'next/image'
import { FaPlusCircle } from 'react-icons/fa'
import { ImArrowRight2 } from 'react-icons/im'
import { TwitchPlayerNonInteractive as TwitchPlayer, TwitchChat } from 'react-twitch-embed'

import Logo from '@/../public/Logo.png'
import { env } from '@/utilities/env'

const streamer = 'CultLeaderCatalyst'

export default function DashboardCard() {
    return (
        <div className='h-full flex flex-col justify-center items-center select-none absolute top-48 lg:static'>
            <div id='animate-stay' className='animate-skew-card flex flex-row gap-4 w-full h-1/2 bg-base-100 border border-[#0c0c0d] rounded-xl overflow-clip shadow-inner p-4'>
                <div className='w-56 flex flex-col justify-between overflow-hidden'>
                    <div className='flex flex-col justify-start items-center'>
                        <Image src={Logo} alt='Logo Image' height={64} />
                        <h1 className='text-2xl text-primary uppercase italic font-black'>Sciron</h1>
                        <h2 className='text-sm'>{streamer}</h2>
                    </div>

                    <div className='flex flex-col justify-start gap-2'>
                        <button className='btn btn-primary'>Dashboard</button>
                        <button className='btn btn-disabled'>Twitch Settings</button>
                        <button className='btn btn-disabled'>Discord Settings</button>
                    </div>

                    <div className='flex flex-col w-full gap-2'>
                        <label className='btn btn-ghost btn-sm text-secondary'>Need Help?</label>
                        <button className='btn btn-outline btn-primary'>Logout</button>
                    </div>
                </div>
                <div className='w-full bg-base-300 rounded-xl overflow-clip grid gap-2 grid-cols-3 grid-rows-3 p-2'>
                    <div className='flex col-span-2 row-span-2 rounded-xl overflow-hidden'>
                        <TwitchPlayer parent={env.NEXT_PUBLIC_PARENT_URL} className='rounded-xl h-full w-full overflow-hidden' channel={streamer} muted={true} />
                    </div>
                    <div className='row-span-3 flex flex-col justify-end'>
                        <TwitchChat parent={env.NEXT_PUBLIC_PARENT_URL} className='h-full w-full' channel={streamer} height='100%' width='100%'  />
                    </div>
                    <div className='col-span-2 grid grid-cols-2 grid-flow-row rounded-xl bg-base-200 p-2 gap-2 overflow-x-hidden overflow-y-auto'>
                        <div className='flex flex-row w-full justify-between items-center p-2 h-14 bg-base-300 rounded-lg'>
                            <div className='flex justify-center items-center gap-3'>
                                <button className='text-success btn btn-ghost text-lg'><ImArrowRight2 /></button>
                                <label className='cursor-pointer text-sm text-ellipsis overflow-hidden'>Discord</label>
                            </div>
                            <input type='checkbox' className='toggle toggle-sm toggle-secondary' />
                        </div>

                        <label htmlFor='create-command-modal' className='btn flex flex-row w-full justify-center items-center p-2 h-14 bg-base-300 rounded-lg '>
                            <FaPlusCircle className='text-xl text-primary' />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}