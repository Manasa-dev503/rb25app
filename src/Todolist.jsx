import React from 'react';
import {connect} from 'react-redux';
function Todolist(props){
    console.log("Todo Props::",props)
    var [nt,setnt] = React.useState("")
    return (
        <div>
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setnt(e.target.value)}}/>
            <button onClick={()=>{props.addTodoItem(nt)}}>Add Todo</button>
            {props.todo.map((a)=>{
                return <li>
                    {a}<button onClick={()=>{props.deleteTodoItem()}}>Delete</button>
                    </li>
            })}
        </div>
    )
}
function mapStateToProps(state){return state.t}

function mapDispatchToProps(dispatch){
    return {
        addTodoItem:(newTask)=>{dispatch({type:"ADDTODO",payload:newTask})},
        deleteTodoItem:()=>{dispatch({type:"DELETETODO"})}
    }

}
export default connect(

    mapStateToProps,
    mapDispatchToProps
)(Todolist);