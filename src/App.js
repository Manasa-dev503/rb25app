import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider>
    
    <div className="mybox">
      <h1>ReactJS</h1>
      <Counter></Counter>
      
    </div>
    </Provider>
  );
}

export default App;
