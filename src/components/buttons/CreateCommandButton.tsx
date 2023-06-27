import { FaPlusCircle } from 'react-icons/fa'

import { openCreateCommandModal } from '@/functions/openCreateCommandModal'

export default function CreateCommandButton() {
    return (
        <div onClick={openCreateCommandModal} className='h-20 min-h-[5rem] flex justify-center items-center w-full rounded-lg btn'>
            <FaPlusCircle className='text-primary text-2xl' />
        </div>
    )
}