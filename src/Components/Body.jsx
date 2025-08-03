import Sidebar from "./Sidebar"
import Main from "./MainContainer"
import { Outlet } from "react-router-dom"

const Body=()=>{
    return (
        <div className="flex">
           
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default Body