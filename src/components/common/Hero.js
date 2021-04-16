import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from "react-bootstrap/Button";


function Hero() {

const [ heroData, setData ] = useState([]);




    useEffect (() => {
        loadData();
            }, []);

    const loadData = async () => {
       await fetch("http://localhost:1337/home")
        .then(response => response.json())
        .then(json => setData(json.hero_banner))

    }
    console.log(heroData);
    console.log(Object.entries(heroData));
    console.log(Object.values(heroData));


    return (
        <div>
            
            <Jumbotron>
                <div>
                 { heroData.map((item)=> {
                      return <div>{item.id}</div>
                       
                 } )
                  
                } 


                {/* {Object.keys(heroData).map(image => (
                    <div key={image.id}>{image.url}</div>
                ))} 
                  */}
                {/* {heroData.hero_banner.map (photo =>
                    <div key={photo.id}>{photo.url}</div>
                )} */}

                </div>

                {/* <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p> */}
            
            </Jumbotron> 
        </div>
    )
}

export default Hero
