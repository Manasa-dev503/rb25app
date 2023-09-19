import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLazyGetAllBooksQuery, useUpdatebookMutation } from '../../services/booksApi'

function UpdateBook() {
    var [updateMyBook] = useUpdatebookMutation()
    var [prefetchBooks] = useLazyGetAllBooksQuery()
    //var x = useLocation()
    //console.log(x)
    var [selectedBook,setselectedBook] = useState({
       title:'',
        author:'',
        id:''
    })
    var {state} = useLocation()
    console.log(state)
    useEffect(()=>{
        setselectedBook({...state})
    },[state])

    function updateBook(){
        //console.log(selectedBook)
        updateMyBook(selectedBook).then(()=>{
            prefetchBooks()
             
        })
        
    }

    
  return (
    <div>
        <h1>UpdateBook</h1>
        {
            state && <div>
        <input type='text' placeholder='Enter title' value={selectedBook.title} onChange={(event)=>{setselectedBook({...selectedBook,title:event.target.value})}} /><br /><br />
        <input type='text' placeholder='Enter Author' value={selectedBook.author} onChange={(event)=>{setselectedBook({...selectedBook,author:event.target.value})}}/><br /><br />
        <button onClick={()=>{updateBook()}}>Add Book</button><br /><br />
        </div>
        }
    </div>
  )
}

export default UpdateBook