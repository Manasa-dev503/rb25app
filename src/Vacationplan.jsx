import React from "react";
import axios from 'axios';

function Vacation(){
    var [x,setx]=React.useState([""])
    React.useEffect(()=>{
        axios.get("https://course-api.com/react-tours-project")
        .then((res)=>{
            console.log(res.data)
            var x = res.data.map((y)=>{
                return {...y,flag:false}

            })
            setx([...x])
        })
    },[])
    function del(i){
        var temp=[...x]
        temp.splice(i,1)
        setx([...temp])
    }
    function abc(i){
        var temp = [...x]
        temp[i].flag=!temp[i].flag
        setx([...temp])
    }   
    return(
        <div>
        <center>
            <h1>Our Tours</h1>
            </center>
            {
        x.map((a,i)=>{
            return <div>
            <center>
            <div class="card" style={{width:"40%",height:"auto",marginBottom:"30px"}}>
             <img src={a.image} style={{width:"100%",padding:"5px",height:"100%"}} alt="" />
             <div class="card-body" style={{width:"auto",padding:"5px"}}>
                 <span><p class="text-start" style={{fontSize:"20px"}}><b>{a.name}</b></p><p class="text-end"><span class="badge bg-secondary">{"$"+ a.price}</span></p></span>
                 <p>{a.flag?a.info:a.info.slice(0,200)}</p>
                 <button onClick={()=>{abc(i)}}>Read More</button>
                 <button onClick={()=>{del(i)}} style={{borderColor:"red",color:"red"}}>Not intrested</button>
             </div>
             </div>
            </center>    
            </div>
        })
    }
        </div>
       
    )
   
}
export default Vacation;