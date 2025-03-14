import React from "react"
import hero from "../assets/EggReskin-homepage-banner.webp"  
import './Hero.css';
export const Hero=()=>{
    return(
        <div className="main">
        <div className="bg-image"> 
            <img src={hero}></img>
        </div>
        <div className="hero-btn">
        <button>TASTE THE DIFFERENCE</button>
        </div>   
        </div>
    )
}