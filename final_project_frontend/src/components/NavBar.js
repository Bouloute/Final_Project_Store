import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {
    
    render() {
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
                                <li className="main" >
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
                                            <a href="#!">FLAVORED OILS</a>
                                        </li>
                                        <li>
                                            <a href="#!">GIFTS</a>
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
                                    <a href="#!">Contact</a>
                                </li>

                                <li className="main">
                                    {!!this.props.cartsReducer.id ? <NavLink to={"/carts/" + this.props.cartsReducer.id}>Cart</NavLink> : <NavLink to="/carts">Cart</NavLink>}
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
    //refator to collect only the reducer
    //this.props.reducer.state.id
    return state
}


export default connect(mapsStateToProps)(NavBar);


const dropDown = (event) => {
    event.target.nextElementSibling.hidden = false
}

const dropUp = (event) => {
    event.target.nextElementSibling.hidden = true
} 
