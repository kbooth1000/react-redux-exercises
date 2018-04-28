import {ADD_TO_CART} from '../actions/action-types';
import {UPDATE_CART} from  '../actions/action-types';
import {DELETE_FROM_CART} from  '../actions/action-types';


export let addToCart = (product, quantity, unitCost) => {
    return {
        type: ADD_TO_CART,
        payload: {product, quantity, unitCost}
    };
};

export let updateCart = (product, quantity, unitCost ) => {
    return {
        type: UPDATE_CART,
        payload: {
            product, quantity, unitCost
        }
    }
}

export let deleteFromCart = (product) => {
    return {
      type: DELETE_FROM_CART,
      payload: {
        product
      }
    }
  }

export default {addToCart, updateCart, deleteFromCart};