import { useContext } from 'react'
import{categories} from '../utils/constant'
import { YotubeContext } from '../context/youtubeContext'

const SideNav = () => {
  //context'e abone olma
  const {selectedCategory,setSelectedCategory} = useContext(YotubeContext)
  return (
    <nav className='flex flex-col  pt-4'>
      {categories.map((item)=>(
      <>
    
      <div 
      
      //seçilen kategoriyi context'e gönderme
      onClick={()=>setSelectedCategory(item.name)} 
      
      // eğer ki seçilen kategorini ismi ekrana bastığım kategorinin ismi ile eşleşirse  onu mavi yap 
      className= {`flex items-center py-5 gap-4 p-2  cursor-pointer text-lg hover:bg-gray-800 ${selectedCategory=== item.name && 'bg-blue-600'}`} >
        {item.icon}
        <span>{item.name}</span>
      </div>
      {/* eğer ki objeinin divider değer true ise ekrana bir tane çizgi bas */}
      {item.divider && <hr />}
      </>
    ))}
      
    </nav>
  )
}

export default SideNav
