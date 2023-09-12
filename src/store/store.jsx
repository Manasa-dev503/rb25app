import { combineReducers,createStore } from 'redux';
import TodoReducer from './reducers/TodoReducer';
import CountReducer from './reducers/CountReducer';
const Reducer = combineReducers({c:CountReducer,t:TodoReducer})
const store = new createStore(Reducer)
export default store;

