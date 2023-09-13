import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';

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
