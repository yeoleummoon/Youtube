import styles from './videoDetail.module.css';

function Videodetail({id, title, description}){
  return(
    <div className={styles.container}>
    <iframe 
    type="text/html"
    title="youtube video player"
    width="100%"
    height="500px"
    src={`https://www.youtube.com/embed/${id}`}
    frameBorder="0"
    allowFullScreen
    ></iframe>
    <h2>{title}</h2>
    <hr/>
    <pre>{description}</pre>
    </div>
  )
}

export default Videodetail;