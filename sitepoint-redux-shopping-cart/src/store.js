import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/reducers';

console.log('rootreducer: ', rootReducer);

let store = createStore(rootReducer,
    composeWithDevTools()
);

export default store;