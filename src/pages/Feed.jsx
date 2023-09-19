import { useContext } from "react"
import SideNav from "../components/SideNav"
import { YotubeContext } from "../context/youtubeContext"
import VideoCard from "../components/VideoCard"

const Feed = () => {
  const { searchResult } = useContext(YotubeContext)
  return (
    <div className="flex">
      <SideNav />

      <div className="videos">
        {!searchResult ? (<p>Yükleniyor...</p>) : (searchResult.map((video) => {
          //eğer ki elemanın tipi video değilse hiçbirşey yapma
          if (video.type !== 'video') return
          //elemanın tipi video ise ekrana video kartı bas 
          return <VideoCard videoInfo={video} />
        })
        )}
      </div>
    </div>
  )
}

export default Feed
