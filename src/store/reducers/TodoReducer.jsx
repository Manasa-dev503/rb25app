const initialState = {
    todo : ["Icecream","Chocolates"]
}
function TodoReducer(state=initialState,action){
    if(action.type==="ADDTODO"){
        return {...state,todo:[...state.todo,action.payload]}
    }
    if(action.type==="DELETETODO"){
        var temp = [...state.todo]
        temp.splice(action.payload,1)
        return {...state,todo:[...temp]}
    }
    return state;

}
export default TodoReducer;