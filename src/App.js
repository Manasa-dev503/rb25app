import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Header from './shared/Header';
import { Outlet } from 'react-router-dom';
import Meals from './features/meals/Meals';
function App() {
  return (
    <Provider store={store}>
      <div className="mybox">
        <Header></Header>
        <Outlet></Outlet>
        
      
    </div>
    </Provider>
  );
}

export default App;