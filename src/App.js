import logo from './logo.svg';
import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import Counter from './Counter';
import Todolist from './Todolist';

function App() {
  return (
    <Provider store={store}>
    <div className="mybox">
      <h1>ReactJS</h1>
      <Counter></Counter>
      <Todolist></Todolist>
      
    </div>
    </Provider>
  );
}


export default App;
