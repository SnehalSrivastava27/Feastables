import React from "react"
import hero from "../assets/EggReskin-homepage-banner.webp"  
import './Hero.css';
export const Hero=()=>{
    return(
        <div className="main">
            <img src={hero}></img>
        </div>
    )
}