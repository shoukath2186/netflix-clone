import React,{useEffect,useState} from "react";
import axios  from "axios";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import Movie from "./Movies";


function Row({title,fetchUrl,unId}){

    const [movies,setMovies]=useState([])
   

    useEffect(()=>{
         axios.get(fetchUrl).then((response)=>{
            setMovies(response.data.results)
         })
    },[fetchUrl])

    const slideLeft=()=>{
        var slider=document.getElementById('slider'+unId)
        slider.scrollLeft=slider.scrollLeft-500
    }
    const slideright=()=>{
        var slider=document.getElementById('slider'+unId)
        slider.scrollLeft=slider.scrollLeft+500
    }

    
    return(
        <>
          <h1  className="text-white font-bold md:text-xl p-4" >{title}</h1>
          <div className="relative flex items-center group">
            <MdChevronLeft 
            onClick={slideLeft}
            className="bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
            <div id={'slider'+unId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
            {movies.map((item,id)=>(
               <Movie key={id} item={item}/>
            ))}
            </div>
            <MdChevronRight
            onClick={slideright}
              className="bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
          </div>
        </>
    )
}

export default Row