import React from 'react';
import FriendDisplay from './FriendDisplay';
import FriendsList from './FriendsList';
// turn to class and try using state to render friendlist and pet list
function App() {
  Constructor()
    super()
    this.state = {
    }
  const friendComponents = FriendsList.map(friend => <FriendDisplay name={friend.name} age={friend.age} pets={friend.pets}/>
    );
    
  return (
    <div>
      {friendComponents} 
    </div>
  );
}


export default App;

