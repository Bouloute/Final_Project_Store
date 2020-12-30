import React, { Component } from 'react';

import '../product.css';

class Cart extends Component {
    
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="top">
                        <img src={this.props.product.img_url} width="280px" height="300px"></img>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="details">
                                <h1>{this.props.product.name}</h1>
                                <p>${this.props.product.price}</p>
                            </div>
                            <div className="buy"> remove from cart</div>
                        </div>
                    </div>
                </div>
                <div className="inside">
                    <div className="icon">
                            {/*How many times in cart */}
                    </div>
                    
                    <div className="contents">
                        <p>
                            {this.props.product.description}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;