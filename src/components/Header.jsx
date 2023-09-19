import {TfiBell } from "react-icons/tfi";
import{GoSearch} from 'react-icons/go'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";




const Header = () => {
  const navigate = useNavigate()
  const [query,setQuery]=useState('')

  // const handleClick= ()=>{
  // navigate(`/results?q=${query}`)

  // }
  return (
    <header className="flex justify-between items-center p-2 sticky ">
      <Link to={'/'}>
      <img className="w-[150px]   " 
     src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2017/08/youtube_logo_dark.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"  />
      </Link>
     
     <form className="bg-white rounded flex items-center" >
        <input className="px-4 py-1 rounded outline-none text-black " 
        type="text"
        onChange={(e)=>setQuery(e.target.value)}
        />
        <Link to={`/results?search_query=${query}`}
       
        className="mr-2"><GoSearch className=" text-black"/>
        </Link> 
        </form>
        <TfiBell className="text-white mr-4 cursor-pointer"/>
    </header>
  )
}

export default Header
