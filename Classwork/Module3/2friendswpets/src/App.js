import React from 'react';
import FriendDisplay from './FriendDisplay';
import FriendsList from './FriendsList';

function App() {
  const friendComponents = FriendsList.map(friend => <FriendDisplay name={friend.name} age={friend.age}/>
    );
  const petComponents = FriendsList.map(person => <FriendDisplay petname={person.pets.name} petbreed={person.pets.breed}/>
    );
  return (
    <div>
      {friendComponents}
      {petComponents}
    </div>
  );
}

export default App;