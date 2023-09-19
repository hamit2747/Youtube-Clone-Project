import { useState } from "react"


const StringArea = ({text,max}) => {
    //kısa yazıyı mı uzunu mu tutan state
    const [showFullText,setshowFullText] = useState(false)

    // eğer ki bizim yazımızn uzunluğu max değerinden uzun ise max'a kadar olan kısmını al ve sonuna 3 nokta koy değilse olduğu gibi kalsın

    let shortText = text
    if(text.length > max && !showFullText ){
        shortText = text.substring(0,max)+ '...'
    }

    //eğer ki paragrafa tıklanırsa tma halini göster
    const handleClick = () =>{
        setshowFullText(!showFullText)
    }

  return (
    <p className="cursor-pointer" onClick={handleClick}>
      {shortText}
    </p>
  )
}

export default StringArea
