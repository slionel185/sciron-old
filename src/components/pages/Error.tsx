import { ScaleLoader } from 'react-spinners'

export default function Error({ size }: { size: 'screen' | 'full' }) {

    const error_msgs = [
        'Maybe you are the problem...',
        'Listen man I am TRYING',
        'This shit is FUCKED yo',
        'Brokedededed',
        'Mannnnnnnn, again....'
    ]

    const selected = error_msgs[(Math.floor(Math.random() * error_msgs.length))]

    if(size === 'screen') return (
        <div className='h-full w-full flex flex-col bg-base-100 justify-center items-center'>
            <ScaleLoader color='#772CE8' />
        </div>
    )

    if(size === 'full') return (
        <div className='h-full w-full flex flex-col bg-base-100 gap-4 justify-center items-center'>
            <h1 className='text-xl text-error'>{selected}</h1>
            <ScaleLoader color='#f87272' speedMultiplier={0.25} />
        </div>
    )
}