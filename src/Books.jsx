import React, { useEffect } from 'react';
import axios from 'axios';
function Books(){
    var [books,setbooks] = React.useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/Books").then((res)=>{
            console.log(res.data)
            setbooks([...res.data])
        })
        .catch(()=>{})

    })
    function addtobook(){
        alert('hi')
    }
    return (
        <div>
            <input type='text' placeholder='Enter title' onChange={(event)=>{setbooks(...books,event.target.value)}} /><br /><br />
            <input type='text' placeholder='Enter Author' /><br /><br />
            <button onClick={()=>{addtobook(books.id)}}>ADD Book</button>

            <ul id='book'>
            {
                books.map((book)=>{
                    return <li>
                        <h3>{book.id}.{book.title}</h3>
                        <h4>{book.author}</h4>
                        </li>
                })
            }
            </ul>
        </div>
    )

}
export default Books;