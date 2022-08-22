import {Link} from "react-router-dom"
import styles from "./searchDetail.module.css";

function searchDetail({id, thumbnail, title, uploader}){
  return(
    <div className={styles.container}>
      <img src={thumbnail} alt={title} />
      <div className={styles.index}>
        <h4><Link to={`/video/${id}`}>{title}</Link></h4>
        <span>{uploader}</span>
      </div>
    </div>
  )
}
export default searchDetail;