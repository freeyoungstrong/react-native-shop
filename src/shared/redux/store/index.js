import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer, categoriesReducer } from '../reducers';
import { fetchCategories } from '../actions';

const reducers = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
store.dispatch(fetchCategories());

export default store;
