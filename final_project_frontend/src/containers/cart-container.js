import React, {Component} from 'react';
import { connect } from 'react-redux';

import {findCart, deleteCart, removeProductFromCart} from '../actions/cartActions'

import Cart from '../components/cart'

class CartContainer extends Component {
    
    componentDidMount() {
        this.props.findCart(parseInt(this.props.match.params.id))
    }

    renderProducts = () => {
        if (this.props.cartItems.length !== 0 ) {
            if (!!this.props.cartItems[0].product_id){            
                return this.props.cartItems.map(product => <Cart key={product.id} cartItem={product} removeProductFromCart={this.props.removeProductFromCart} />)
            }
        }
    }
    
    render() {
        return (
            <div className="page-content">
                <button onClick={this.props.deleteCart}>Erase cart</button>
                {this.renderProducts()}
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return state.cartReducers
}
export default connect( mapsStateToProps, {findCart, deleteCart, removeProductFromCart})(CartContainer)
