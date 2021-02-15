import React, { Component } from 'react';
import Product from '../components/product'

import {connect} from "react-redux"
import {loadProducts} from '../actions/productActions'
import { addToCart } from "../actions/cartActions";


class ProductContainer extends Component {

    componentDidMount() {
        this.props.loadProducts(this.props.match.params)
    }
    
    renderProducts = () => {
        return this.props.productReducers.products.map(product => <Product key={product.id} product={product} addToCart={this.props.addToCart} cart={this.props.cartReducers.cartItems}/>)
    }

    render() {
        return (
            <div className="page-content">
                {this.renderProducts()}
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return state
}

export default connect(mapsStateToProps, {loadProducts, addToCart})(ProductContainer);