import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from './components/NavBar';
import ProductContainer from './container/product-container'

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
          <NavBar />
          <Route exact path="/" render={() => <div>Home Page</div>} />
          <Route path='/products' >
            <ProductContainer/>
          </Route>
          {/*<Route path='/cart' render={routerProps => <Cart cartItems={this.props.cartItems}></Cart>} />*/}
      </Router>
    );
  }
}

export default App;
