import React, { useState } from "react"
import ThemeContext from "./themeContext.js"

function Button(){
    const [theme, setTheme] = useState()
    function themeChange(){
        
    }
    const theme = this.context
    return (
        <button onClick={themeChange} className={`${theme}-theme`}>Switch Theme</button>
    )    
}

Button.contextType = ThemeContext

export default Button