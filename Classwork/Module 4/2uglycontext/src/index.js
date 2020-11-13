import React from 'react';
import ReactDOM from 'react-dom';

import { FormContextProvider } from './formContext'
import './index.css';
import App from './App';

ReactDOM.render( 
    <FormContextProvider> 
        <App/>
    </FormContextProvider>, 
    document.getElementById('root'));