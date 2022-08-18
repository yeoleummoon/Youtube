import {Link} from "react-router-dom"
import { useState } from 'react';
import styles from '../components/searchbar.module.css'
import Searchdetail from "./searchDetail";

function Searchbar(){
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const onChange = (event) => setSearch(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(search === ""){
      return;
    }else{
    const getDetail = async() => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&regionCode=kr&type=video&key=AIzaSyDq4WCbEcbZbSsNZWvJ0vhs63F_AeOj-7A`)
    const json = await response.json();
    setResult(json.items);
    }
    getDetail();
    <Searchdetail 
      key={result.id}
      thumbnail={result.snippet.thumbnail.medium.url}
      title={result.snippet.title}
      uploader={result.snippet.channelTitle}
    />
    }
  }
  return(
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
  )
}

export default Searchbar;