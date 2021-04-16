import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from "react-bootstrap/Button";
import { baseUrl } from "../settings/Api";

function Hero() {

const [ heroData, setData ] = useState([]);

    useEffect (() => {
        loadData();
            }, []);

    const loadData = async () => {
       await fetch(baseUrl +"/home/")
        .then(response => response.json())
        .then(json => setData(json.hero_banner.url))
     
    }
    console.log(heroData);


    const newUrl = baseUrl + heroData;

    console.log(heroData);
    console.log(newUrl)

    return (
        <div>                
            <Jumbotron>
                <div>{/*-------example 1------------*/}
                <img src={newUrl} alt="object" />              
                </div>
            
            </Jumbotron> 
        </div>
    )
}

export default Hero
