import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../settings/Api";


function CartData() {

    const [ productData, setData ] = useState({});
    const [ imageData, setImage ] = useState([]);
    const [ cart, setCart ] = useState([]);

 

    const RemoveFromCart = (productData) => {
    setCart([...cart, productData]);
}

 

    useEffect (() =>{
        const data = localStorage.getItem("shoes");
        if (data){
            setCart(JSON.parse(data));
            // setImage(JSON.parse(data.formats.thumbnail))
        }
     }, [])

     

    useEffect (() =>{
        localStorage.setItem("shoes", JSON.stringify(cart));
     })



   return (
       <>

        <div className="product">
                    <h4>{cart.title}</h4>
                    {/* <img src={baseUrl + imageData.url} alt="Shoes" /> */}
                    <h4>NOK: {cart.price}</h4>
                    <p>{cart.description}</p>
                    <Button onClick={()=> RemoveFromCart(productData)}> Remove from cart</Button>
                    <Link to="/products"><Button> back to shopping</Button></Link>
                    
                    {/* <Link to="/cart" cart={Cart}><Button>Go to cart ({cart.length}) </Button></Link> */}

                </div>           
                
            </>
        )

        }


export default CartData
