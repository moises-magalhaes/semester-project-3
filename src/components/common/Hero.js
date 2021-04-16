import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from "react-bootstrap/Button";
<<<<<<< Updated upstream
import { baseUrl } from "../settings/Api"
=======
import {baseUrl } from "../settings/Api";
>>>>>>> Stashed changes

function Hero() {

const [ heroData, setData ] = useState([]);

    useEffect (() => {
        loadData();
            }, []);

    const loadData = async () => {
<<<<<<< Updated upstream
       await fetch(baseUrl)
=======
       await fetch(baseUrl +"/home/")
>>>>>>> Stashed changes
        .then(response => response.json())
        .then(json => setData(json.hero_banner))


        // .then(json => setData(json.hero_banner.url))

     
    }
<<<<<<< Updated upstream

    console.log(heroData);
=======
>>>>>>> Stashed changes

    const newUrl = baseUrl + heroData;

    console.log(heroData);
    console.log(newUrl)

    return (
        <div>
             <img src="{heroData}" alt="object" width="500" height="600" />
                   
            <Jumbotron>
                <div>{/*-------example 1------------*/}
                <img src={newUrl} alt="object" />
                   
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
