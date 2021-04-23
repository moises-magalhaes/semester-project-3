import React from 'react';
 import { baseUrl } from "../settings/Api";


const AllProducts = (props) => {

        return (
            <div>
                <h3>{props.title}</h3>
                <img src={baseUrl + props.image.formats.medium.url} alt="shoes"/>
                <p>{props.description}</p>
                <h4>{props.price}</h4>
                <span>{props.featured}</span>
            </div>
        )
};

export default AllProducts;
