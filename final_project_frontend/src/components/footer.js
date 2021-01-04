import React from 'react';

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
                        <li>EVOO</li>
                        <li>Balsamic Vinegars</li>
                        <li>Specialty Oils</li>
                        <li>Flavored Oils</li>
                        <li>Gifts</li>
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
                        <li>Contact us</li>
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