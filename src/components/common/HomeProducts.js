import React from 'react';
 import { baseUrl } from "../settings/Api";


const HomeProducts = (props) => {

    return (
        <div>
            <h3>{props.title}</h3>
             <img src={baseUrl + props.image.formats.medium.url} alt="object"/>
             <p>{props.description}</p>
             <h4>{props.price}</h4>
        </div>
    )
};

export default HomeProducts;
