import React from 'react'
import { useAddbookMutation, useLazyGetAllBooksQuery } from '../../services/booksApi'

function AddBooks(){
    var [newbook,setnewbook] = React.useState({title:'',author:''})
  // var x = useAddbookMutation()
   //console.log(x)
   var [addNewBook] = useAddbookMutation()
   //var x = useLazyGetAllBooksQuery()
   //console.log(x)
   //var [abc] = useLazyGetAllBooksQuery()
   var [prefetchBooks] = useLazyGetAllBooksQuery()

   function addBook(){
    addNewBook(newbook).then(()=>{
        //abc();
        prefetchBooks()
    })
   }

  return (
    <div>
        <h1>Add Book</h1>
        <div>
        <input type='text' placeholder='Enter title' onChange={(event)=>{setnewbook({...newbook,title:event.target.value})}} /><br /><br />
        <input type='text' placeholder='Enter Author' onChange={(event)=>{setnewbook({...newbook,author:event.target.value})}}/><br /><br />
        <button onClick={()=>{addBook()}}>Add Book</button><br /><br />
    </div>
    </div>
    
  )
}

export default AddBooks