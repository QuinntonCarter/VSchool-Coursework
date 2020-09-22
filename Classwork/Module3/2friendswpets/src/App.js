import React from 'react';
// import PetsDisplay from './PetsDisplay';
import FriendDisplay from './FriendDisplay';
import FriendsList from './FriendsList';

function App() {
  const friendComponents = FriendsList.map(friend => <FriendDisplay name={friend.name} age={friend.age} pets={friend.pets}/>
    );
  // const petComponents = FriendsList.map(person => <PetsDisplay  pet={person.pets.}/>
    // );
  return (
    <div>
      {friendComponents}
      {/* {petComponents} */}
    </div>
  );
}

export default App;