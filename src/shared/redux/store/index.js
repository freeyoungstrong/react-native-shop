import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer, categoriesReducer, productsReducer, cartReducer, userReducer } from '../reducers';

const reducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
