import React, {Component} from 'react';
import { connect } from 'react-redux';
//import { useParams } from 'react-router-dom';

import {findCart, deleteCart, removeProductFromCart} from '../actions/cartActions'

import Cart from '../components/cart'

class CartContainer extends Component {
    
    componentDidMount() {
        this.props.findCart(parseInt(this.props.match.params.id))
    }

    renderProducts = () => {
        if (this.props.cartReducers.cartItems.length !== 0) {
            return this.props.cartReducers.cartItems.map(product => <Cart key={product.id} product={product} removeProductFromCart={this.props.removeProductFromCart} />)
        }
    }
    
    render() {
        return (
            <div className="products">
                <button onClick={this.props.deleteCart}>Erase cart</button>
                {this.renderProducts()}
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    //TODO refator to collect only the reducer
    return state
}
export default connect( mapsStateToProps, {findCart, deleteCart, removeProductFromCart})(CartContainer)
