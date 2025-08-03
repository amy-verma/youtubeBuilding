import Sidebar from "./Sidebar"
import Main from "./MainContainer"

const Body=()=>{
    return (
        <div className="flex">
           
            <Sidebar/>
            <Main/>
        </div>
    )
}

export default Body