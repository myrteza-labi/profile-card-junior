import './App.css';
import React from 'react';
import ProfileBox from './Components/ProfileBox'; 
import ProfilePicture from './images/image-victor.jpg'; 

function App() {
  return (
    <div className="App">
      
      <ProfileBox 
      src={ProfilePicture} alt={'photo de profile'} profileName={'Victor Crest '}
      profileAge={'26'} profileTown={'London'} followers={'80K'} likes={'803K'}
      photos={'1.4K'} />

    </div>
  );
}

export default App;
