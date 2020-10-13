import React from 'react'
import Navbar from './Navbar';


function Header(){
    return(
        <div>
            <Navbar/>
                <div className='header'>
                    <header>
                        <h1>Clean Blog</h1>
                        <h3>A Blog Theme by Start Bootstrap</h3>
                    </header>
                </div>
        </div>
    )
}

export default Header