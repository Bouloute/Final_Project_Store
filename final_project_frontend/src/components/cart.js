import React, { Component } from 'react';

import '../product.css';

class Cart extends Component {
    removeProductFromCart = (product_id, cart_id) => {
        this.props.removeProductFromCart(product_id, cart_id)
        document.getElementById(product_id).remove()
    }

    render() {
        const product = this.props.cartItem.product
        return (
            <div className="wrapper" id={product.id}>
                <div className="container">
                    <div className="top">
                        <img src={product.img_url} width="280px" height="300px"></img>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="details">
                                <h1>{product.name}</h1>
                                <p>${product.price * this.props.cartItem.count}</p>
                            </div>
                            <button className="remove" onClick={() => {this.removeProductFromCart(product.id, this.props.cartItem.cart_id)}}> Remove from cart</button>
                        </div>
                    </div>
                </div>
                <div className="inside">
                    <div className="icon">
                            {this.props.cartItem.count}
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