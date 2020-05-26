import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer, categoriesReducer, productsReducer, cartReducer } from '../reducers';

const reducers = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    products: productsReducer,
    productsInCart: cartReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
