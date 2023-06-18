import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Image from 'next/image'
import { useRouter } from 'next/router'
import { FaTwitch } from 'react-icons/fa'
import { useSession } from 'next-auth/react'
import DashboardCard from '@/components/cards/DashboardCard'

import Logo from '@/../public/Logo.png'
import Loader from '@/components/pages/Loader'

export default function Home() {

    const router = useRouter()
    const session = useSession()

    if(session.status === 'loading') return <Loader />

    return (
        <div className={`${inter.className} h-full lg:h-screen flex md:flex-col-reverse lg:flex-row justify-center items-center bg-base-100`}>
            <div className='h-screen w-full hidden md:flex flex-col pointer-events-none'>
                <DashboardCard />
            </div>
            <div className='h-screen md:h-auto lg:h-screen w-full flex flex-col justify-center items-center'>
                <div className="flex md:h-1/4">
                    <div className='hero-content text-center'>
                        <div className='flex flex-col justify-center items-center'>
                            <Image src={Logo} alt='Logo' height={200} />
                            <h1 className='text-7xl text-primary font-black italic'>SCIRON</h1>
                            <p className="py-3 pb-10">Integrated Twitch Bot and Dashboard</p>
                            <button onClick={() => router.push('/auth')} className='btn btn-outline'>Get Started now<FaTwitch className='text-2xl'/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}