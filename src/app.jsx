import { 
  BrowserRouter as Router, 
  Routes,
  Route 
} from "react-router-dom";
import './app.css';
import Home from './routes/home';
import Detail from './routes/detail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Detail />}/>
      </Routes>
    </Router>
  );
}

export default App;
