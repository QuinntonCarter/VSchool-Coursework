import React from 'react';
import PetsDisplay from './PetsDisplay';
import FriendDisplay from './FriendDisplay'
import FriendsList from './FriendsList'

function App() {
  const petComponents = FriendsList.map(pet => <PetsDisplay namer={pet.pets} breed={pet.breed}/>
    );
  const friendComponents = FriendsList.map(friend => <FriendDisplay name={friend.name} age={friend.age}/>
    );
  return (
    <div>
      {friendComponents}
      {petComponents}
    </div>
  );
}

export default App;