import { useSession } from 'next-auth/react'

import Error from '@/components/pages/Error'
import Loader from '@/components/pages/Loader'

export default function CommandWrapper() {
    const session = useSession()

    if(session.status === 'loading' || !session.data) return (
        <div className='h-full w-full flex justify-center items-center rounded-xl overflow-hidden lg:col-span-2'>   
            <Loader size='full' logo={false} />
        </div>
    )

    if(!session.data.user.name) return (
        <div className='h-full w-full flex justify-center items-center rounded-xl overflow-hidden lg:col-span-2'>   
            <Error size='full' />
        </div>
    )

    return (
        <div className='h-full w-full flex justify-center items-center rounded-xl overflow-hidden lg:col-span-2 bg-base-100 lg:grid grid-cols-3 grid-flow-row'>
            
        </div>
    )
}