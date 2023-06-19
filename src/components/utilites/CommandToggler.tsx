import { useState } from 'react'
import { Command } from '@prisma/client'
import { FaArrowRight } from 'react-icons/fa'

import { openUpdateCommandModal } from '@/functions/openUpdateCommandModal'

export default function CommandToggler({ command }: { command?: Command }) {

    const [toggle, setToggle] = useState(command?.active ?? false)
    
    return (
        <div className='h-16 min-h-16 flex justify-center items-center w-full rounded-lg bg-base-300 p-4'>
            <input value={`${toggle}`} onChange={() => setToggle(toggle => !toggle)} type='checkbox' className='toggle toggle-secondary toggle-md' />
            <div className='flex-1 px-2 whitespace-nowrap overflow-hidden'>
                <h1 onClick={openUpdateCommandModal} className='btn bg-base-300 border-none text-xl text-left normal-case text-ellipsis'>{command?.name ?? 'Command name'}</h1>
            </div>
            <div className='btn btn-square btn-ghost'>
                <FaArrowRight className='text-2xl text-accent' />
            </div>
        </div>
    )
}