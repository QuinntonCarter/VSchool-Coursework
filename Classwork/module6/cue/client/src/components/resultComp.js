import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './context/appContext.js';

export default function ResultComp(props){
    const {
        foundUsers
        } = useContext(AppContext)

    return(
        <div className=''>

        </div>
    )
}