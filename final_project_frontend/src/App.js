import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from './components/NavBar';
import ProductContainer from './containers/product-container'
import CartContainer from './containers/cart-container'
import Footer from './components/footer'

import { createCart } from "./actions/cartActions";

import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  
  componentDidMount() {
    this.props.createCart() 
  }
  
  render() {
    return (
      <Router>
          <NavBar />
          <Route exact path="/" render={() => <div className="products">Home Page</div>} />
          <Route path='/products' >
            <ProductContainer/>
          </Route>
          <Route path='/carts/:id' component={CartContainer}/>
          <Footer/>
      </Router>
    );
  }
}

export default connect(null, {createCart})(App);