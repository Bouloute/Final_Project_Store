import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './navbar.css';

import App from './App';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from "redux-thunk"
import productsReducer from './reducers/index';

let store = createStore(productsReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);