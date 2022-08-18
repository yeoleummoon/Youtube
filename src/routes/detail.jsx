import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Searchbar from "../components/searchbar";
import Videodetail from "./videoDetail";

function Detail() {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  useEffect(()=> {
      const getDetail = async() => {
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyDq4WCbEcbZbSsNZWvJ0vhs63F_AeOj-7A`)
      const json = await response.json();
      setDetail(json.items);
    }
    getDetail();
  },[id]);
  return (
    <>
    <Searchbar />
    <div>
    {detail.map((detail) =>
      <Videodetail
      key={detail.id}
      id={detail.id}
      title={detail.snippet.title}
      description={detail.snippet.description}
      thumbnail={detail.snippet.thumbnails.default.url}
      />
    )}
    </div>
    </>
    )
}

export default Detail;