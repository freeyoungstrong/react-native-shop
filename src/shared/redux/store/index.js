import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer, categoriesReducer, productsReducer } from '../reducers';
import { fetchCategories, fetchProducts } from '../actions';

const reducers = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    products: productsReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
store.dispatch(fetchCategories());
store.dispatch(fetchProducts());

export default store;
