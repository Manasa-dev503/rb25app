import React from "react";
import axios from "axios";
function Photos(){
    var [photos,setphotos] = React.useState([])
    React.useEffect(function(){
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((res)=>{
            var photos = res.data.map((y)=>{
                return {...y,flag:false}
            }) 
            setphotos([...photos])
        })
    },[])
    return (
        <div>
            {
                photos.map((a)=>{

                })
            }
        </div>
    )
    
}
export default Photos;