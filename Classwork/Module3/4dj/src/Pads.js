import React, { useState } from 'react';
import './styles.css';


const Pads = () => {
    const [className, setClassName] = useState(['djpad'])

    function allBlack(){
        setClassName('black')
            if (className === 'black'){
                setClassName('white')
            }
    }

    function halfPurp(){
        if (className === 'white'||'black'||'djpad'){
                setClassName('purple')
        }
    }



    return (
        <div className='padcontainer'>
        <button class='half' onClick={allBlack} className={[className]} />
        <button className='half' onClick={halfPurp} className={[className]} />
        <button className={[className]} />
        <button className={[className]} />
        </div>
    )
}

export default Pads;