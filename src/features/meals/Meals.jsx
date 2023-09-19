import React from 'react'
import { useGetAllMealsQuery } from '../../services/mealsApi'
import { useNavigate } from 'react-router-dom'

function Meals() {
    var {isLoading,data} = useGetAllMealsQuery()
    //console.log(isLoading)
    console.log(data)
    var navigate = useNavigate()
    console.log(navigate)
  return (
    <div className='mybox'>
        <h1 style={{textAlign:'center',color:'green'}}>Meals</h1><hr style={{border:'3px solid red'}}></hr>
        <div className='d-flex flex-wrap justify-content-around'>
        {
            isLoading && <h4 style={{color:'green'}}>Loading...</h4>
        }
        {
            !isLoading && data.meals.map((meal)=>{
                return <div className='card' style={{width:'250px',textAlign:'center',margin:'30px'}}>
                    <img src={meal.strMealThumb} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h4>{meal.strMeal}</h4>
                        <button className='btn btn-primary' onClick={()=>{navigate("/cart",{state:meal})}}>{(meal.isLoading)?"Added":"Add Meal"}</button>

                    </div>
                    </div>
            })
            
        }
        </div>
        </div>
    
    
    
  )
}

export default Meals