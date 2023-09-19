import React from 'react'
import { useDeletebookMutation, useGetAllBooksQuery, useLazyGetAllBooksQuery } from '../../services/booksApi';
import { Link,Outlet, useNavigate } from 'react-router-dom';
function Books() {
  //var x =  useGetAllBooksQuery();
   //console.log(x)
  var {isLoading,data} = useGetAllBooksQuery();
  console.log(data)
  //var x = useDeletebookMutation()
    //console.log(x)
    var [deleteBookByID] = useDeletebookMutation()
    var [prefetchBooks] = useLazyGetAllBooksQuery()
    var navigate = useNavigate()
    
  function deleteBook(ind){
    deleteBookByID(ind).then(()=>{
      prefetchBooks()

    })

  }
  return (
    <div className='mybox d-flex flex-wrap'>
      <div className='w-50'>
        <h1>Books
          <Link to='/books/addbooks'><button>Add Book</button></Link>
        </h1>
        {
          isLoading && <h4>Loading.....</h4>
        }
        <ul>
        {
          !isLoading && data.map((book)=>{
            return <li>
              <h4>{book.title}</h4>
              <h4>{book.author}</h4>
              <button onClick={()=>{deleteBook(book.id)}}>Delete</button>
              <button onClick={()=>{navigate("updateBook",{state:book})}}>Update Book</button>
            </li>
          })
          
          }
        </ul>
        </div>
        <div className='w-50' >
          <Outlet></Outlet>
        </div>

    </div>
  )
}

export default Books