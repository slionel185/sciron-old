import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { useState } from 'react'

import { trpc } from '@/utilities/trpc'

export default function CreateCommandModal() {
    const createCommandMutation = trpc.createCommand.useMutation()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [commandType, setCommandType] = useState('REPLY')
    const [commandArgs, setCommandArgs] = useState<string[]>([])

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
                            <span className='label-text'>What should this command do?</span>
                        </label>
                        <select value={commandType} onChange={(e) => setCommandType(e.target.value)} className='w-full text-neutral-content select select-bordered'>
                            <option value={'REPLY'}>Reply in chat</option>
                            <option value={'UTILITY'}>Chat utility</option>
                            <option value={'MODERATE'}>Moderate Something</option>
                        </select>

                        {commandType === 'REPLY' && <div className='flex w-full form-control'>
                            <label className='label'>
                                <span className='label-text'>Reply content</span>
                            </label>
                            <input value={commandArgs[0]} onChange={(e) => setCommandArgs([e.target.value])} className='input input-bordered w-full text-neutral-content' name='replyContent' placeholder='Reply content'  />
                        </div>}
                        {commandType === 'UTILITY' && <div>
                            <label className='label'>
                                <span className='label-text'></span>
                            </label>
                            <select>
                                <option></option>
                            </select>
                        </div>}
                        {commandType === 'MODERATE' && <div>
                            <label className='label'>
                                <span className='label-text'></span>
                            </label>
                            <select>
                                <option>Slow Mode</option>
                                <option>Emote Only</option>
                                <option>Followers Only</option>
                                <option>Subscribers Only</option>
                            </select>
                        </div>}
                    </div>
                </div>
                <div className='modal-action'>
                    <button className='btn btn-success'>Create</button>
                    <button className='btn btn-error'>Cancel</button>
                </div>
            </form>
        </dialog>
    )
}