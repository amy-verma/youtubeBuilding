import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API} from "../utils/constants"
import VideoCard from "./VideoCard";

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
            {
                video.map(video=> <VideoCard key={video.id} info={video}/>)
            }
         
            
        </div>
    )
}

export default VideoContainer