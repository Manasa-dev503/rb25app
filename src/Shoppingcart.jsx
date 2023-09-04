import React from "react";
import axios from "axios";
function Shopping(){
    var [products,setproducts]=React.useState([])
    var [cart,setcart]=React.useState([])
    React.useEffect(function(){
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
        var products = res.data.map((y)=>{
          return {...y,IsProductInCart:false,count:0,total:0}
      });
        setproducts([...products])
      })
    },[])
   
    function addtocart(i){
      var temp=[...products]
      temp[i].IsProductInCart=true
       temp[i].count++
       setcart([...cart,temp[i]])
    }
    function inc(i){
      var temp=[...cart]
       temp[i].count++
        setcart(temp)
    }
    function dec(i){
      var temp=[...cart]
       temp[i].count--
        setcart(temp)
    }
    function remove(ind){
        var temp=[...cart]
        temp.splice(ind,1)
        setcart(temp,ind)
    }
    return(
        <div class="d-flex flex-wrap">
            <div style={{width:'55%'}}>
            <div class="d-flex flex-wrap">
            {
                products.map((a,i)=>{
                    return <div  class="card p-3 mb-5 rounded m-4 text-emphasis-info bg-info-subtle" style={{width: '14rem',boxShadow:"20px"}}>
                    <img src={a.image} style={{height:'160px',width:'160px'}} alt="Card image cap"/>
                    <div class="card-body d-flex flex-column justify-content-between"  >
                      <h5 class="card-title">{a.title}</h5>
                      <p class="card-text text-success">Price:{a.price}</p>
                    <div>
                        <button  class="btn btn-info" onClick={(ev)=>{addtocart(i)}}  disabled={a.IsProductInCart?true:false}>Add to cart</button>
                    </div>
                    </div>
                    </div>
                    })
            }
            </div>
            </div>
            <div class='p-3'style={{width:'45%',border:'3px dashed black'}}>
                <center><h1 style={(cart.length===0)?{display:"block"}:{display:"none"}}>Your Cart is Empty</h1></center>
                {
                cart.length>0 && cart.map((b,ind)=>{
                    return <div class="card " style={{backgroundColor:"pink",marginBottom:"20px"}}>
                        <center>
                        <img src={b.image} style={{height:'100px',width:'100px',marginTop:"10px"}} alt="Card image cap"/>
                        <p class="card-text text-success">Price:{b.price*b.count}</p></center>
                        <b class="card-title mx-auto">{b.title}</b>
                       <div class="card-body d-flex justify-content-between" >
                    </div>
                    <div><center style={{position:'absolute',bottom:'20px',left:'250px',right:'100px'}}>
                    <button class="btn btn-info" onClick={()=>{dec(ind)}} disabled={b.count===1?true:false}>-</button>
                    <span>{b.count}</span>
                    <button class="btn btn-info" onClick={()=>{inc(ind)}}>+</button>
                    <button class="btn btn-info" style={{position:'absolute',left:'160px'}} onClick={()=>{remove(ind)}}>Remove</button></center>
                    </div>
                    </div>
                    })
                    }
                <div>
                    <h3 class="badge bg-warning" style={(cart.length===0)?{display:"none"}:{display:"block"}}>Total Price : 
                    {
                    cart.reduce((acc,p)=>{
                        acc+=p.price*p.count
                        return acc;
                        setcart([acc])
                    },0)
                    }
                    </h3>
                </div>
            </div>
            
           
        </div>
    )
}
export default Shopping;