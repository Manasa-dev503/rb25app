import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,reset } from './counterSlice';
function Counter(){
    const count = useSelector((state)=>state.c.count)
    console.log(count)
    const dispatch = useDispatch()
    return (
        <div className='mybox'>
            <h1>Counter:{count}</h1>
            <button onClick={()=>dispatch(increment())}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>dispatch(decrement())}>Decrement</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>dispatch(reset())}>Reset</button>

        </div>

    )
}
export default Counter;


