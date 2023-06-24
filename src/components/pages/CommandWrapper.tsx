import { trpc } from '@/utilities/trpc'
import Error from '@/components/pages/Error'
import Loader from '@/components/pages/Loader'
import CommandToggler from '@/components/utilites/CommandToggler'
import CreateCommandButton from '@/components/buttons/CreateCommandButton'
import { Command } from '@prisma/client'

export default function CommandWrapper({ userId }: { userId: string }) {
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
        <div className='h-full w-full flex flex-1 flex-col lg:visible lg:grid lg:justify-center lg:items-center rounded-xl lg:overflow-y-auto lg:col-span-2 bg-base-100 grid-cols-2 xl:grid-cols-3 p-4 gap-4'>
            {commands.data.map((command) => (
                <CommandToggler command={command as unknown as Command} />
            ))}
            {commands.data.length === 0 && <h1 className='w-full text-center text-lg font-bold italic xl:col-span-2'>No commands? You must be new here!<br />Try clicking the button next to this and making your first command!</h1>}
            <CreateCommandButton />
        </div>
    )
}