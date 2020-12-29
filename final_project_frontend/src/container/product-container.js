import React, { Component } from 'react';
import Product from '../components/product'

import {connect} from "react-redux"
import {loadProducts} from '../actions/products'
import { addToCart, createCart } from "../actions/carts";


class ProductContainer extends Component {

    componentDidMount() {
        this.props.loadProducts()
        this.props.createCart()
    }
    
    renderProducts = () => {
        return this.props.productsReducer.products.map(product => <Product product={product} addToCart={this.props.addToCart} cart={this.props.cartsReducer.cartItems}/>)
    }

    render() {
        return (
            <div className="products">
                {this.renderProducts()}
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return state
}

export default connect(mapsStateToProps, {loadProducts, addToCart, createCart})(ProductContainer);