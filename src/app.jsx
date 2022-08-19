import { 
  BrowserRouter as Router, 
  Routes,
  Route, 
} from "react-router-dom";
import './app.css';
import Home from './routes/home';
import Detail from './routes/detail'
import Searchbar from "./components/searchbar";

function App(){
  //const { query } = useParams();
  //const search = async() => {
  //const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&regionCode=kr&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
 // const json = await response.json();
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
