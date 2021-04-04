import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FilesView from './components/FilesView/FilesView';
import SideIcons from './components/SidebarIcons';
import GoogleDriveIcon from './media/Google-Drive-icon.png';
import { auth, provider } from './firebase';

function App() {

  const [user, setUser] = useState();

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }

  return (
    <div className="app">
      {
        user ? (
      <>
      <Header userPhoto={user.photoURL} />
      <div className="app__main">
        <Sidebar />
        <FilesView />
        <SideIcons />

      </div>
      </>
  ) : (
    <div className="app__login">
      <img src={GoogleDriveIcon} alt="Google Drive" />
      <button onClick={handleLogin}>Log in to Google Drive</button>
    </div>
  )
}
    </div>
  );
}

export default App;
