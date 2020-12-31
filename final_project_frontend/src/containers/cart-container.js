import React, {Component} from 'react';
import { connect } from 'react-redux';
//import { useParams } from 'react-router-dom';

import {findCart} from '../actions/cartActions'

import Cart from '../components/cart'

class CartContainer extends Component {
    componentDidMount() {
        this.props.findCart(this.props.match.params.id)
    }

    renderProducts = () => {
        return this.props.productReducers.products.map(product => <Cart product={product} />)
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
    //TODO refator to collect only the reducer
    return state
}
export default connect( mapsStateToProps, {findCart})(CartContainer)
