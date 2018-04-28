import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import {Provider} from 'react-redux';
import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';

let allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

let allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()    
);

const store = createStore(
    allReducers, {
        products: [{ name: 'iPhone' }],
        user: 'Mickey'
    },
);


ReactDOM.render(<Provider store = {store}>
    <App aRandomProp = 'whatever' />
    </Provider>, document.getElementById('root'));
registerServiceWorker();