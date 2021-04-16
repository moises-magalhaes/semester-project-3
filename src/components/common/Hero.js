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
        .then(json => setData(json.hero_banner.url))

    }
    console.log(heroData);


    return (
        <div>
            
            <Jumbotron>
                <div>{/*-------example 1------------*/}
                <img src="{heroData}" alt="object" width="500" height="600" />
                   
                   {/*--------example 2----------*/}
                   
                   {/* {heroData.map()item =>
                       <h1 key={heroData.item}>
                        {heroData.item}
                        </h1>} */}
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
