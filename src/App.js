import logo from './logo.svg';
import './App.css';
import { Link,Outlet } from 'react-router-dom';




function App() {
  return (
    <div className="mybox">
      <h1>Welcome to Edupoly ReactJS</h1>
      <Link to='/Aboutus'>Aboutus</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/Courses'>Courses</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/Countries'>Countries</Link>
      <Outlet></Outlet>
      
    </div>
  );
}

export default App;
