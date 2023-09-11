import react from 'react';
import {connect} from 'react-redux';
function Counter(props){
    console.log(props)
    return (
        <div className='mybox'>
            <h1>Counter:{props.c.count}</h1>
            <button onClick={()=>{props.dispatch({type:"INC"})}}>Increment</button>&nbsp;&nbsp;
            <button onClick={()=>{props.dispatch({type:"DEC"})}}>Decrement</button>&nbsp;&nbsp;
            <button onClick={()=>{props.dispatch({type:"RESET"})}}>Reset</button>
        </div> 
        )
    }
export default connect(function(store){return store})(Counter);