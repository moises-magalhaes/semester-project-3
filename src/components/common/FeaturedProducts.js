import React, { useState, useEffect } from 'react';
import { baseUrl } from "../settings/Api";
import HomeProducts from './HomeProducts';

function FeaturedProducts() {

const [ productsData, setData ] = useState([]);

    useEffect (() => {
        loadData();
            }, []);

    const loadData = async () => {
       await fetch(baseUrl +"/products/")
        .then(response => response.json())
        .then((json) => setData(json))
     
    }

    console.log(productsData[1].featured)

            // return <div className="featuredProduct">                
            // {productsData.map( product => {
            //     if(product.featured === true)
                
            //     {                      
            //     <HomeProducts title={product.title}
            //     description={product.description} 
            //     image={product.image} 
            //     price={product.price} 
            //     featured={product.featured}
            //     key={product.id} />}       
            //      )}}
            //     </div>


    if(productsData.map(feature =>)){
    return (
        <div className="featuredProducts">
            {
           
            }
        </div>
        // <div className="featuredProduct">                
        //     {productsData.map( product => (
        //        <HomeProducts title={product.title}
        //         description={product.description} 
        //         image={product.image} 
        //         price={product.price} 
        //         key={product.id} />
        //     ))}        
        // </div>
    ) }
}


export default FeaturedProducts
