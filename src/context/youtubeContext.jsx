import axios from "axios";
import { createContext, useState,useEffect } from "react";
import {options} from '../utils/constant'

//context yapısının temelini oluşturma
 export const YotubeContext = createContext()

 //contexte tutulan verileri bütün uygulmaya sağlayacak sağlayıcı
 export const ContextProvider=({children})=> {
    const [selectedCategory,setSelectedCategory]= useState('New')
    const[searchResult,setSearchResult]=useState(null)

    // selectedCategory state inin değişimini izleme
    useEffect(()=>{
    //başlangıçta null yapsın ki bu sayede loading ekranı koyabilelim
    setSearchResult(null)
    //video verisini çek 
    fetchCategory(selectedCategory)
    },[selectedCategory])

    // Youtube ' dan verileri çekmeye yarayan fonksiyon 
   const fetchCategory = (category)=>{
        axios
        .get(`https://youtube138.p.rapidapi.com/search/?q=${category}`,options)
        .then((res)=>setSearchResult(res.data.contents))
    }

    return (
        <YotubeContext.Provider value={{selectedCategory,setSelectedCategory,searchResult}}>
            {children}
        </YotubeContext.Provider>
    )
 }