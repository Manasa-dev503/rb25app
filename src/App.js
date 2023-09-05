import logo from './logo.svg';
import './App.css';
import { Link,Outlet} from react-dom/"client"

function App() {
  return (
    <div className="mybox">
      <h1>Welcome to Edupoly ReactJS</h1>
      <Link to=".About"></Link>
      <Outlet></Outlet>
      
    </div>
  );
}

export default App;
