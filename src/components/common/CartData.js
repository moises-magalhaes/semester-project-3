import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { baseUrl } from '../settings/Api';
import CartProducts from './CartProducts';



const cartFromLocalStorage =  JSON.parse(localStorage.getItem("shoes") || "[]");



function CartData() {

    
    const [ cart, setCart ] = useState([cartFromLocalStorage]);
    const { url } = cart;
   console.log(url);   

//     const RemoveFromCart = (cart) => {
//     setCart([...cart, cart]);
// }

    useEffect (() =>{
        const data = localStorage.getItem("shoes");
        if (data){
            setCart(JSON.parse(data));
        }
     }, [])

     const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product !==productToRemove)
        )
     }

     // Total value
     const sum = cart.reduce((accumulator, product) => accumulator + product.price, 0);

    // Fixed Total with 2 decimal number
     let TotalValue = sum.toFixed(2)

  
   return (
       <>

                <div className="products">           
                    
                    {cart.map((product, idx) => (
                        <div className="product"  key={idx}>
                            <h3>{product.title}</h3>
                            {/* <CartProducts
                            image={product.image} 
                            /> */}


                            {/* <img src= {baseUrl + product["image"].formats.thumbnail.url} alt ={product.title}/> */}

                            {/* <img src= {baseUrl + product.image.formats.thumbnail.url} alt ={product.title}/> */}
                            <h4>{product.price}</h4>
                           <Button onClick={()=> removeFromCart(product)}> Remove from cart</Button>

                            <Link to="/products"><Button> back to shopping</Button></Link>    
                        </div>                         

                        ))}             
                </div>           
                <div>
                    <h3>Total price: {TotalValue}</h3>
                </div>
            </>
        )

        }


export default CartData
