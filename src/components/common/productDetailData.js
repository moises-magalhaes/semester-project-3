import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { baseUrl } from "../settings/Api";

function ProductDetailData() {

    const [ productData, setData ] = React.useState({});
    const [ imageData, setImage ] = React.useState({});

    const { id } = useParams();
   

    useEffect (() => {
       loadData();
           });

        const loadData = async () => {
           await fetch(baseUrl +`/products/`+`${id}`)
           .then(response => response.json())
           .then((json) => setData(json))
   }

   useEffect (() => {
       loadImage();
           });

        const loadImage = async () => {
           await fetch(baseUrl +`/products/`+`${id}`)
           .then(response => response.json())
           .then((json) => setImage(json.image.formats.medium))
   }


   return (
       <>
           <div>
               <h4>{productData.title}</h4>
               <p>{productData.description}</p>
               <img src={baseUrl + imageData.url} alt="Shoes" />
           </div>
           
       </>
   )

}

export default ProductDetailData
