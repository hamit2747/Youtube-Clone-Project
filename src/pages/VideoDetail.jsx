import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { options } from '../utils/constant'
import axios from 'axios'
import ReactPlayer from 'react-player'
import {BiLike} from 'react-icons/bi'
import {PiShareFatBold} from 'react-icons/pi'
import millify from 'millify'
import VideoCard from '../components/VideoCard'
import StringArea from '../components/StringArea'







const VideoDetail = () => {
    const params = useParams()
    const [details, setDetails] = useState(null)
    const [releatedContent, setReleatedContent]= useState(null)
    //videonun id'sine göre detaylarının bilgisini çekme 
    useEffect(() => {
      //kullanıcı alakalı videolardan birine tıklarsa loading gösterebilmek için null' a çektik
      setDetails(null)
      setReleatedContent(null)
        axios
            .get(`https://youtube138.p.rapidapi.com/video/details/?id=${params.videoId}`, options)
            .then((res) => setDetails(res.data))
            //videoya benzer diğer videoları çekme
            axios
            .get(`https://youtube138.p.rapidapi.com/video/related-contents/?id=${params.videoId}`,options)
            .then((res)=>setReleatedContent(res.data.contents))
            //! Bağımlılık olarak useParamstan gelen videonun id'sini ekledik alakalı videolardan birinr tıklanılırsa onun verisini çeker
    }, [params.videoId])

   return(
    <div >
    {/* details değeri null iken ekrana loading basma */}
    {!details && (
      <img className="m-auto mt-[300px]" src='/loading.gif' />
    )}

    {details && (
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center gap-5 p-3 sm:p-5 md:p-12">
        {/* Ana İçerik */}
        <div className=" flex flex-col items-center lg:max-w-[900px]">
          <ReactPlayer 
            width={'100%'}
            url={`https://www.youtube.com/watch?v=${details.videoId}`}
            controls
            playing={true}
          />
          <div className="flex flex-col gap-5 mt-5">
            <h2>{details?.title}</h2>
            <div className="flex justify-between">
              {/* kanal hakkında bilgiler */}
              <div className="flex gap-4 items-center">
                <img
                  className="w-[48px] h-[48px] rounded-full"
                  src={details?.author?.avatar[0]?.url}
                />
                <div>
                  <p>{details.author.title}</p>
                  <p>{details.author.stats.subscribersText}</p>
                </div>
                <button className="bg-white text-black rounded-lg p-1">
                  Abone Ol
                </button>
              </div>
              {/* video hakkında bilgiler */}
              <div className="flex gap-5">
                <div className="flex items-center gap-3 bg-gray-800 rounded p-3 cursor-pointer hover:bg-gray-700">
                  <BiLike />
                  <span>{millify(details.stats.likes)}</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-800 rounded p-3 cursor-pointer hover:bg-gray-700">
                  <PiShareFatBold />
                  <span>Paylaş</span>
                </div>
              </div>
            </div>
            {/* video hakkında kısmı */}
            <div className="bg-gray-600 rounded p-4">
              <p className="flex gap-5 mb-3">
                <span>
                  {millify(details.stats.views)} kez izlendi
                </span>
                <span>
                  {details.publishedDate} tarihinde yayınlandı
                </span>
              </p>
             <StringArea text={details.description}max={200}/>
            </div>
          </div>
        </div>
        {/* Alakalı İçerikler */}
         <div className='flex flex-col gap-3 lg:max-w-[300px] max-w[300px] releated'>
          {!releatedContent && <p>Loading</p>}
          
          {releatedContent && releatedContent.map((video,i)=>{
            
            if(video.type !== 'video') return
            return <VideoCard key={i} videoInfo ={video}/>
          
          })}
          
            
            
         </div>
        </div>
    )}
  </div>
);
};
   


export default VideoDetail