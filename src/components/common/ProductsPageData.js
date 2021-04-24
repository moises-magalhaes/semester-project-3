import React, { useState, useEffect } from 'react';
import {
    Link
} from "react-router-dom";
import { Button } from 'react-bootstrap';
import { baseUrl } from "../settings/Api";
import AllProducts from './AllProducts';



function ProductsPageData() {
    const [ productsData, setData ] = useState([]);
    const [ search, setSearch ] = useState("");
    const [ filteredSearch, setFilteredSearch] = useState([]);

   
        useEffect (() => {
            loadData();
                }, []);

        const loadData = async () => {
        await fetch(baseUrl +"/products/")
            .then(response => response.json())
            .then((json) => setData(json))  
        }

        // search box

        useEffect(()=>{
            setFilteredSearch(
                productsData.filter( product => {
                    return (
                        product.title.toLowerCase().includes( search.toLowerCase() )|| product.description.toLowerCase().includes( search.toLowerCase())
                        )
                 })
            )
        }, [search, productsData])

        return (
            <>    
            
                <input className="input"
                     onChange= { e => setSearch(e.target.value)}
               
                    type="text" 
                    placeholder="Search" />

                <div className="products">           
                    {filteredSearch.map( product => (
                    <div className="product"  key={product.title}>
                    <AllProducts title={product.title}
                        image={product.image} 
                        price={product.price} 
                        key={product.id} />  
                        
                        
                        <Link to={`/products/${product.id}`} key={product.price}><Button>Check Product</Button></Link>
                                            
                        </div>  
                        
                    
                    ))} 
                    
                    
                </div>
            
            </>
        )
 
}

export default ProductsPageData
