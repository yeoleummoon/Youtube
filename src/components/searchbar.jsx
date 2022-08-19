import {Link} from "react-router-dom"
import { useState } from 'react';
import styles from '../components/searchbar.module.css'


function Searchbar(){
  const [search, setSearch] = useState("");
  const onChange = (event) => setSearch(event.target.value);
  const handleSearch = () => {
    console.log(search);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    handleSearch();
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