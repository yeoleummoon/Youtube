import {Link} from "react-router-dom"
import { useState } from 'react';
import Searchdetail from '../components/searchDetail';
import styles from '../components/searchbar.module.css';
import detailStyles from '../components/searchDetail.module.css';


function Searchbar(){
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const onChange = (event) => setSearch(event.target.value);
  const getResult = async() => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&q=${search}&regionCode=kr&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    const json = await response.json();
    setResult(json.items);
    }
  const onSubmit = (event) => {
    event.preventDefault();
    if(search ===""){
      return;
    }
    setLoading(false);
    getResult();
  }
  return(
    <>
    <header className={styles.navbar}>
      <img className={styles.title_icon} src="../images/logo.png" alt="youtube"/>
      <span className={styles.title}><Link to='/'>YouTube</Link></span>
    <form className={styles.search_form} onSubmit={onSubmit}>
      <input
        type="text" 
        placeholder="Search"
        className="search-input"
        onChange={onChange}
        value={search}
        required  
      />
      <button className={styles.search_button}><img src="../images/search.png" alt="search"/></button>
    </form>
    </header>
    {loading ?
    (""):
    (<div className={detailStyles.videos}>
      {result.map((result) =>
      <Searchdetail 
      key={result.id.videoId}
      id={result.id.videoId}
      title={result.snippet.title}
      thumbnail={result.snippet.thumbnails.medium.url}
      uploader={result.snippet.channelTitle}
      />
      )}
      </div>) 
    }
    </>
  )
}

export default Searchbar;