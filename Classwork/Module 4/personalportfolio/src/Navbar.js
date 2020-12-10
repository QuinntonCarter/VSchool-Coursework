import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function Navbar(){
    return(
        <div>
            <h3>
                <Link to='/'> main </Link>
                <Link to='/about'> about </Link>
                <Link to='/projects'> projects </Link>
                <Link to='/contact'> contact </Link>

                <Switch>
                    <Route exact path='/'> <Home/> </Route>
                    <Route path='/about'> <About/> </Route>
                    <Route path='/projects'> <Projects/> </Route>
                    <Route path='/contact'> <Contact/> </Route>
                </Switch>
            </h3>
        </div>
    )
}

export default Navbar