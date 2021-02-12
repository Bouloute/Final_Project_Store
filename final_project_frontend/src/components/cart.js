import React, { Component } from 'react';

import '../product.css';

class Cart extends Component {
    
    render() {
        //TODO: whats this horror
        const product = this.props.product.product
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="top">
                        <img src={product.img_url} width="280px" height="300px"></img>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="details">
                                <h1>{product.name}</h1>
                                <p>${product.price}</p>
                            </div>
                            <button className="remove" onClick={() => {this.props.removeProductFromCart(product.id, this.props.product.cart_id)}}> Remove from cart</button>
                        </div>
                    </div>
                </div>
                <div className="inside">
                    <div className="icon">
                            {this.props.product.count}
                    </div>
                    
                    <div className="contents">
                        <p>
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;