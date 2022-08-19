import { useEffect } from "react";
import { useState } from "react";
import Videolist from "../components/videoList";
import styles from  "../components/videoList.module.css";

function Home() {
  const [videos, setVideos] = useState([]);
  const getVideo = async() => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=statistics,snippet&chart=mostPopular&maxResults=25&regionCode=kr&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
    const json = await response.json();
    setVideos(json.items);
    }
    useEffect(()=> {
    getVideo();
    },[])
    return (
    <>
    <div className={styles.videos}>
    {videos.map((video) =>
      <Videolist
      key={video.id}
      id={video.id}
      title={video.snippet.title}
      thumbnail={video.snippet.thumbnails.medium.url}
      uploader={video.snippet.channelTitle}
      viewcount={video.statistics.viewCount}
      />
      )}
    </div> 
    </>
    )
}

export default Home;