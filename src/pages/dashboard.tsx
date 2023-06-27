import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { HiMenuAlt2 }  from 'react-icons/hi'
import { signOut, useSession } from 'next-auth/react'

import Loader from '@/components/pages/Loader'
import CommandWrapper from '@/components/pages/CommandWrapper'
import TwitchChatWrapper from '@/components/pages/TwitchChatWrapper'
import TwitchStreamWrapper from '@/components/pages/TwitchStreamWrapper'

import Logo from '@/../public/Logo.png'
import { trpc } from '@/utilities/trpc'

export default function Dashboard() {
    const router = useRouter()
    const session = useSession()

    trpc.botJoin.useQuery({ channel: session.data? session.data.user.name! : '' })

    useEffect(() => {
        if(session.status === 'unauthenticated') router.push('/')
    }, [session])

    if(session.status === 'loading' || !session.data || !session.data.user.name) return <Loader size='screen' logo={true} />

    return (
        <div className='drawer h-screen max-h-screen'>
            <input id='dashboard-drawer' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content flex flex-col h-full lg:overflow-hidden'>
                <div className='w-full navbar bg-base-100'>
                    <div className='flex-none lg:hidden'>
                        <label htmlFor='dashboard-drawer' className='btn btn-square'>
                            <HiMenuAlt2 className='text-3xl' />
                        </label>
                    </div>
                    <div className='flex-1 px-2 mx-2 justify-between flex-row-reverse lg:flex-row lg:justify-start'>
                        <Image src={Logo} alt='Logo' height={64} width={64} priority />
                        <h1 className='text-3xl font-black italic uppercase text-primary'>sciron</h1>
                    </div>
                    <div className='flex-none hidden lg:block'>
                        <div className='menu menu-horizontal'>
                            <button className='btn btn-ghost normal-case text-xl'>Dashboard</button>
                            <div className='tooltip tooltip-bottom tooltip-primary' data-tip='Coming Soon!'>
                                <button className='btn btn-ghost normal-case btn-disabled text-xl opacity-60'>Twitch Settings</button>
                            </div>
                            <div className='tooltip tooltip-bottom tooltip-primary' data-tip='Coming Soon!'>
                                <button className='btn btn-ghost normal-case btn-disabled text-xl opacity-60'>Discord Settings</button>
                            </div>
                            <button onClick={() => signOut()} className='btn btn-ghost normal-case text-xl'>{session.data?.user.name}</button>
                        </div>
                    </div>
                </div>
                <div className='lg:hidden flex flex-1 flex-col p-4 gap-4'>
                    <div className='collapse bg-base-300 collapse-arrow'>
                        <input type='checkbox' /> 
                        <div className='collapse-title font-medium text-xl'>
                            Stream Preview
                        </div>
                        <div className='collapse-content'> 
                            <TwitchStreamWrapper size='screen' name={session.data?.user.name!} />
                        </div>
                    </div>
                    <div className='collapse bg-base-300 collapse-arrow'>
                        <input type='checkbox' /> 
                        <div className='collapse-title font-medium text-xl'>
                            Stream Chat
                        </div>
                        <div className='collapse-content h-full'> 
                            <TwitchChatWrapper size='screen' name={session.data?.user.name!} />
                        </div>
                    </div>
                    <div className='collapse bg-base-300 collapse-arrow collapse-open'>
                        <input type='checkbox' /> 
                        <div className='collapse-title font-medium text-xl'>
                            Commands
                        </div>
                        <div className='collapse-content h-full'>
                            <CommandWrapper userId={session.data?.user.id!} />
                        </div>
                    </div>
                </div>
                <div className='h-full w-full hidden lg:grid gap-4 grid-cols-3 grid-rows-3 p-4 bg-base-300 overflow-hidden'>
                    <TwitchStreamWrapper name={session.data?.user.name!} />
                    <TwitchChatWrapper name={session.data?.user.name!} />
                    <CommandWrapper userId={session.data?.user.id!} />
                </div>
            </div>
            <div className='drawer-side'>
                <label htmlFor='dashboard-drawer' className='drawer-overlay'></label>
                <div className='menu p-4 w-80 h-full flex flex-col justify-between items-center bg-base-200'>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src='/../public/Logo.png' alt='Logo' height={128} width={128} priority />
                        <h1 className='text-5xl font-black italic uppercase text-primary'>sciron</h1>
                        <h1 className='text-xl font-bold'>{session.data?.user.name}</h1>
                    </div>
                    <div className='flex flex-col w-full gap-4'>
                        <button className='btn btn-primary w-full'>Dashboard</button>
                        <button className='btn btn-disabled w-full'>Twitch Settings</button>
                        <button className='btn btn-disabled w-full'>Discord Settings</button>
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <div className='btn btn-sm btn-ghost text-secondary'>Need help?</div>
                        <div onClick={() => signOut()} className='btn btn-primary'>Logout</div>
                    </div>
                </div>
            </div>
        </div>
    )
}