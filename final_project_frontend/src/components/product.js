import React, { Component } from 'react';

import '../product.css';

class product extends Component {
    
    render() {
        //debugger
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
                            <div className="buy" onClick={() => this.props.addToCart(this.props.product.id)}></div>
                        </div>
                    </div>
                </div>
                <div className="inside">
                    <div className="icon">
                            {!!(this.props.cart.find(cartItem => cartItem.cartId === this.props.product.id) )? this.props.cart.find(cartItem => cartItem.cartId === this.props.product.id).count : 0 }
                            
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

export default product;