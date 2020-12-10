import React from 'react';

import './index.css';
// import MediaViewer from './MediaViewer';
import PhotoViewer from './PhotoViewer';
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
        <Navbar/>
        {/* <MediaViewer/> */}
        <PhotoViewer/>
    </div>
  );
}

export default App;
