import { data } from 'browserslist';
import React from 'react'
import { useParams } from "react-router-dom";
import { baseUrl } from "../settings/Api";

function ProductDetail({ match }) {

    console.log(match)

     const [ productData, setData ] = React.useState({})
     const { id } = useParams()

   
    React.useEffect(()=> {
         fetch( baseUrl+`/${id}`)
        .then(setData)
    }, id )

    return (
        
        <div>
          <h4>  This is the {id} Product detail Page</h4>
        </div>
    )
}

export default ProductDetail
