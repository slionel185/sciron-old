import { trpc } from '@/utilities/trpc'
import Error from '@/components/pages/Error'
import Loader from '@/components/pages/Loader'
import CreateCommandButton from '@/components/buttons/CreateCommandButton'

export default function CommandWrapper({ userId }: { name: string, userId: string }) {
    const commands = trpc.fetchCommands.useQuery({ userId })

    if(commands.isLoading) return (
        <div className='h-full w-full flex justify-center items-center rounded-xl overflow-hidden lg:col-span-2'>   
            <Loader size='full' logo={false} />
        </div>
    )

    if(commands.isError) return (
        <div className='h-full w-full flex justify-center items-center rounded-xl overflow-hidden lg:col-span-2'>   
            <Error size='full' />
        </div>
    )

    return (
        <div className='h-full w-full lg:visible lg:grid justify-center items-center rounded-xl overflow-hidden lg:col-span-2 bg-base-100 grid-cols-2 xl:grid-cols-3 grid-flow-row'>
            {commands.data.length > 0 && commands.data.map((command) => (
                <div key={command.id}>
                    <h1>{command.name}</h1>
                </div>
            ))}
            {commands.data.length === 0 && <h1 className='w-full text-center'>no commands more like no bitches</h1>}
            {commands.data.length === 0 && <CreateCommandButton />}
        </div>
    )
}