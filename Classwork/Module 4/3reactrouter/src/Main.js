import React from 'react'

import { Link, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function Main(){
    return(
        <div>
            <nav>

                <h5>
                    <Link to='/'> home </Link>
                    <Link to='/about'> about me </Link>
                    <Link to='/contact'> reach out </Link>
                </h5>

                    <Switch>
                        <Route exact path='/'> <Home/> </Route>
                        <Route path='/about'> <About/> </Route>
                        <Route path='/contact'> <Contact/> </Route>
                    </Switch>
                
            </nav>

        </div>
    )
}

export default Main