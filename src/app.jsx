import { 
  BrowserRouter as Router, 
  Routes,
  Route, 
} from "react-router-dom";
import './app.css';
import Home from './routes/home';
import Detail from './routes/detail'
import Searchbar from "./components/searchbar";
import {decode} from 'html-entities';

function App(){
  decode('&#39;');
  return (
    <Router>
      <div>
        <Searchbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Detail />}/>
      </Routes>
    </Router>
  );
}

export default App;
