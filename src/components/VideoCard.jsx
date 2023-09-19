import millify from 'millify'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const VideoCard = ({videoInfo}) => {
const {video} = videoInfo
 console.log(video)
  return (
    //Kullanıcı video cart'a basarsa onu detay sayfasına yönlendir parametre olarak linke videonun id'sini koy
    <Link className='w-full' to={`/watch/${video.videoId}`} >
    <div className='cursor-pointer'  >
 <img 
 className='w-full rounded my-4' 
 src= {video.thumbnails[0].url} />
 <div className='flex gap-3 ' >
    <img className='rounded-full w-[50px] h-[50px] gap-2' src= {video.author.avatar[0].url}  />
    <div>
        <p title={video.descriptionSnippet}>{video.title}</p>
        <p className='flex items-center'> 
            <span>{video.author.title} </span>
            {video?.author?.badges[0]?.text === 'Doğrulandı' && ( <span ><BsFillPatchCheckFill className='mx-2 text-blue-600'/></span>)} 
           
        </p>
        <div className='flex gap-3'>
           <p title={video.stats.views} >{millify(video.stats.views)}</p> 
           <p>{video.publishedTimeText}</p>
        </div>
    </div>
 </div>
    </div>
    </Link>
  )
}

export default VideoCard
