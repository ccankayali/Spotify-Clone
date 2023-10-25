import BottomBar from './components/BottomBar';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <div>
        <BottomBar />
      </div>
    </Router>  
  );
}

export default App;