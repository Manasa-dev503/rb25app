import react from 'react';
import {connect} from 'react-redux';
import { decrementCount, incermentCount, resetCount } from './store/actions';
function Counter(props){
    console.log("Counter Props::",props)
    return(
        <div className='mybox'>
            <h1>Counter:{props.count}</h1>
            <button onClick={()=>{props.increm()}}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.decrem()}}>Decrement</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.rese()}}>Reset</button>
        </div>


    )

}
function mapStateToProps(state){return state.c}


    function mapDispatchToProps(dispatch){
        return {
            increm:()=>{dispatch(incermentCount())},
            decrem:()=>{dispatch(decrementCount())},
            rese:()=>{dispatch(resetCount())}
            

        }
    }
    
export default connect(
    /*function(state){return state.c},
    function(dispatch){
        return {
            increm:()=>{dispatch(incermentCount())},
            decrem:()=>{dispatch(decrementCount())},
            rese:()=>{dispatch(resetCount())}
            

        }}*/
        mapStateToProps,
        mapDispatchToProps

    )
    (Counter);