import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API} from "../utils/constants"
import VideoCard, { ADVideoCard } from "./VideoCard";
import {Link} from "react-router-dom"

const VideoContainer=()=>{
    const [video,setVideo]=useState([])

    const getVideos=async()=>{
                try{
                    const data=await fetch(YOUTUBE_VIDEO_API);
                    const response=await data.json()
                    // console.log(response)
                    setVideo(response.items)
                }catch(error){
                    console.log(error)
                }
            }
            useEffect(()=>{
                getVideos()
            },[])
               
    return (
        <div className="flex flex-wrap">
            <ADVideoCard info={video[0]}/>
            {
                video.map((video)=> 
             <Link key={video.id} to={"/watch?v=" + video.id}> 
             <VideoCard  info={video}/>
             </Link>)
            }
         
            
        </div>
    )
}

export default VideoContainer