import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import { ThemeContextConsumer } from './ThemeContext'

// icon imports
import { FaCloud } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaSnowflake } from "react-icons/fa";
import { WiDayCloudy } from "react-icons/wi";


import { Main }  from './Main'
import Weekly from './Weekly'
import About from './About'

function Navbar(){
    return(
        <div className='navbar'>
            <ThemeContextConsumer>
                {context => (
                    <div>
                        {/* ternarys meant to render icons depending on weather predictions */}
                        { context.theme === 'sunny' ? <FaSun className='sun'/> : '' }
                        { context.theme === 'clear sky' ? <FaSun className='sun'/> : ''}
                        { context.theme === 'few clouds' ? <WiDayCloudy className='sun'/> : ''}


                        { context.theme === 'snow' ? <FaSnowflake className='snow'/> : ''}
                        { context.theme === 'light snow' ? <FaSnowflake className='snow'/> : ''}
                        { context.theme === 'heavy snow' ? <FaSnowflake className='snow'/> : ''}

                        { context.theme === 'overcast clouds' ? <FaCloud className='cloud'/> : ''}
                        { context.theme === 'broken clouds' ? <FaCloud className='cloud'/> : ''} 
                        <Link className='link' to='/'> Daily </Link>

                        {/* ternarys meant to render icons depending on weather predictions */}
                        { context.theme === 'sunny' ? <FaSun className='sun'/> : '' }
                        { context.theme === 'clear sky' ? <FaSun className='sun'/> : ''}
                        { context.theme === 'few clouds' ? <WiDayCloudy className='sun'/> : ''}


                        { context.theme === 'snow' ? <FaSnowflake className='snow'/> : ''}
                        { context.theme === 'light snow' ? <FaSnowflake className='snow'/> : ''}
                        { context.theme === 'heavy snow' ? <FaSnowflake className='snow'/> : ''}

                        { context.theme === 'overcast clouds' ? <FaCloud className='cloud'/> : ''}
                        { context.theme === 'broken clouds' ? <FaCloud className='cloud'/> : ''} 
                        <Link className='link' to='/Weekly'> 7 Day </Link>

                        {/* ternarys meant to render icons depending on weather predictions */}
                        { context.theme === 'sunny' ? <FaSun className='sun'/> : '' }
                        { context.theme === 'clear sky' ? <FaSun className='sun'/> : ''}
                        { context.theme === 'few clouds' ? <WiDayCloudy className='sun'/> : ''}


                        { context.theme === 'snow' ? <FaSnowflake className='snow'/> : ''}
                        { context.theme === 'light snow' ? <FaSnowflake className='snow'/> : ''}
                        { context.theme === 'heavy snow' ? <FaSnowflake className='snow'/> : ''}

                        { context.theme === 'overcast clouds' ? <FaCloud className='cloud'/> : ''}
                        { context.theme === 'broken clouds' ? <FaCloud className='cloud'/> : ''} 
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