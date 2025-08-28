import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat=()=>{

    const dispatch=useDispatch()

    const chatMessages=useSelector((store)=>store.chat.messages)

    useEffect(()=>{
       const i= setInterval(()=>{
        //API Polling
        console.log("API Polling")

        dispatch(addMessage({
            name:generateRandomName(),
            message:makeRandomMessage(20) + "🚀"
        }))

        },500)
         return()=>{

         clearInterval(i)
         }
    },[])

    return (
        <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
            
            {/* Don't use indexex as key */}
           {chatMessages.map((c,i)=><ChatMessage key={i}
            name={c.name}
             message={c.message}
             />)}
         </div>
    )
}
export default LiveChat;