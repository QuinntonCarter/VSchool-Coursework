import './index.css';
import React from 'react'
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import { ThemeContextConsumer } from './themeContext';

function App() {
  return(
    <ThemeContextConsumer>
      {context => (
        <div className={`${context.theme}`}>
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
      )}
    </ThemeContextConsumer>
    
  );
}

export default App;