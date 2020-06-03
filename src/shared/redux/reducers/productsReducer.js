import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/actionTypes';

let initialState = {
    products: [],
    error: null,
    currentPage: 0,
    pagesTotal: 1,
    isLoading: false,
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST: {
            return { ...state, isLoading: true };
        }
        case FETCH_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: [...state.products, ...action.products],
                currentPage: parseInt(action.currentPage),
                pagesTotal: parseInt(action.pagesTotal),
                isLoading: false,
            };
        }
        case FETCH_PRODUCTS_FAILURE: {
            return { ...state, error: action.payload, isLoading: false };
        }
        default:
            return state;
    }
};
