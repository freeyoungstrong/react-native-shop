import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/actionTypes';

let initialState = {
    products: [],
    error: null,
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST: {
            return { ...state };
        }
        case FETCH_PRODUCTS_SUCCESS: {
            return { ...state, products: action.payload };
        }
        case FETCH_PRODUCTS_FAILURE: {
            return { ...state, error: action.payload };
        }
        default:
            return state;
    }
};
