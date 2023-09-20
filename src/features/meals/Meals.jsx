import React from 'react'
import { useGetAllMealsQuery } from '../../services/mealsApi'
import { useNavigate } from 'react-router-dom'


function Meals() {
    //var [cart,setcart] = React.useState([])
    var {isLoading,data} = useGetAllMealsQuery()
    //console.log(isLoading)
    console.log(data)
    var navigate = useNavigate()
    console.log(navigate)
    //var temp = {}
    //function selectItem(e){
    //   var temp1 = {'strMealThumb':e.strMealThumb,'strMeal':e.strMeal}
    //  temp={...temp,...temp1}
    //  console.log(temp)
    //  setcart([{...temp}])
        //setcart([...{'strMealThumb':e.strMealThumb,'strMeal':e.strMeal}])

    //}
   // console.log(cart)
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
                        {/*<button className='btn btn-primary' onClick={()=>{selectItem(meal)}}>Add Meal</button>*/}

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