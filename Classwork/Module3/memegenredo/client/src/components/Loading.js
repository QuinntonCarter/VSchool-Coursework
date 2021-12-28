import { useEffect } from 'react';
import Trollface from '../images/Trollface.svg';

const LoadingComp = (props) => {
    const {
        memes,
        randomMeme,
        getMemes
    } = props

    useEffect(() => {
        if(!randomMeme){
        getMemes()
        }
    },[randomMeme, memes]);

    // useEffect(() => {
    //     if (loading) {
    //         setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    //     }
    // }, [loading]);

    return(
        <div className="flex items-center h-screen justify-center ">
            <img className='animate-spin h-20' alt='Loading...' src={Trollface}/>
        </div>
    )
};

export default LoadingComp;