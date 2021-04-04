import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FilesView from './components/FilesView/FilesView';
import SideIcons from './components/SidebarIcons';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__main">
      <Sidebar />
      <FilesView />
      <SideIcons />

      </div>
    </div>
  );
}

export default App;
