import React from 'react';
import { NavLink } from 'react-router-dom';

import '../footer.css'

const footer = () => {
    return (
        <div className="footer">
                <div className="col">
                    <h1>Home</h1>
                </div>
                <div className="col">
                    <h1>Shop</h1>
                    <ul>
                        <NavLink to="/products/EVOO"><li>EVOO</li></NavLink>
                        <NavLink to="/products/B"><li>Balsamic Vinegars</li></NavLink>
                        <NavLink to="/products/OO"><li>Flavored Oils</li></NavLink>
                    </ul>
                </div>
                <div className="col">
                    <h1>Recipies</h1>
                    <ul>
                        <li>Oil and Vinegar Pairings</li>
                        <li>Butter to Olive Oil Conversion Chart</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Contact</h1>
                    <ul>
                    <NavLink to="/contact"><li>Contact us</li></NavLink>
                    </ul>
                </div>
                <div className="col">
                    <h1>Social</h1>
                    <ul>
                        <li>Facebook</li>
                    </ul>
                </div>
        </div>
    );
};

export default footer;