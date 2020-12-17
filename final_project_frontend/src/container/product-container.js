import React, { Component } from 'react';
import Product from '../components/product'

import {connect} from "react-redux"
import {loadProducts} from '../actions/products'

class ProductContainer extends Component {
    /*componentDidMount() {
        this.props.loadProducts()
    }*/
    
    renderProducts = () => {
        return this.props.products.map(product => <Product product={product}/>)
    }

    render() {
        return (
            <div>
                Product Container
                <button onClick={this.props.loadProducts}>Load Products</button>
                {this.renderProducts()}
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return state
}

export default connect(mapsStateToProps, {loadProducts})(ProductContainer);