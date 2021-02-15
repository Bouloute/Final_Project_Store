import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {
    
    render() {
        //debugger
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
                                    <NavLink to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="main" onMouseLeave={dropUp} >
                                    <NavLink to="/products" onMouseOver={dropDown}>
                                        Shop
                                    </NavLink>
                                    <ul className="nav-dropdown" hidden={true}>
                                        <li>
                                            <NavLink to="/products/EVOO">EXTRA VIRGIN OLIVE OILS</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/products/B">BALSAMIC VINEGARS</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/products/OO">FLAVORED OILS</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="main" onMouseLeave={dropUp}>
                                    <NavLink to="/" onMouseOver={dropDown}>
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
                                    <NavLink to="/contact">
                                        Contact
                                    </NavLink>
                                </li>

                                <li className="main">
                                    {!!this.props.cartId ? <NavLink to={"/carts/" + this.props.cartId}>Cart</NavLink> : <NavLink to="/carts">Cart</NavLink>}
                                </li>
                            </ul>
                        </nav>
                    </div>
                    </section>
            </div>
        );
    }
}


const mapsStateToProps = (state) => {
    //TODO refator to collect only the reducer
    //debugger
    return state.cartReducers
}


export default connect(mapsStateToProps)(NavBar);


const dropDown = (event) => {
    event.target.nextElementSibling.hidden = false
}

const dropUp = (event) => {
    //TODO: FIX VERY BAD CODE
    document.getElementsByClassName("nav-dropdown")[0].hidden = true
    document.getElementsByClassName("nav-dropdown")[1].hidden = true
} 
