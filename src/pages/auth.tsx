import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

import { toast } from 'react-toastify'
import { getServerSession } from 'next-auth'
import { IoLogoTwitch } from 'react-icons/io'
import { getProviders, signIn } from 'next-auth/react'

import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default function auth({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div className='hero h-screen bg-base-200'>
            <div className='hero-content flex-col gap-10 lg:flex-row-reverse'>
                <div className='text-center lg:text-left'>
                    <h1 className='text-5xl font-black italic uppercase text-primary'>sciron</h1>
                    <h2 className='text-3xl'>Twitch Dashboard & Bot</h2>
                    <p className='py-6'>Sciron uses your Twitch account to login to give you seamless access to your account and settings!</p>
                </div>
                <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                    <div className='card-body'>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Email</span>
                            </label>
                            <input type='email' placeholder='email' className='input input-bordered' />
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Password</span>
                            </label>
                            <input type='password' placeholder='password' className='input input-bordered' />
                            <label className='label'>
                                <span className='label-text-all link link-hover'>Forgot password?</span>
                            </label>
                        </div>
                        <div className='form-control mt-6'>
                            <button onClick={() => toast('Please use Twitch to login!')} className='btn btn-primary'>Login</button>
                        </div>

                        <div className="divider">OR</div>

                        <div className='flex justify-center items-center'>
                            {Object.values(providers).map((provider) => (
                                <button onClick={() => signIn(provider.id)} className='btn btn-square btn-outline btn-primary' key={provider.id}>{provider.name.toLowerCase() === 'twitch'? <IoLogoTwitch className='text-3xl' /> : <></>}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions)
    
    if(session) {
        return {
            redirect: {
                destination: '/dashboard'
            }
        }
    }

    const providers = await getProviders()

    return {
        props: {
            providers: providers ?? []
        }
    }
}