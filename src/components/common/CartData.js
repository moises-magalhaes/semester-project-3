import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { baseUrl } from '../settings/Api';
import CartProducts from './CartProducts';



const cartFromLocalStorage =  JSON.parse(localStorage.getItem("shoes") || "[]");



function CartData() {

    
    const [ cart, setCart ] = useState([cartFromLocalStorage]);
    const [ image, setImage ] = useState([cartFromLocalStorage]);

    const [productValue, setProductValue] = useState("");

//     const RemoveFromCart = (cart) => {
//     setCart([...cart, cart]);
// }

    useEffect (() =>{
        const data = localStorage.getItem("shoes");
        if (data){
            setCart(JSON.parse(data));
        }
     }, [])


     
    useEffect (() =>{
        const imageData = localStorage.getItem("shoes");
        if (imageData){
            setImage(JSON.parse(imageData));
        }
     }, [])


     const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product !==productToRemove)
        )
     }

    //  const sum = cart.map((product) => {
    //     let value = 0;
    //     console.log(product.price)
    //    const total = value += product.price;  
    //     console.log(value);
    //     return total;
    // })
    const sum =cart.map((product) => {
        let addition = product.price;
        for (let i=0; i< product.length; i++){
            addition.reduce(function (a, b) {
            return a + b;
            }, 0)
        } 
    })

    console.log(sum); 

   return (
       <>

                <div className="products">           
                    
                    {cart.map( (product, idx) => (
                        <div className="product"  key={idx}>
                            <h3>{product.title}</h3>
                            {/* <CartProducts
                            image={product.image} 
                            /> */}
                            {/* <img src= {baseUrl + product.image.formats.thumbnail.url} alt ={product.title}/> */}
                            <h4>{product.price}</h4>
                            
                            {/* <Link to={`/products/${product.id}`} key={product.price}><Button>Check Product</Button></Link> */}
                            <Button onClick={()=> removeFromCart(product)}> Remove from cart</Button>

                            <Link to="/products"><Button> back to shopping</Button></Link>    
                        </div>                         
                    
                        ))}             
                </div>           
                <div>
                    <h3>Total price: {sum}</h3>
                </div>
            </>
        )

        }


export default CartData
