import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/actionTypes';

let initialState = {
    products: [],
    error: null,
    currentPage: 0,
    pagesTotal: 1,
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST: {
            return { ...state };
        }
        case FETCH_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: [...state.products, ...action.products],
                currentPage: parseInt(action.currentPage),
                pagesTotal: parseInt(action.pagesTotal),
            };
        }
        case FETCH_PRODUCTS_FAILURE: {
            return { ...state, error: action.payload };
        }
        default:
            return state;
    }
};
