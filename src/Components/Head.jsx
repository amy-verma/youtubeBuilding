import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice"
import { useEffect, useState } from "react"
import { YOUTUBE_SEARCH_API } from "../utils/constants"
import { cacheResults } from "../utils/searchSlice"

const Head=()=>{
    const [searchQuery,setSearchQuery]=useState("")
    const [suggestion,setSuggestion]=useState([])
    const [showSuggestion,setShowSuggestion]=useState(false)
    const searchCache=useSelector((store)=>store.search)
    const dispatch=useDispatch()

    const toggleMenuHandler=()=>{
         dispatch(toggleMenu())
    }

    useEffect(()=>{
        let timer=setTimeout(()=>{
            if(searchCache[searchQuery]){
                setSuggestion(searchCache[searchQuery])
            }else{
                getSearchSuggestion()
            }
         
        },200)
        
        //Make an api call after every key press
        //but if the difference betwwen the two pi call is <200
        //decline the api call
        return ()=>{
            clearTimeout(timer)
        }

    },[searchQuery])
    /**
     * dry-run
     * 
     * key-i
     * -render the component
     * -useEffect();
     * start timer=>make api call after 200ms
     * 
     * key ip
     * -destroy the component(useEffect return method)
     * -re-render the component
     * -useEffect call
     * -start-timer=>make api call after 200ms
     */

    const getSearchSuggestion=async()=>{
        // console.log("API-Call",searchQuery);
        const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
         // ,{
            // method:"GET",
            // headers:{
            //     "Access-Control-Allow-Origin": true
            // //    " Access-Control-Allow-Origin":" https://localhost:5173"
            // }
        const response=await data.json()
        console.log(response[0]);
        setSuggestion(response[1])


        dispatch(cacheResults({
         [searchQuery]:response[1],
        }))
    }

    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1 " >
                <img onClick={()=>toggleMenuHandler()} className="h-8 cursor-pointer" alt="menu" src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>
                <a href="/"><img className="h-8 mx-2" alt="youtube" src="https://static.vecteezy.com/system/resources/previews/011/998/173/non_2x/youtube-icon-free-vector.jpg"/></a> 
            </div>
            <div className="col-span-10 px-10">
                <div>
                <input value={searchQuery} 
                onFocus={()=>setShowSuggestion(true)} 
                onBlur={()=>setShowSuggestion(false)}
                 onChange={(e)=>setSearchQuery(e.target.value)} 
                 className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"  
                 type="text"
                  placeholder="Search Here" />
                <button className="border border-gray-400  px-5 py-2 rounded-r-full bg-gray-100 ">Search</button>
            </div>
           {showSuggestion && <div className="fixed px-5 py-2 bg-white w-[37rem] shadow-lg rounded-lg border-gray-100">
                <ul>
                    {
                    suggestion.map((s)=>(<li key={s} className="py-2 px-3 shadow-sm  hover:bg-gray-100">🔍{s}</li>))
                    }
                </ul>
            </div>}
            </div>
            <div className="col-span-1">
                <img  className="h-8"
                 alt="user-icon" 
                 src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg"
                  />
            </div>
        </div>
    )
}

export default Head