import React from 'react';
import { useEffect } from 'react';

function Countries(){
    var [countries,setcountries] = React.useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3/all")
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setcountries([...data])
            
        })

    },[])
    return (
        <div>
            {
                countries.map((country)=>{
                    return <li>{country.name.common}</li>
                })
            }
        </div>
    )
    
}
export default Countries;