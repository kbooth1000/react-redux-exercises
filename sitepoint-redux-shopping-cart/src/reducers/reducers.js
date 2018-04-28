import { combineReducers } from 'redux';
import {ADD_TO_CART} from '../actions/action-types';
import {UPDATE_CART} from  '../actions/action-types';
import {DELETE_FROM_CART} from  '../actions/action-types';

const productsReducer = function (state = [], action) {
    return state;
}

const initialState = {
    cart: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ]
}

let cartReducer =  function(state=initialState, action) {
    switch (action.type) {
      case ADD_TO_CART: {
        return {
          ...state,
          cart: [...state.cart, action.payload]
        }
      }
  
      case UPDATE_CART: {
        return {
          ...state,
          cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
        }
      }
  
      case DELETE_FROM_CART: {
        return {
          ...state,
          cart: state.cart.filter(item => item.product !== action.payload.product)        }
      }
  
      default:
        return state;
    }
  };

const allReducers = {
    products: productsReducer,
    shoppingCart: cartReducer
}

let rootReducer = combineReducers(allReducers);

export default rootReducer;