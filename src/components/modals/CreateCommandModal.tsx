import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { useState, useEffect } from 'react'

import { trpc } from '@/utilities/trpc'

export default function CreateCommandModal() {
    const createCommandMutation = trpc.createCommand.useMutation()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [commandType, setCommandType] = useState('REPLY')
    const [commandArgs, setCommandArgs] = useState<string[]>([])

    const [replyContent, setReplyContent] = useState('')

    useEffect(() => {
        if(commandType === 'REPLY') setCommandArgs([commandType, replyContent])
    }, [commandType, replyContent])

    const createCommand = () => {
        
    }

    return (
        <dialog id='create_command_modal' className={`${inter.className} modal modal-bottom sm:modal-middle`}>
            <form method='dialog' className='modal-box bg-base-300'>
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
                        <select value={commandType} onChange={(e) => setCommandType(e.target.value)} className='w-full text-neutral-content select select-bordered'>
                            <option value={'REPLY'}>Reply in chat</option>
                            <option value={'UTILITY'}>Chat utility</option>
                            <option value={'MODERATE'}>Moderate Something</option>
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
                        <select className='w-full text-neutral-content select select-bordered'>
                            <option value={'VIP'}>Show VIPs</option>                        
                            <option value={'MODS'}>Show Mods</option>
                            <option value={'SHOUTOUT'}>Shoutout</option>
                            <option value={'ANNOUNCEMENT'}>Announcement</option>
                        </select>
                    </div>}
                    {commandType === 'MODERATE' && <div className='flex w-full form-control'>
                        <label className='label'>
                            <span className='label-text'>What should this command do?</span>
                        </label>
                        <select className='w-full text-neutral-content select select-bordered'>
                            <option value={'SLOW'}>Slow Mode</option>
                            <option value={'EMOTE'}>Emote Only</option>
                            <option value={'FOLLOWERS'}>Followers Only</option>
                            <option value={'SUBSCRIBERS'}>Subscribers Only</option>
                        </select>
                    </div>}
                </div>
                <div className='modal-action'>
                    <button className='btn btn-success'>Create</button>
                    <button className='btn btn-error'>Cancel</button>
                </div>
            </form>
        </dialog>
    )
}