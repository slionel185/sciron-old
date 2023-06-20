import type { Command } from '@prisma/client'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function UpdateCommandModal() {
    return (
        <dialog id='update_command_modal' className={`${inter.className} modal modal-bottom sm:modal-middle`}>
            <form method='dialog' className='modal-box bg-base-300'>
                 <h1 className='font-bold italic text-xl text-neutral-content pb-4'>Update command!</h1>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <input name='command_name' type='text' placeholder='Command name' className='input input-bordered w-full text-neutral-content' />
                    <input name='description' type='text' placeholder='Description to show chat' className='input input-bordered w-full text-neutral-content' />
                    <div className='flex w-full justify-center items-center gap-4'>
                        <select className='w-full text-neutral-content select select-bordered'>
                            <option>Reply in chat</option>
                            <option>Moderation</option>
                            <option>Chat utility</option>
                        </select>
                        <select className='w-full text-neutral-content select select-bordered'>
                            <option>Reply in chat</option>
                            <option>Moderation</option>
                            <option>Chat utility</option>
                        </select>
                    </div>
                </div>
                <div className='modal-action'>
                    <button className='btn'>Close</button>
                </div>
            </form>
        </dialog>
    )
}