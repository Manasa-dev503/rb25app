import react from 'react';
function Counter(props){
    console.log(props)
    return (
        <div>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
        </div>


    )

}
export default Counter;