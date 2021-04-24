import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";



const cartFromLocalStorage =  JSON.parse(localStorage.getItem("shoes") || "[]");


function CartData() {

    
    const [ cart, setCart ] = useState([cartFromLocalStorage]);

//     const RemoveFromCart = (cart) => {
//     setCart([...cart, cart]);
// }

    useEffect (() =>{
        const data = localStorage.getItem("shoes");
        if (data){
            setCart(JSON.parse(data));
        }
     }, [])


     const RemoveFromCart = (productToRemove) => {
        setCart(cart.filter(product => product !==productToRemove)
        )
     }

    console.log(cart)
   return (
       <>

                <div className="products">           
                    
                    {cart.map( product => (
                    <div className="product"  key={product.title}>

                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <h4>{product.price}</h4>
                        
                        {/* <Link to={`/products/${product.id}`} key={product.price}><Button>Check Product</Button></Link> */}
                        <Button onClick={()=> RemoveFromCart(product)}> Remove from cart</Button>

                        <Link to="/products"><Button> back to shopping</Button></Link>    
                    </div>  
                        
                    
                        ))} 
                    
                 
                    
                    {/* <Link to="/cart" cart={Cart}><Button>Go to cart ({cart.length}) </Button></Link> */}

                </div>           
                
            </>
        )

        }


export default CartData
