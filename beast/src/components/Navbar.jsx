import React from "react";
import './Navbar.css';
import mapLogo from "../assets/map-pin-svgrepo-com.svg"
import cartLogo from "../assets/shopping-cart-1135-svgrepo-com.svg"
import loginLogo from "../assets/smile-circle-svgrepo-com.svg"
import helpLogo from "../assets/help-circle-svgrepo-com.svg"
export const Navbar=()=>{
    return(
        <div className="navbar">
                <div className="logo">
                <img src="https://feastables.com/cdn/shop/files/Feastables_Rebrand_Non_Tilted.png?v=1715198993&width=360"></img>
                </div>
                <div className="mid-content">
                    <ul>
                        <li><button>Shop</button></li>
                        <li><a>Ethical Sourcing</a></li>
                        <li><a>WorldWide Domination</a></li>
                    </ul>
                </div>
                <div className="icons">
                    <ul>
                        <li><button><img src={helpLogo}></img></button></li>
                        <li><button>c</button></li>
                        <li><button><img src={loginLogo}></img></button></li>
                        <li><button><img src={mapLogo}></img></button></li>
                        <li><button><img src={cartLogo}></img></button></li>
                    </ul>

                </div>
        </div>
    )
}