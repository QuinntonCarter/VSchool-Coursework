import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import { ThemeContextConsumer } from './ThemeContext'

import { FaCloud } from "react-icons/fa";
import { FaSun } from "react-icons/fa";


import Main from './Main'
import Weekly from './Weekly'
import About from './About'

function Navbar(){
    return(
        <div className='navbar'>
            <ThemeContextConsumer>
                {context => (
                    <div>
                        {/* ternary meant to render cloud icon unless weather projected to be sun */}
                        { context.theme === 'sun' ? <FaSun className='sun'/> : <FaCloud className='cloud'/> }
                        <Link className='link' to='/'> Daily </Link>

                        { context.theme === 'sun' ? <FaSun className='sun'/> : <FaCloud className='cloud'/> }
                        <Link className='link' to='/Weekly'> 7 Day </Link>

                        { context.theme === 'sun' ? <FaSun className='sun'/> : <FaCloud className='cloud'/> }
                        <Link className='link' to='/About'> About </Link>

                        <Switch>
                            <Route exact path='/'> <Main/> </Route>
                            <Route path='/Weekly'> <Weekly/> </Route>
                            <Route path='/About'> <About/> </Route>
                        </Switch>
                    </div>
                )}
            </ThemeContextConsumer>
        </div>
    )
}

export default Navbar