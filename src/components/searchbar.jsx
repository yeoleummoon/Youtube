import { useState } from "react";
import { useNavigate } from "react-router-dom"
import styles from '../components/searchbar.module.css';
import SearchDetail from "../routes/searchDetail";


const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(false);
  const navigate = useNavigate();
  const onChange = (event) => setSearch(event.target.value);
  const onClickYoutube = () => {
    navigate('/');
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if(search ===""){
      return;
    }
    setResult(true);
  }
  return(
    <>
    <header className={styles.navbar}>
      <img className={styles.title_icon} src="../images/logo.png" alt="youtube"/>
      <span className={styles.title} onClick={onClickYoutube}>YouTube</span>
      <form  className={styles.search_form} onSubmit={onSubmit}>
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
    <div>
      {result ? <SearchDetail search={search} /> : ""}
    </div>
    </>
  )
}

export default Searchbar;