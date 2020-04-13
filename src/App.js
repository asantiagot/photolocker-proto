import React, { useState, useEffect } from 'react';
import './App.css';

const Profile = () => {
  // const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ loading: true });
  const url = 'https://randomuser.me/api/';

  useEffect(() => {
    const getUser = async() => {
      const response = await fetch(url);
      const data = await response.json();
      const userData = data.results[0];
      const name = `${userData.name.first} ${userData.name.last}`;
      const picture = userData.picture.large;
      setUser({ name: name, picture: picture });
    }

    getUser();
    
  }, []);

  return(
    <div>
      {
        user.loading ? 'Loading...' : 
        (<div>
          <div>{user.name}</div>
          <img src={user.picture}></img>
        </div>
        )
      }
    </div>
  )
}

const ProfileGrid = () => {
  const [profiles, setProfiles] = useState([]);
  for (let i = 0; i < 10; i++) {
    setProfiles([...profiles, <Profile/>]);
  }
  console.log(`profiles:`);
  console.log(profiles);
  // return (
  //   profiles.map((profile) => {
      
  //   })
  // )
}

function App() {
  return (
    <div className="App">
      <header>
        PhotoLocker
      </header>
      <main>
        <Profile/>
        <ProfileGrid/>
      </main>
    </div>
  );
}

export default App;
