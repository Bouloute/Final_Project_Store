import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartsReducer from './cartReducer';

export default combineReducers({
    productsReducer: productsReducer,
    cartsReducer: cartsReducer
});