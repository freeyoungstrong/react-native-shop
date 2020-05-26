import {
    ADD_PRODUCT_TO_CART_REQUEST,
    ADD_PRODUCT_TO_CART_SUCCESS,
    ADD_PRODUCT_TO_CART_FAILURE,
} from '../actions/actionTypes';

let initialState = {
    products: [],
    error: null,
    // total: 0,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART_REQUEST: {
            return { ...state };
        }
        case ADD_PRODUCT_TO_CART_SUCCESS: {
            return {
                ...state,
                products: action.payload,
                // total: action.total
            };
        }
        case ADD_PRODUCT_TO_CART_FAILURE: {
            return {
                ...state,
                error: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
