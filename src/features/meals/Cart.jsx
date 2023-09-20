import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { useGetAllMealsQuery } from '../../services/mealsApi'
function Cart() {
    //var x = useLocation()
    //console.log(x)
    var [cart,setcart] = React.useState([])
    var {state} = useLocation()
    //console.log(state)
    useEffect(()=>{
        setcart([{...state}])
    },[state])
    console.log(cart)
   // var x = Object.values(cart)
    //console.log(x)
    //var x = useDeleteMealMutation()
    //console.log(x)
    //var x = useLazyGetAllMealsQuery()
    //console.log(x)
   // var [deleteMealbyIND] = useDeleteMealMutation()
    //var [prefetchMeals] = useLazyGetAllMealsQuery()
    
    

    //function deleteMeal(ind){
    //    deleteMealbyIND(ind).then(()=>{
    //        prefetchMeals()
      
      //    })
    //}

    function deleteMeal(a,ind){
        var temp = [...cart]
        temp.splice(ind,1)
        setcart(temp,ind)
    }
  return (
    <div>
        <center>
        <h1 style={(cart.length===0)?{display:'block'}:{display:'none'}}><h1 style={{color:'green'}}>Cart</h1></h1>
        {
            cart.map((a,ind)=>{
                return <div className='card' style={{width:'250px',textAlign:'center',margin:'30px'}}>
                    <img src={a.strMealThumb} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h4>{a.strMeal}</h4>
                        <button className='btn btn-primary' onClick={()=>{deleteMeal(a,ind)}}>Remove</button>

                    </div>
                    

                    </div>
              
    
       
            })
        }

        </center>
       

        

        
    </div>
  )
}

export default Cart