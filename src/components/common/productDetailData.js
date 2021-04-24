import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import Cart from '../pages/Cart';
import { baseUrl } from "../settings/Api";

function ProductDetailData() {

    const [ productData, setData ] = useState({});
    const [ imageData, setImage ] = useState({});
    const [ cart, setCart ] = useState([]);

    const { id } = useParams();
   

    useEffect (() => {
       loadData();
           },[]);

        const loadData = async () => {
           await fetch(baseUrl +`/products/${id}`)
           .then(response => response.json())
           .then((json) => setData(json))
   }

   useEffect (() => {
       loadImage();
           },[]);

        const loadImage = async () => {
           await fetch(baseUrl +`/products/${id}`)
           .then(response => response.json())
           .then((json) => setImage(json.image.formats.medium))
   }

   const addToCart = (productData) => {
       console.log("we are in addToCart")
       setCart([...cart, productData]);
       
   }

   return (
       <>
           <div>
               <h4>{productData.title}</h4>
               <img src={baseUrl + imageData.url} alt="Shoes" />
               <h4>NOK: {productData.price}</h4>
               <p>{productData.description}</p>
               <Button onClick={()=> addToCart(productData)}>Add to cart</Button>
               <Link to="/cart" cart={Cart}><Button>Go to cart ({cart.length})</Button></Link>

           </div>
           
       </>
   )

}

export default ProductDetailData
