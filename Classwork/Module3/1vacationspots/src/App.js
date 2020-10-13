import React from 'react';
import SpotCard from './SpotCard';
import SpotData from './SpotData';

function App() {
  const spotComponents = SpotData.map(spot => 
      <SpotCard key={spot.id} place={spot.place} 
        price={spot.price} 
        timeToGo={spot.timeToGo}
      />
    );

  return (
    <div> 
    <h1>
      <center>
        Vacation Spots
      </center>
      </h1>
      {spotComponents}
    </div>
  );
}

export default App;