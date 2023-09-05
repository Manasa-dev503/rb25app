import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
function Countrydetails(){
var [details,setdetails] = React.useState(null)
var {cname} = useParams();
useEffect(()=>{
    axios.get(`https://restcountries.com/v3.1/name/${cname}`)
    .then((res)=>{
        setdetails({...res.data[0]})
    })

},[cname])

return (
    <div className="mybox">      
      {
        details && (
            <>
            <h1>{details.name.common}</h1>
            <img src={details.flags.png}/>
            </>
        )
      }
    </div>
)
}
export default Countrydetails;
