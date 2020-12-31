import React, {Component} from 'react';
import { connect } from 'react-redux';
//import { useParams } from 'react-router-dom';

import {findCart} from '../actions/carts'

import Cart from '../components/cart'
/*
function CartContainer(props) {
    let { id } = useParams()

    //find in db cart with id of id

    //display list of products     myCart.products => [{...}]
    
    props.findCart(id)

    const cartItems = props.productsReducer.products.map(product => <Cart product={product} />)
    

    return (
        <div className="products">
            {cartItems}
        </div>
    );
}

const mapsStateToProps = (state) => {
    //TODO refator to collect only the reducer
    return state
}

export default connect( mapsStateToProps, {findCart})(CartContainer)

*/

class CartContainer extends Component {
    componentDidMount() {
        this.props.findCart(this.props.match.params.id)
    }

    renderProducts = () => {
        return this.props.productsReducer.products.map(product => <Cart product={product} />)
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
