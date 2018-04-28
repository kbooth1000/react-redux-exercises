import {addToCart} from './actions/actions';
import {updateCart} from './actions/actions';
import {deleteFromCart} from './actions/actions';
import store from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const App = <h1>Redux Shopping Cart</h1>;

console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// store.dispatch(addToCart('Coffee 500gm', 1, 250));
// store.dispatch(addToCart('Flour 1kg', 2, 110));
// store.dispatch(addToCart('Juice 2L', 1, 250));

// // Update Cart
// store.dispatch(updateCart('Flour 1kg', 5, 110));

// // Delete from Cart
// store.dispatch(deleteFromCart('Flour 1kg'));
// store.dispatch(deleteFromCart('Juice 2L'));



unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    { App }
  </Provider> ,
  document.getElementById('root')
);