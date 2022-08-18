import {Link} from "react-router-dom"
import styles from '../components/videoList.module.css'

function Videolist({id, thumbnail, title, uploader, viewcount}){
  return(
    <div className={styles.container}>
      <img src={thumbnail} alt={title} />
      <div className={styles.index}>
        <h4><Link to={`/video/${id}`}>{title}</Link></h4>
        <span>{uploader}</span>
        <p>{viewcount}회</p>
      </div>
    </div>
  )
}
export default Videolist;