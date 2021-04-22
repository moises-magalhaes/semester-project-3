import React, { useState, useEffect } from 'react';
import {
    Link
} from "react-router-dom";
import { Button } from 'react-bootstrap';
import { baseUrl } from "../settings/Api";
import AllProducts from './AllProducts';


function ProductsPageData(props) {

const [ productsData, setData ] = useState([]);

    useEffect (() => {
        loadData();

        console.log(props)

            }, []);

    const loadData = async () => {
       await fetch(baseUrl +"/products/")
        .then(response => response.json())
        .then((json) => setData(json))

     
    }

    return (
        <div className="products">               
            {productsData.map( product => (
               <div className="product">
               <AllProducts title={product.title}
                image={product.image} 
                price={product.price} 
                key={product.id} />  
                
                 
                <Link to={`/products/${product.id}`} key={product.id}><Button>Check Product</Button></Link>
                                       
                </div>  
                
               
            ))} 
            
            
        </div>
    )
}

export default ProductsPageData
