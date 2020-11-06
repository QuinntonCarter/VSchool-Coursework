import React from 'react'
import {ThemeContextConsumer} from './themeProvider'

function Main(props){
    return(
        <div className='main'>
            <ThemeContextConsumer>
                {context => (
                    <main className={`${context.theme}`}> <h3> Hello World </h3>
                        <center>
                            <button onClick={context.toggleTheme} className={`${context.theme}`}> Theme switch </button>
                        </center>
                    </main>
                )}
            </ThemeContextConsumer>
        </div>
    )
}

export default Main