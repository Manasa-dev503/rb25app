const initialState = {
    Todo : ["buy a car","eat a chocolate"]
}
function TodoReducer(state=initialState,action){
    if(action.type==="ADDTODO"){
        return {...state,Todo:[...state.Todo,action.payload]}
    }
    if(action.type==="DELETETODO"){
        var temp = [...state.Todo]
        temp.splice(action.payload,1)
        return {...state,Todo:[...temp]}
    }
    return state;

}
export default TodoReducer;    