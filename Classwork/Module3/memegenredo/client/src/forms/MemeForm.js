import { BeakerIcon } from '@heroicons/react/outline';
import { SwitchHorizontalIcon } from '@heroicons/react/outline';

export default function MemeForm(props){
    const {
        inputs,
        handleChange,
        handleSubmit,
        getRandom
    } = props

    return(
        <form onSubmit={handleSubmit} className='grid grid-cols-1 col-start-1 col-end-2'>
            <div className='grid max-h-auto grid-cols-4'>
                <input className='col-span-4 focus:ring-2 text-xs focus:ring-gray-200' type='text' name='topText' placeholder='First text' value={inputs.topText} onChange={handleChange}/>
                <input className='col-span-4 focus:ring-2 text-xs focus:ring-gray-200' type='text' name='bottomText' placeholder='Second text' value={inputs.bottomText} onChange={handleChange}/>
                <button className='col-span-2 text-xs px-4 p-1 m-1 mx-auto font-medium rounded-full w-auto bg-cream border-b-4 border-yellow-400 text-indigo-800 inline-flex items-center' >
                    <span> Generate </span>
                    <BeakerIcon className='w-5'/>
                </button>
                <button className='col-span-2 text-xs px-4 p-1 m-1 mx-auto rounded-full font-medium w-auto bg-babyBlue text-indigo-800 border-b-4 border-blue-400 inline-flex items-center' onClick={getRandom}>
                    <span> Randomize </span>
                    <SwitchHorizontalIcon className='w-5'/>
                </button>
            </div>
        </form>
    )
}