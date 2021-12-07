import { useContext } from 'react';
import { AppContext } from '../components/context/appContext.js';
import { UserContext } from '../components/context/userProvider.js';
import ResultComp from '../components/resultComp.js';

export default function Lists(){
    // const {

    // } = useContext(AppContext)

    // const {

    // } = useContext(UserContext)

    return(
        <div className='resultCompWrapper' >
            <h1 style={{color: 'gray'}}> Mood lists posted by friends </h1>
            
        </div>
    )
}