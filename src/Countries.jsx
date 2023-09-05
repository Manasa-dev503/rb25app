import React from 'react';
import axios from 'axios';
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
            <ul>
            {
                countries.map((country)=>{
                    return <li>{country.name.common}</li>
                })
            }
            </ul>
        </div>

    )
}
export default Countries;