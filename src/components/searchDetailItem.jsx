import styles from "../routes/searchDetail.module.css";


  function SearchDetailItem({id, title, thumbnails, uploader}){
    return(
      <div className={styles.container}>
      <img src={thumbnails} alt={id} />
        <div className={styles.index}>
          <h4>{title}</h4>
          <span>{uploader}</span>
        </div>
      </div>
      )
    }

  export default SearchDetailItem;