const VideoCard=({info})=>{
    if(!info) return null
    // console.log(info)
    const {snippet,statistics}=info;
    const {title,channelTitle,thumbnails}=snippet
    const viewCount = statistics?.viewCount;
    
    return (
        <div className="p-2 m-2 w-72 shadow-lg bg-gray-200">
            <img className="rounded-lg" alt="thumbnails" src={thumbnails?.medium.url}/>
            <ul>
            
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
                </ul>
        </div>
    )
}

export const ADVideoCard=({info})=>{
    return (
        <div className="p1 m-1 border border-red-900">
        <VideoCard info={info}/>
        </div>
    )
}



export default VideoCard