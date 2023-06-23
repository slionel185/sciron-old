import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function OpenBetaModal() {
    return (
        <dialog id='open_beta_modal' className={`${inter.className} modal modal-bottom sm:modal-middle`}>
            <form method='dialog' className='modal-box bg-base-300'>
                <h1 className='font-bold italic text-3xl text-neutral-content pb-4'>Now in Open Beta</h1>
                <p className='py-4 text-neutral-content text-xl'>While we are in open beta we want everyone to get a chance to use features as they release. With that in mind there will be no paying for anything until we have a full release! Pick any level behind this and just get yourself started!</p>
                <div className='modal-action'>
                    <button className='btn btn-success'>Sweet free shit</button>
                </div>
            </form>
        </dialog>
    )
}