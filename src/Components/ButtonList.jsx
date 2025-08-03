import Button  from "./Button"
const ButtonList=()=>{
    const label=["All","News","Cricket","Soccer","Cooking","Weather"]
    return (
        <div className="flex">
           {
            label.map((ele,index)=>{
                return <Button key={index} label={ele}/>
            })
           }
        </div>
    )
}

export default ButtonList