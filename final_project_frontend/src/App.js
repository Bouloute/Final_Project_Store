import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from './components/NavBar';
import ProductContainer from './containers/product-container'
import CartContainer from './containers/cart-container'
import Footer from './components/footer'
import Home from './components/home'
import Contact from './components/contact'
import Login from './components/login'

import { createCart, deleteCart } from "./actions/cartActions";

import './App.css';
import { connect } from 'react-redux';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
  console.log("Session token is now set at " + sessionStorage.token)
}

function getToken() {
  console.log("retriving Token")
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

class App extends Component {
  
  componentDidMount() {
    const token = getToken();

    this.props.createCart() 
  }
  
  render() {
    return (
      <Router>
          <NavBar getToken={getToken}></NavBar>
          <Route exact path="/" component={Home} />
          <Route exact path='/products' component={ProductContainer}/>
          <Route path='/products/:query' component={ProductContainer}/>
          <Route path='/carts/:id' component={CartContainer}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/login' /*component={Login}*/><Login setToken={setToken}/></Route>
          <Footer/>
      </Router>
    );
  }
}

export default connect(null, {createCart, deleteCart})(App);