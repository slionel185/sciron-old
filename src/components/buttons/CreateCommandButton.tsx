import { FaPlusCircle } from 'react-icons/fa'

import { openCreateCommandModal } from '@/functions/openCreateCommandModal'

export default function CreateCommandButton() {
    return (
        <div onClick={openCreateCommandModal} className='h-16 min-h-16 flex justify-center items-center w-full rounded-lg btn'>
            <FaPlusCircle className='text-primary text-2xl' />
        </div>
    )
}