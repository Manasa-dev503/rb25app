import { combineReducers,createStore } from 'redux';
import CounterReducer from './CounterReducer';
import TodoReducer from './TodoReducer';
const reducer = combineReducers({c:CounterReducer,t:TodoReducer})
const store = new createStore(reducer);
export default store;      