import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { BsCheck2Circle } from 'react-icons/bs'
import { IoIosCloseCircleOutline } from 'react-icons/io'

import Logo from '@/../public/Logo.png'

export default function pricing() {

    const router = useRouter()

    const [showYearly, setShowYearly] = useState(false)

    return (
        <div className='flex flex-col justify-center items-center pt-16 pb-4 xl:h-screen w-full gap-4'>
            <div className='flex flex-col gap-4 justify-center items-center max-w-lg xl:max-w-2xl'>
                <Image src={Logo} alt='Logo' height={128} width={128} className='hidden xl:-mt-12 xl:-m-6 xl:visible' />
                <h1 className='text-5xl italic font-bold uppercase text-primary shadow-xl'>sciron</h1>
                <p className='text-xl font-medium text-center px-4'>Here at Sciron we pride ourselves in delivering a user platform that connects your communities. From Twitch to Discord we help you manage everything while keeping your stream at the forefront!</p>
            </div>
            <div className='flex flex-col gap-8 lg:flex-row w-full justify-center items-center px-8 pb-4 pt-16'>
                <div id='free' className='card w-full md:w-96 xl:max-h-[36rem] lg:h-full bg-base-300 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='w-full text-2xl text-center italic uppercase font-bold'>Starter</h2>
                        <p className='w-full text-center text-xl'>Great for new audiences to have a space to grow</p>
                        <h1 className='text-4xl h-full justify-center py-2 pb-3 italic text-center'>$0<span className='text-sm'>/mo</span></h1>
                        <ul className='px-4 flex flex-col gap-2'>
                            <li className='flex justify-start items-center gap-4'>
                                <BsCheck2Circle className='text-xl text-success' />
                                <h1>Twitch Bot Access</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <BsCheck2Circle className='text-xl text-success' />
                                <h1>5 Included Twitch Commands</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <BsCheck2Circle className='text-xl text-success' />
                                <h1>5 Custom Twitch Commands</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <IoIosCloseCircleOutline className='text-xl text-error' />
                                <h1>Discord Bot Access</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <IoIosCloseCircleOutline className='text-xl text-error' />
                                <h1>10 Included Discord Commands</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <IoIosCloseCircleOutline className='text-xl text-error' />
                                <h1>∞ Custom Discord Commands</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <IoIosCloseCircleOutline className='text-xl text-error' />
                                <h1>5 Custom Discord Embeds</h1>
                            </li>
                        </ul>
                        <div className='card-actions w-full justify-center items-center pt-6'>
                            <button onClick={() => router.push('/auth')} className='btn btn-sm w-full btn-secondary'>Get Started</button>
                        </div>
                    </div>
                </div>
                <div id='pro' className='card w-full md:w-96 xl:max-h-[36rem] lg:h-full bg-base-300 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='w-full text-2xl text-center italic uppercase font-bold'>Hobbyist</h2>
                        <p className='w-full text-center text-xl'>Streamers that want to add some customization to their stream chat!</p>
                        <h1 className='text-4xl py-2 pb-3 italic text-center'>$5<span className='text-sm'>/mo</span></h1>
                        <ul className='px-4 flex flex-col gap-2'>
                            <li className='flex justify-start items-center gap-4'>
                                <BsCheck2Circle className='text-xl text-success' />
                                <h1>Twitch Bot Access</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <BsCheck2Circle className='text-xl text-success' />
                                <h1>5 Included Twitch Commands</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <BsCheck2Circle className='text-xl text-success' />
                                <h1>20 Custom Twitch Commands</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <IoIosCloseCircleOutline className='text-xl text-error' />
                                <h1>Discord Bot Access</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <IoIosCloseCircleOutline className='text-xl text-error' />
                                <h1>10 Included Discord Commands</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <IoIosCloseCircleOutline className='text-xl text-error' />
                                <h1>∞ Custom Discord Commands</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <IoIosCloseCircleOutline className='text-xl text-error' />
                                <h1>5 Custom Discord Embeds</h1>
                            </li>
                        </ul>
                        <div className='card-actions w-full justify-center items-center pt-6'>
                            <button onClick={() => router.push('/auth')} className='btn btn-sm w-full btn-secondary'>Get Started</button>
                        </div>
                    </div>
                </div>
                <div id='Lifetime' className='card w-full md:w-96 xl:max-h-[36rem] lg:h-full bg-base-300 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='w-full text-2xl text-center italic uppercase font-bold'>Professional</h2>
                        <p className='w-full text-center text-xl'>Made for the utilitarian who needs all the commands they can get!</p>
                        <h1 className='text-4xl py-2 pb-3 italic text-center'>$15<span className='text-sm'>/mo</span></h1>
                        <ul className='px-4 flex flex-col gap-2'>
                            <li className='flex justify-start items-center gap-4'>
                                <BsCheck2Circle className='text-xl text-success' />
                                <h1>Twitch Bot Access</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <BsCheck2Circle className='text-xl text-success' />
                                <h1>5 Included Twitch Commands</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <BsCheck2Circle className='text-xl text-success' />
                                <h1>∞ Custom Twitch Commands</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <BsCheck2Circle className='text-xl text-success' />
                                <h1>Discord Bot Access</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <BsCheck2Circle className='text-xl text-success' />
                                <h1>10 Included Discord Commands</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <BsCheck2Circle className='text-xl text-success' />
                                <h1>∞ Custom Discord Commands</h1>
                            </li>
                            <li className='flex justify-start items-center gap-4'>
                                <BsCheck2Circle className='text-xl text-success' />
                                <h1>5 Custom Discord Embeds</h1>
                            </li>
                        </ul>
                        <div className='card-actions w-full justify-center items-center pt-6'>
                            <button onClick={() => router.push('/auth')} className='btn btn-sm w-full btn-secondary'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}