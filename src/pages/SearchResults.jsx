import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { options } from '../utils/constant';
import SideNav from '../components/SideNav';
import VideoCard from '../components/VideoCard';


const SearchResults = () => {
  const [videos, setVideos] = useState(null);
  //   url'den arama terimini alma:
  const [searchParams, setSearchParams] = useSearchParams();
  // get methodu yardımıyla aram terimini alma
  const query = searchParams.get('search_query');

  console.log('ARRAMA TERİMİ>>', query);
  useEffect(() => {
    // her aramının başında videolara  null değerini atadık
    // aşağıdaki sorgu sayesinde null iken loading bastık
    setVideos(null);
    // aram termiyle alakalı videoları çekme
    axios
      .get(
        `https://youtube138.p.rapidapi.com/search/?q=${query}`,
        options
      )
      .then((res) => setVideos(res.data.contents));
  }, [query]);

  console.log(videos);

  return (
    <div className="flex">
      <SideNav />
      <div className="flex justify-center p-5  w-full">
        {/* videolar yoksa ekran loading basma */}
        {!videos && (
          <img className="mx-auto mt-[200px]" src= "loading.gif" />
        )}
        <div className="flex flex-col gap-20 max-w-[500px]">
          {videos?.map((content, i) => {
            if (content.type !== 'video') return;
            return <VideoCard key={i} videoInfo={content} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;