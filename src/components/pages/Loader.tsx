import Image from 'next/image'
import { ScaleLoader } from 'react-spinners'

import Logo from '@/../public/Logo.png'

export default function Loader({ size, logo }: { size: 'screen' | 'full', logo: boolean }) {
    if(size === 'screen') return (
        <div className='h-screen bg-base-100 flex flex-col justify-center items-center'>
            {logo && <Image src={Logo} alt='Logo' height={128} />}
            {logo && <h1 className='text-5xl font-black italic uppercase text-primary pb-8'>Sciron</h1>}
            <ScaleLoader color='#772CE8' />
        </div>
    )

    if(size === 'full') return (
        <div className='h-full w-full bg-base-100 flex flex-col justify-center items-center'>
            {logo && <Image src={Logo} alt='Logo' height={128} />}
            {logo && <h1 className='text-5xl font-black italic uppercase text-primary pb-8'>Sciron</h1>}
            <ScaleLoader color='#772CE8' />
        </div>
    )
}