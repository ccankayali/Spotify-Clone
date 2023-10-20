import './App.css';
import BottomBar from './components/BottomBar';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <BottomBar />
      <Content />
    </div>  
  );
}

export default App;