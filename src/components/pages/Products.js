import React, { useState } from 'react';
import ProductsPageData from '../common/ProductsPageData';
import SearchBar from '../common/SearchBar';
// import {baseUrl } from "../settings/Api";

function Products() {

    // const [state, setState] = useState({
    //     results= []

    // });

    // const onSearch = async (product) => {
    //     const results = await baseUrl.length("/")
    // }
    return (
        <>
            <SearchBar />

            <ProductsPageData />
        </>
    )
}

export default Products
