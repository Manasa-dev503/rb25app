import React from "react";
import axios from "axios";
function Photos(){
    var [photos,setphotos] = React.useState([])
    var [gallery,setgallery] = React.useState([])
    React.useEffect(function(){
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((res)=>{
            var photos = res.data.map((y)=>{
                return {...y,flag:false,count:0}
            })
            setphotos([...photos])
        })
    },[])
    function addtogallery(i){
        var temp = [...photos]
        temp[i].flag=true
        temp[i].count++
        setgallery([...gallery,temp[i]])
    }
    return (
        <div class="d-flex flex-wrap">
            <div style={{width:'55%'}}>
            <div class="d-flex flex-wrap">
            {
                photos.map((a,i)=>{
                    return <div  class="card p-3 mb-5 rounded m-4 text-emphasis-info bg-info-subtle" style={{width: '14rem',boxShadow:"20px"}}>
                    <center><img src={a.url} style={{height:'160px',width:'160px'}} alt="Card image cap"/></center>
                    <button  class="btn btn-info" onClick={(ev)=>{addtogallery(i)}}  disabled={a.flag?true:false}>Add to Gallery</button>
                    </div>
                    })
            }
            </div>
            </div>
            <div class='p-3'style={{width:'40%',border:'3px dashed black'}}>
                <center><h1 style={(gallery.length===0)?{display:"block"}:{display:"none"}}>No Photos</h1></center>
                {
                gallery.length>0 && gallery.map((b,ind)=>{
                    return <div class="card ">
                        <img src={b.url} style={{height:'100px',width:'100px',marginTop:"10px"}} alt="Card image cap"/>
                    
                    
                
                    </div>
                })
            }
                    </div>
                    </div>
        
    )
    
}
export default Photos;