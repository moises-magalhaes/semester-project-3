import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
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

    const newUrl = baseUrl + heroData;

    // console.log(heroData);
    // console.log(newUrl)

    return (
        <div>                
            <Jumbotron>
                
                <img src={newUrl} alt="Bergen" />              
                
            </Jumbotron> 
        </div>
    )
}

export default Hero
