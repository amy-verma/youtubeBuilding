import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice"
import { useEffect, useState } from "react"
import { YOUTUBE_SEARCH_API } from "../utils/constants"

const Head=()=>{
    const [searchQuery,setSearchQuery]=useState("")
    const dispatch=useDispatch()

    const toggleMenuHandler=()=>{
         dispatch(toggleMenu())
    }

    useEffect(()=>{
        //API CAll
        console.log(searchQuery);

        getSearchSuggestion()
        //Make an api call after every key press
        //but if the difference betwwen the two pi call is <200
        //decline the api call

    },[])

    const getSearchSuggestion=async()=>{
        const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const response=await data.json()
        console.log(response);

    }

    
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1 " >
                <img onClick={()=>toggleMenuHandler()} className="h-8 cursor-pointer" alt="menu" src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>
                <a href="/"><img className="h-8 mx-2" alt="youtube" src="https://static.vecteezy.com/system/resources/previews/011/998/173/non_2x/youtube-icon-free-vector.jpg"/></a> 
            </div>
            <div className="col-span-10 px-10">
                <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className="w-1/2 border border-gray-400 p-2 rounded-l-full"  type="text" placeholder="Search Here" />
                <button className="border border-gray-400  px-5 py-2 rounded-r-full bg-gray-100 ">Search</button>
            </div>
            <div className="col-span-1">
                <img  className="h-8" alt="user-icon" src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg" />
            </div>
        </div>
    )
}

export default Head