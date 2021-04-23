import React, { useState, useEffect } from 'react';
import {
    Link
} from "react-router-dom";
import { Button } from 'react-bootstrap';
import { baseUrl } from "../settings/Api";
import AllProducts from './AllProducts';
import SearchBar from './SearchBar';


// constructor(props){
//     super(props);
//     this.state = {}
//    }

// function searchingFor(term){
//     return function(x) {
//         return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
//     }
// }

function ProductsPageData() {
    const [ productsData, setData ] = useState([]);

    // const [search, setSearch] = useState("");

        useEffect (() => {
            loadData();
                }, []);

        const loadData = async () => {
        await fetch(baseUrl +"/products/")
            .then(response => response.json())
            .then((json) => setData(json))  
        }

        const [search, setSearch] = useState("");

        const handleInput = (e) => setSearch(e.target.value);
    


        return (
            <>    
                <div className="products">           
                {/* {productsData.filter(searchingFor(productsData.term)).map( product => ( */}
                    <SearchBar />
                    {productsData.map( product => (
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
