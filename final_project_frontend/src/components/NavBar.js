import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    
    return (
        <div className="NavBar">
            <div className="brand">
                <img src="https://www.pinclipart.com/picdir/big/196-1961934_rugby-ball-clipart-outline-white-oval-shape-png.png" />
            </div>  
            <section className="navigation">
                <div className="nav-container">
                    
                    <nav>
                        <ul className="nav-list">
                            <li className="main">
                                <NavLink 
                                    to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="main" onFocus={dropDown} onBlur={dropUp}>
                                <NavLink 
                                    to="/products">
                                    Shop
                                </NavLink>
                                <ul className="nav-dropdown" hidden={true}>
                                    <li>
                                        <a href="#!">EXTRA VIRGIN OLIVE OILS</a>
                                    </li>
                                    <li>
                                        <a href="#!">BALSAMIC VINEGARS</a>
                                    </li>
                                    <li>
                                        <a href="#!">SPECIALTY OILS</a>
                                    </li>
                                    <li>
                                        <a href="#!">ORGANIC</a>
                                    </li>
                                    <li>
                                        <a href="#!">FLAVORS OF THE MONTH</a>
                                    </li>
                                    <li>
                                        <a href="#!">BEST SELLERS</a>
                                    </li>
                                    <li>
                                        <a href="#!">GIFTS</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="main" onFocus={dropDown} onBlur={dropUp}> 
                                <a href="#!">First Crush</a>
                                
                                <ul className="nav-dropdown"  hidden={true}>
                                    <li>
                                        <a href="#!">HARVEST TO CRUSH</a>
                                    </li>
                                    <li>
                                        <a href="#!">NUTRITION</a>
                                    </li>
                                    <li>
                                        <a href="#!">HEALTH & CHEMISTRY</a>
                                    </li>
                                    <li>
                                        <a href="#!">MISCONCEPTIONS</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="main" onFocus={dropDown} onBlur={dropUp}>
                                <NavLink 
                                        to="/">
                                        Recipes
                                </NavLink>
                                <ul className="nav-dropdown" hidden={true}>
                                    <li>
                                        <a href="#!">OIL AND VINEGAR PAIRINGS</a>
                                    </li>
                                    <li>
                                        <a href="#!">BUTTER TO OLIVE OIL CONVERSION CHART</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="main">
                                <a href="#!">Media</a>
                            </li>
                            <li className="main">
                                <a href="#!">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                </section>
        </div>
    );
}

export default NavBar;


const dropDown = (event) => {
    event.target.nextElementSibling.hidden = false
}

const dropUp = (event) => {
    event.target.nextElementSibling.hidden = true
} 