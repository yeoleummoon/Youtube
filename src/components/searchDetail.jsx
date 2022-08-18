import {Link} from "react-router-dom"

function searchDetail({id, thumbnail, title, uploader}){
  return(
    <div>
      <img src={thumbnail} alt={title} />
      <div>
        <h4><Link to={`/video/${id}`}>{title}</Link></h4>
        <span>{uploader}</span>
      </div>
    </div>
  )
}
export default searchDetail;