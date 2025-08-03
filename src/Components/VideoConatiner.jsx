import { useEffect } from "react";
import { YOUTUBE_VIDEO_API} from "../utils/constants"

const VideoContainer=()=>{
     const getVideos=async()=>{
                try{
                    const data=await fetch(YOUTUBE_VIDEO_API);
                    const response=await data.json()
                    console.log(response)
                }catch(error){
                    console.log(error)
                }
            }
            useEffect(()=>{
                getVideos()
            },[])
               
    return (
        <div>
           Video
            
        </div>
    )
}

export default VideoContainer