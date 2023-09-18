import React from 'react';
import {useSelector,useDispatch } from 'react-redux';
import { addtodo,deletetodo } from './todoSlice';
function Todolist(){
    const todo = useSelector((state)=>state.t.todos)
    console.log(todo)
    const dispatch = useDispatch()
    const [nt,setnt] = React.useState('')
    return (
    <div className='mybox'>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setnt(e.target.value)}} />&nbsp;&nbsp;
        <button onClick={()=>{dispatch(addtodo(nt))}}>Add Todo</button>
        {
            todo.map((a,i)=>{
                return <li>
                    {a}<button onClick={()=>{dispatch(deletetodo(i,1))}}>Delete</button>
                </li>
            })
            
        }
    </div>
        
    )

}
export default Todolist;