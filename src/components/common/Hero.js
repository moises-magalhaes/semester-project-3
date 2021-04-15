import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from "react-bootstrap/Button";
function Hero() {
const [ heroData, setData ] = useState([]);

    useEffect (() => {
        loadData();
        // const getData = async () => {
        //   const response =  await fetch ("http://localhost:1337/");
        //   const json = await response.json();
        //   console.log(json);
        // };
        // getData();
    }, []);
    const loadData = async () => {
       await fetch("http://localhost:1337/home")
        .then(response => response.json())
        .then(data => setData(data))

    }
    console.log(heroData);
    console.log(Object.keys(heroData));
    console.log(heroData.hero_banner);

    return (
        <div>
            
            <Jumbotron>
                <div>
                {Object.keys(heroData).map(image => (
                    <div key={image.id}>{image.url}</div>
                ))} 
                 
                {/* {heroData.hero_banner.map (photo =>
                    <div key={photo.id}>{photo.url}</div>
                )} */}

                </div>

                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
            
            </Jumbotron> 
        </div>
    )
}

export default Hero
