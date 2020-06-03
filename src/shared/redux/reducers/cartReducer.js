import {
    ADD_PRODUCT_TO_CART_REQUEST,
    ADD_PRODUCT_TO_CART_SUCCESS,
    ADD_PRODUCT_TO_CART_FAILURE,
    FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS,
    FETCH_CART_FAILURE,
    REMOVE_PRODUCTS_FROM_CART_REQUEST,
    REMOVE_PRODUCTS_FROM_CART_SUCCESS,
    REMOVE_PRODUCTS_FROM_CART_FAILURE,
} from '../actions/actionTypes';

let initialState = {
    products: [],
    error: null,
    total: 0,
    isLoading: false,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CART_REQUEST:
        case ADD_PRODUCT_TO_CART_REQUEST:
        case REMOVE_PRODUCTS_FROM_CART_REQUEST: {
            return { ...state, isLoading: true };
        }
        case FETCH_CART_SUCCESS:
        case ADD_PRODUCT_TO_CART_SUCCESS:
        case REMOVE_PRODUCTS_FROM_CART_SUCCESS: {
            return {
                ...state,
                products: action.payload,
                total: action.total,
                isLoading: false,
            };
        }
        case FETCH_CART_FAILURE:
        case ADD_PRODUCT_TO_CART_FAILURE:
        case REMOVE_PRODUCTS_FROM_CART_FAILURE: {
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        }
        default: {
            return state;
        }
    }
};
