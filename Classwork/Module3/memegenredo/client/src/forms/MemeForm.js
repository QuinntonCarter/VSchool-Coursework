import { BeakerIcon } from '@heroicons/react/outline';
import { SwitchHorizontalIcon } from '@heroicons/react/outline';

export default function MemeForm(props){
    const {
        inputs,
        handleChange,
        handleSubmit,
        randomMeme,
        getRandom
    } = props

    

    return(
        <>
            { randomMeme ?
                <div className='rounded pt-3 p-3'>
                    <h1 className='border-solid border-2 border-navy p-2 text-center bg-white rounded font-normal text-navy'>{randomMeme.name}</h1>
                    <form onSubmit={handleSubmit} className='grid grid-cols-4 pt-2'>
                        <button className='col-span-2 text-xs px-4 p-1 m-1 mx-auto font-medium rounded-full w-auto bg-cream border-b-4 border-yellow-400 text-indigo-800 inline-flex items-center' >
                            <span> Generate </span>
                            <BeakerIcon className='w-5'/>
                        </button>
                        <button className='col-span-2 text-xs px-4 p-1 m-1 mx-auto rounded-full font-medium w-auto bg-babyBlue text-indigo-800 border-b-4 border-blue-400 inline-flex items-center' onClick={getRandom}>
                            <span> Randomize </span>
                            <SwitchHorizontalIcon className='w-5'/>
                        </button>
                    </form>
                    <img className='mx-auto rounded border-white border-4 m-3' src={randomMeme.imgSrc} alt='initial-meme' />
                </div>
            :
                <h3> Loading... </h3>
                }
            
            <div className='grid max-h-auto grid-cols-4'>
                <input required className='col-span-4 focus:ring-2 text-xs focus:ring-gray-200' type='text' name='topText' placeholder='First text' value={inputs.topText} onChange={handleChange}/>
                <input required className='col-span-4 focus:ring-2 text-xs focus:ring-gray-200' type='text' name='bottomText' placeholder='Second text' value={inputs.bottomText} onChange={handleChange}/>
            </div>
        </>
    )
}