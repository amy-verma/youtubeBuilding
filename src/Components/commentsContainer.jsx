const CommentsContainer=()=>{
    const commentsData=[
        {
        name:"Amit Verma",
        text:"Lorem Ipsum",
        replies:[
            {
        name:"Sumit Verma",
        text:"Lorem Ipsum",
        replies:[],
        }
    ]
        },
        {
        name:"Amit Verma",
        text:"Lorem Ipsum",
        replies:[{
        name:"Amit Verma",
        text:"Lorem Ipsum",
        replies:[]
        },]
        },
        {
        name:"Amit Verma",
        text:"Lorem Ipsum",
        replies:[{
        name:"Amit Verma",
        text:"Lorem Ipsum",
        replies:[]
        },]
        },
        {
        name:"Amit Verma",
        text:"Lorem Ipsum",
        replies:[{
        name:"Amit Verma",
        text:"Lorem Ipsum",
        replies:[{
        name:"Amit Verma",
        text:"Lorem Ipsum",
        replies:[{
        name:"Amit Verma",
        text:"Lorem Ipsum",
        replies:[{
        name:"Amit Verma",
        text:"Lorem Ipsum",
        replies:[]
        },]
        },]
        },]
        },]
        },
        
        
]

    const Comment=({data})=>{
        const {name,text,replies}=data
        return <div className="flex shadow-sm bg-gray-200 p-5 rounded-lg my-2">
            <img className="w-12 h-12" alt="user"
             src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg"/>

             <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
             </div>
             </div> 
    }

    const CommentsList=({comments})=>{
        return  comments.map((comment,index)=>(
            <div  key={index}>
                <Comment data={comment}/>
                
                <div className="pl-5 border border-l-black ml-5">

                     {/* <Comment key={index} data={comment}/>//these replies was the list of comments
                     <Comment key={index} data={comment}/>
                     <Comment key={index} data={comment}/> */}

                     {/* //so here the recursion in components so same component inside the componenet
                     // so this is n level testing
                     
                     */}
                     <CommentsList comments={comment.replies}/>
                </div>
            </div>
                
        ))
    }

    return (
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Comments: </h1>
            <CommentsList comments={commentsData}/>

        </div>
    )
}

export default CommentsContainer