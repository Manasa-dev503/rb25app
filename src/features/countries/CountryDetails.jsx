import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCountryDetailsByNameQuery } from '../../services/countriesApi'

function CountryDetails() {
   var x = useParams()
   //console.log(x)
   var {isLoading,data} = useGetCountryDetailsByNameQuery(x.cname)
  return (
    <div className='p-4'>
        <h1>{x.cname}CountryDetails</h1>
        {
            isLoading && <h4>Loading.....</h4>
        }
        {
            !isLoading && JSON.stringify(data)
        }
    </div>
  )
}

export default CountryDetails