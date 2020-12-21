import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

// import { ThemeContextConsumer } from './ThemeContext'

// icon imports
// import { FaCloud } from "react-icons/fa";
// import { FaSun } from "react-icons/fa";
// import { FaSnowflake } from "react-icons/fa";
// import { WiDayCloudy } from "react-icons/wi";


import Main  from './Main'
import Weekly from './Weekly'
import About from './About'

function Navbar(){
    return(
        <div className='navbar'>
                        <Link className='link' to='/'> Daily </Link>

                        <Link className='link' to='/Weekly'> 7 Day </Link>

                        <Link className='link' to='/About'> About </Link>

                        <Switch>
                            <Route exact path='/'> <Main/> </Route>
                            <Route path='/Weekly'> <Weekly/> </Route>
                            <Route path='/About'> <About/> </Route>
                        </Switch>
        </div>
    )
}

export default Navbar