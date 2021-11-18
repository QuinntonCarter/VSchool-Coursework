import React from 'react';
import Header from './Header';
import MemeGenerator from './MemeGen.js'

function App() {
  return (
    <div className=''>
      <Header/>
        <div className="h-auto border-4 border-solid border-t-0 border-blue-400">
            <MemeGenerator/>
        </div>
    </div>
  );
}

export default App;