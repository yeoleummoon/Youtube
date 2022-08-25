import styles from "../routes/searchDetail.module.css";
import SearchDetailItem from "../components/searchDetailItem";
import { useState } from "react";
import { useEffect } from "react";

const SearchDetail = ({search}) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const getResult = async() => {
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&q=${search}&regionCode=kr&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
      const json = await response.json();
      setResult(json.items);
      }
      getResult();
      },[search]);
    return(
    <div className={styles.videos}>
    {result.map((result) =>
        <SearchDetailItem
          key={result.id.videoId}
          thumbnails={result.snippet.thumbnails.medium.url}
          title={result.snippet.title}
          uploader={result.snippet.channelTitle}
        />    
    )}
    </div>
  )
}

export default SearchDetail;