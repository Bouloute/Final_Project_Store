import React, { Component } from 'react';

import '../product.css';

class product extends Component {
    render() {
        return (
            <div class="wrapper">
                <div class="container">
                    <div class="top">
                        <img src={this.props.product.img_url}></img>
                    </div>
                    <div class="bottom">
                        <div class="left">
                            <div class="details">
                                <h1>{this.props.product.name}</h1>
                                <p>{this.props.product.price}</p>
                            </div>
                            <div class="buy"><i class="material-icons">add_shopping_cart</i></div>
                        </div>
                        <div class="right">
                            <div class="done"><i class="material-icons">done</i></div>
                            <div class="details">
                                <h1>Chair</h1>
                                <p>Added to your cart</p>
                            </div>
                            <div class="remove"><i class="material-icons">clear</i></div>
                        </div>
                    </div>
                </div>
                <div class="inside">
                    <div class="icon">
                        <i class="material-icons">
                            0
                        </i>
                        </div>
                    </div>
            </div>
        )
    }
}

export default product;