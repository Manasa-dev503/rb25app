import React, { useEffect } from 'react';
import axios from 'axios';
function Books(){
    var [books,setbooks] = React.useState([])
    var [editflag,seteditflag] = React.useState(false)
    var [newbook,setnewbook] = React.useState({title:'',author:'',Pdf:'',PrintedEdition:''})
    var [selectedbook,setselectedbook] = React.useState(null)
    useEffect(()=>{
        getbooks();
    },[])
    function addbook(){
        axios.post("http://localhost:4000/Books",newbook).then((res)=>{
            console.log(res)
            getbooks();
        })
       
    }
    function getbooks(){
        axios.get("http://localhost:4000/Books").then((res)=>{
            console.log(res.data)
            setbooks([...res.data])
        })
        .catch(()=>{})


    }
    function deletebook(id){
        axios.delete("http://localhost:4000/Books/"+id).then((res)=>{
           getbooks();
        })
    }
    function editbook(book){
        setselectedbook({...book})
        seteditflag(true)
    }
    
    function updatebook(){
        axios.put("http://localhost:4000/Books/"+selectedbook.id,selectedbook).then((res)=>{
            alert('Updated')
            getbooks();
        })
    }
    return (
        <div className='mybox'>
            <h1>Books</h1>
            {
                !editflag && (
                <div>
                    <input type='text' placeholder='Enter title' onChange={(event)=>{setnewbook({...newbook,title:event.target.value})}} /><br /><br />
                    <input type='text' placeholder='Enter Author' onChange={(event)=>{setnewbook({...newbook,author:event.target.value})}}/><br /><br />
                    <input type="radio" value="Pdf" name='data'  onChange={()=>{setnewbook({...newbook,checked:this.state.target.value==="Pdf"})}} />PDF
                    <input type="radio" value="Printed Edition" name='data' onChange={(event)=>{setnewbook({...newbook,checked:this.state.target.value==="PrintedEdition"})}} />Printed Edition <br /><br />
                    <button onClick={()=>{addbook()}}>ADD Book</button><br /><br />
                </div>
                )
            }
            {
                editflag && (
                <div>
                    <input type='text' placeholder='Enter title' value={selectedbook.title} onChange={(event)=>{setselectedbook({...selectedbook,title:event.target.value})}} /><br /><br />
                    <input type='text' placeholder='Enter Author' value={selectedbook.author} onChange={(event)=>{setselectedbook({...selectedbook,author:event.target.value})}}/><br /><br />
                    <input type="radio" name='PDF' value={selectedbook.Pdf}/>PDF
                    <input type="radio" name='Printed Edition' value={selectedbook.PrintedEdition}/>Printed Edition <br /><br />
                    <button onClick={()=>{updatebook()}}>Update Book</button>
                </div>

                )
            }
            <ul id='book'>
            {
                books.map((x)=>{
                    return <li>
                        <h4>{x.id}.{x.title}</h4>
                        <h3>{x.author.toUpperCase()}</h3>
                        <button onClick={()=>{deletebook(x.id)}}>Delete</button>&nbsp;&nbsp;&nbsp; 
                        <button onClick={()=>{editbook(x)}}>Edit</button>
                    </li>
                })
            }
            </ul>
        </div>
    )

}
export default Books;