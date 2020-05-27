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
} from './actionTypes';
import { cart } from '../../services';

export const addProductTocart = (token, productId, quantity) => async dispatch => {
    dispatch(addProductToCartRequest());
    const formData = new FormData();
    formData.append('token', token);
    formData.append('product_id', productId);
    formData.append('quantity', quantity);
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: formData,
    };
    try {
        const response = await cart(requestOptions);
        const result = await response.json();
        const product = result.products;
        const totalPrice = result.totals[0].text;
        dispatch(addProductToCartSuccess(product, totalPrice));
    } catch (error) {
        dispatch(addProductToCartFailure(error));
    }
};

export const fetchCart = token => async dispatch => {
    dispatch(fetchCartRequest());
    const formData = new FormData();
    formData.append('token', token);
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: formData,
    };
    try {
        const response = await cart(requestOptions);
        const result = await response.json();
        const products = result.products;
        const totalPrice = result.totals[0].text;
        dispatch(fetchCartSuccess(products, totalPrice));
    } catch (error) {
        dispatch(fetchCartFailure(error));
    }
};

export const removeProductsFromCart = (token, removeAll) => async dispatch => {
    dispatch(removeProductsFromCartRequest());
    const formData = new FormData();
    formData.append('token', token);
    formData.append('remove_all', removeAll);
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: formData,
    };
    try {
        const response = await cart(requestOptions);
        const result = await response.json();
        const products = result.products;
        const totalPrice = result.totals;
        dispatch(removeProductsFromCartSuccess(products, totalPrice));
    } catch (error) {
        dispatch(removeProductsFromCartFailure(error));
    }
};

const removeProductsFromCartRequest = () => {
    return { type: REMOVE_PRODUCTS_FROM_CART_REQUEST };
};

const removeProductsFromCartSuccess = (products, totalPrice) => dispatch => {
    dispatch({ type: REMOVE_PRODUCTS_FROM_CART_SUCCESS, payload: products, total: totalPrice });
};

const removeProductsFromCartFailure = error => dispatch => {
    dispatch({ type: REMOVE_PRODUCTS_FROM_CART_FAILURE, payload: error });
};

const fetchCartRequest = () => {
    return { type: FETCH_CART_REQUEST };
};

const fetchCartSuccess = (products, totalPrice) => dispatch => {
    dispatch({ type: FETCH_CART_SUCCESS, payload: products, total: totalPrice });
};

const fetchCartFailure = error => dispatch => {
    dispatch({ type: FETCH_CART_FAILURE, payload: error });
};

const addProductToCartRequest = () => {
    return { type: ADD_PRODUCT_TO_CART_REQUEST };
};

const addProductToCartSuccess = (product, totalPrice) => dispatch => {
    dispatch({ type: ADD_PRODUCT_TO_CART_SUCCESS, payload: product, total: totalPrice });
};

const addProductToCartFailure = error => dispatch => {
    dispatch({ type: ADD_PRODUCT_TO_CART_FAILURE, payload: error });
};
