import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../settings/Api";
import LocalStorageProducts from './LocalStorageProducts';


const cartFromLocalStorage =  JSON.parse(localStorage.getItem("shoes") || "[]");


function CartData(props) {

    // const [ imageData, setImage ] = useState([]);
    const [ cart, setCart ] = useState([cartFromLocalStorage]);

//     const RemoveFromCart = (cart) => {
//     setCart([...cart, cart]);
// }

    useEffect (() =>{
        const data = localStorage.getItem("shoes");
        if (data){
            setCart(JSON.parse(data));
            // setImage(JSON.parse(data.formats.thumbnail))
        }
     }, [])

     

    // useEffect (() =>{
    //     localStorage.setItem("shoes", JSON.stringify(cart));
    //  }, [cart])


    console.log(cart)
   return (
       <>

                <div className="products">           
                    
                    {cart.map( product => (
                    <div className="product"  key={product.title}>

                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <h4>{product.price}</h4>
{/*                         
                    <LocalStorageProducts title={product.title}
                        image={product.image} 
                        price={product.price} 
                        key={product.id} />  
                         */}
                        
                        {/* <Link to={`/products/${product.id}`} key={product.price}><Button>Check Product</Button></Link> */}
                                            
                        </div>  
                        
                    
                        ))} 
                    
                    <Button> Remove from cart</Button>

                    {/* <Button onClick={()=> RemoveFromCart(productData)}> Remove from cart</Button> */}
                    <Link to="/products"><Button> back to shopping</Button></Link>
                    
                    {/* <Link to="/cart" cart={Cart}><Button>Go to cart ({cart.length}) </Button></Link> */}

                </div>           
                
            </>
        )

        }


export default CartData
