import React, {Component} from "react"
import ThemeContext from "./themeContext"


class Header extends Component {
    render() {
        const theme = this.context
        return (
            <header className={`${theme}-theme`}>
                <h2>Light Theme</h2>
            </header>
        )    
    }
}
Header.contextType = ThemeContext

export default Header
