import React from 'react'
// import Navbar from './Navbar';


function Header(){
    return (
        <div>
            <div className='navbar'>
                <nav>
                    <div className='crumbs'> 
                        <h3 className='bootstrap'> Start Bootstrap </h3>
                        <h3 className='navlinks'> Home About Sample Post Contact</h3> 
                    </div>
                </nav>
            </div>
                <div className='header'>
                    <header>
                        <h1>Clean Blog</h1>
                        <h3>A Blog Theme by Start Bootstrap</h3>
                    </header>
                </div>
        </div>
    )
}

export default Header;