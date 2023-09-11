import React from 'react';
import {connect} from 'react-redux';
function Todolist(props){
    console.log(props)
    var [nt,setnt] = React.useState('')
    return (
        <div className='mybox'>
            <h1>Todolist</h1>
            <input type='text' onChange={(e)=>{setnt(e.target.value)}}/>
            <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:nt})}}>AddTodo</button>
            {props.t.Todo.map((todo)=>{
                return <li>
                    {todo}<button onClick={()=>{props.dispatch({type:"DELETETODO"})}}>Delete</button>
                    </li>
            })}
        </div>
    )


}
export default connect(function(store){return store})(Todolist);