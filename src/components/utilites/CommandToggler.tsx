import { Command } from '@prisma/client'
import { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'

import { trpc } from '@/utilities/trpc'
import { useCommandStore } from '@/data/useCommandStore'
import { openUpdateCommandModal } from '@/functions/openUpdateCommandModal'

export default function CommandToggler({ command }: { command: Command }) {
    const toggleCommandMutation = trpc.toggleCommand.useMutation()

    const { setCommand } = useCommandStore()

    const [toggle, setToggle] = useState(command.active ?? false)

    useEffect(() => {
        toggleCommandMutation.mutate({ id: command.id, active: toggle })
    }, [toggle])
   
    const handleNameClick = () => {
        setCommand(command.id)
        openUpdateCommandModal()
    }

    const handleRunClick = () => {

    }

    return (
        <div className='h-20 min-h-[5rem] flex justify-center items-center w-full rounded-lg bg-base-300 p-4'>
            <input value={`${toggle}`} onChange={() => setToggle(toggle => !toggle)} type='checkbox' className='toggle toggle-secondary toggle-md' />
            <div className='flex-1 px-2 whitespace-nowrap overflow-hidden'>
                <h1 onClick={handleNameClick} className='btn bg-base-300 border-none text-xl text-left normal-case text-ellipsis'>{command?.name ?? 'Command name'}</h1>
            </div>
            <div onClick={handleRunClick} className='btn btn-square btn-ghost'>
                <FaArrowRight className='text-2xl text-accent' />
            </div>
        </div>
    )
}