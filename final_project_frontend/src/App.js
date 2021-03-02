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
import './navbar.css';
import { connect } from 'react-redux';


function setSession(userToken) {

  Object.entries(userToken).map(item => sessionStorage.setItem(item[0], item[1]))

  console.log("Session is now set at " + sessionStorage)
}

function getToken() {
  console.log("retriving Token")
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

class App extends Component {
  
  componentDidMount() {
    //const token = getToken();
    
    //If cart in session, no need to create cart
    if (!sessionStorage.cart_id){
      this.props.createCart()
    }
    console.log(sessionStorage.cart_id)
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
          <Route path='/login' /*component={Login}*/><Login setSession={setSession}/></Route>
          <Footer/>
      </Router>
    );
  }
}

export default connect(null, {createCart, deleteCart})(App);