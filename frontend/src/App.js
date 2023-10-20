import './App.css';
import BottomBar from './components/BottomBar';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <div>
        <BottomBar />
      </div>
    </>  
  );
}

export default App;