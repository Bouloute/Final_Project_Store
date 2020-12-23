import React, { Component } from 'react';
import Product from '../components/product'

import {connect} from "react-redux"
import {loadProducts} from '../actions/products'
import { addToCart } from "../actions/carts";


class ProductContainer extends Component {

    componentDidMount() {
        this.props.loadProducts()
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

export default connect(mapsStateToProps, {loadProducts, addToCart})(ProductContainer);