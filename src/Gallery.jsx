import React from "react";
import axios from "axios";
function Photos(){
    var [photos,setphotos] = React.useState([])
    var [gallery,setgallery] = React.useState([])
    React.useEffect(function(){
        axios.get("https://picsum.photos/v2/list")
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
    function deletephoto(b,ind){
        var temp = [...gallery]
        temp.splice(ind,1);
        setgallery(temp,ind)
        var g = photos.findIndex((c)=>{
            return (b.id===c.id)
        })
        photos[g].flag=false
        photos[g].count=0

    }
    
    
    return (
        <div class="d-flex flex-wrap">
            <div style={{width:'55%'}}>
            <div class="d-flex flex-wrap">
            {
                photos.map((a,i)=>{
                    return<div  class="card p-3 mb-5 rounded m-4 bg-light text-emphasis-info" style={{width: '14rem',boxShadow:"20px"}}>
                    <center><img src={a.download_url} style={{height:'160px',width:'160px',marginBottom:"20px"}} alt="Card image cap"/></center>
                    <button  class="btn btn-secondary" onClick={(ev)=>{addtogallery(i)}} disabled={a.flag?true:false}>Add to Gallery</button>
                    </div>
                    })
            }
            </div>
            </div>
            <div class='p-3'style={{width:'40%',border:'3px dashed black',position:"fixed",right:"100px",height:"100%",overflowY:"scroll"}}>
                <center><h1 style={(gallery.length===0)?{display:"block"}:{display:"none"}}>No Photos</h1></center>
                {
                gallery.length>0 && gallery.map((b,ind)=>{
                    return <div class="card mx-auto mb-3 bg-light,my-auto" style={{width:"200px"}} >
                        <center><img src={b.download_url} style={{height:'100px',width:'100px',marginTop:"10px",marginBottom:"10px"}} alt="Card image cap"/></center>
                        <button class="btn btn-secondary mx-auto mb-2" style={{width:"100px"}} onClick={()=>{deletephoto(b,ind)}}>Delete</button>
                    
                    
                
                    </div>
                })
            }
                    </div>
                    </div>
        
    )
    
}
export default Photos;