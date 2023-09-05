import React from 'react';
import axios from 'axios';
import { Link,Outlet } from 'react-router-dom';
function Countries(){
    var [countries,setcountries] = React.useState([])
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all")
        .then((res)=>{
            setcountries(res.data)
        })

    },[])
    return (
        <div className='mybox'>
            <div style={{display:"flex",flexWrap:"wrap"}}>
            <ul>
            {
                countries.length>0 && countries.map((country)=>{
                    return <li>
                        <Link to={"details/"+country.name.common}>{country.name.common}</Link>
                        </li>
                })
            }
            </ul>
            <div>
                <Outlet></Outlet>
            </div>
            </div>
        </div>
        

    )
}
export default Countries;