import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { getQueryKey } from '@trpc/react-query'
import { useQueryClient } from '@tanstack/react-query'

import { trpc } from '@/utilities/trpc'
import Loader from '@/components/pages/Loader'
import { CommandType } from '@prisma/client'

export default function CreateCommandModal() {
    const createCommandMutation = trpc.createCommand.useMutation()

    const session = useSession()
    const queryClient = useQueryClient()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [commandType, setCommandType] = useState<'REPLY' | 'UTILITY' | 'MODERATION'>('REPLY')
    const [replyContent, setReplyContent] = useState('')
    const [utilityType, setUtilityType] = useState('VIP')
    const [moderateType, setModerateType] = useState('SLOW')

    const [commandArgs, setCommandArgs] = useState<string[]>([])

    const createCommand = async () => {
        if(commandType === 'REPLY') setCommandArgs([replyContent])
        if(commandType === 'UTILITY') setCommandArgs([utilityType])
        if(commandType === 'MODERATION') setCommandArgs([moderateType])

         createCommandMutation.mutate({
            userId: session.data!.user.id!,
            active: true,
            name: name,
            description: description,
            commandType: commandType,
            args: commandArgs
        })
    }

    useEffect(() => {
        if(createCommandMutation.isError) console.log('Something broke.')
        if(createCommandMutation.isSuccess) queryClient.invalidateQueries(['fetchCommand'])
    }, [createCommandMutation])

    return (
        <dialog id='create_command_modal' className={`${inter.className} modal modal-bottom sm:modal-middle`}>
            {session.status !== 'loading' && <form method='dialog' className='modal-box bg-base-300'>
                <h1 className='font-bold italic text-xl text-neutral-content pb-4'>Create a new command!</h1>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='flex w-full form-control'>
                        <label className='label'>
                            <span className='label-text'>Command Name</span>
                        </label>
                        <input name='command_name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} type='text' className='input input-bordered w-full text-neutral-content' />
                    </div>
                    <div className='felx w-full form-control'>
                        <label className='label'>
                            <span className='label-text'>Describe the Command</span>
                        </label>
                        <input name='description' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} type='text' className='input input-bordered w-full text-neutral-content' />
                    </div>
                    <div className='flex w-full form-control'>
                        <label className='label'>
                            <span className='label-text'>What type of command is this?</span>
                        </label>
                        <select value={commandType} onChange={(e) => setCommandType(e.target.value as CommandType)} className='w-full text-neutral-content select select-bordered'>
                            <option value={'REPLY'}>Reply in chat</option>
                            <option value={'UTILITY'}>Chat utility</option>
                            <option value={'MODERATION'}>Moderate Something</option>
                        </select>
                    </div>
                    {commandType === 'REPLY' && <div className='flex w-full form-control'>
                        <label className='label'>
                            <span className='label-text'>What should it say?</span>
                        </label>
                        <input value={replyContent} onChange={(e) => setReplyContent(e.target.value)} className='input input-bordered w-full text-neutral-content' name='replyContent' placeholder='Reply content'  />
                    </div>}
                    {commandType === 'UTILITY' && <div className='flex w-full form-control'>
                        <label className='label'>
                            <span className='label-text'>What should this command do?</span>
                        </label>
                        <select value={utilityType} onChange={(e) => setUtilityType(e.target.value)} className='w-full text-neutral-content select select-bordered'>
                            <option value={'VIP'}>Show VIPs</option>                        
                            <option value={'MODS'}>Show Mods</option>
                            <option value={'SHOUTOUT'}>Shoutout</option>
                            <option value={'ANNOUNCEMENT'}>Announcement</option>
                        </select>
                    </div>}
                    {commandType === 'MODERATION' && <div className='flex w-full form-control'>
                        <label className='label'>
                            <span className='label-text'>What should this command do?</span>
                        </label>
                        <select value={moderateType} onChange={(e) => setModerateType(e.target.value)} className='w-full text-neutral-content select select-bordered'>
                            <option value={'SLOW'}>Slow Mode</option>
                            <option value={'EMOTE'}>Emote Only</option>
                            <option value={'FOLLOWERS'}>Followers Only</option>
                            <option value={'SUBSCRIBERS'}>Subscribers Only</option>
                        </select>
                    </div>}
                </div>
                <div className='modal-action'>
                    <button onClick={createCommand} className='btn btn-success'>Create</button>
                    <button className='btn btn-error'>Cancel</button>
                </div>
            </form>}
            {session.status === 'loading' && <Loader size='full' logo={false} />}
        </dialog>
    )
}