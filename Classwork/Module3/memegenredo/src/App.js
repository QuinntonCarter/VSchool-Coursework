import React from 'react';
import Header from './Header';
import MemeGenerator from './MemeGen.js'

function App() {
  return (
    <div className='bg-blue-200 h-screen'>
      <Header/>
        <div className="max-h-auto">
            <MemeGenerator/>
        </div>
    </div>
  );
}

export default App;