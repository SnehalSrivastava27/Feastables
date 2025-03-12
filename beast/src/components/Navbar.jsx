import React from "react";
import './Navbar.css'
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
                        <li><button>h</button></li>
                        <li><button>c</button></li>
                        <li><button>e</button></li>
                        <li><button>ma</button></li>
                        <li><button>cart</button></li>
                    </ul>

                </div>
        </div>
    )
}