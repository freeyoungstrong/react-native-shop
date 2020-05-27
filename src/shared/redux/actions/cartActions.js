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
        const { products } = result;
        const totalPrice = result.totals[0].text;
        dispatch(fetchCartSuccess(products, totalPrice));
    } catch (error) {
        dispatch(fetchCartFailure(error));
    }
};

const fetchCartRequest = () => requestCreator(FETCH_CART_REQUEST);
const fetchCartSuccess = (products, totalPrice) => successCreator(FETCH_CART_SUCCESS, products, totalPrice);
const fetchCartFailure = error => failureCreator(FETCH_CART_FAILURE, error);

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
        const { products: product } = result;
        const totalPrice = result.totals[0].text;
        dispatch(addProductToCartSuccess(product, totalPrice));
    } catch (error) {
        dispatch(addProductToCartFailure(error));
    }
};

const addProductToCartRequest = () => requestCreator(ADD_PRODUCT_TO_CART_REQUEST);
const addProductToCartSuccess = (product, totalPrice) =>
    successCreator(ADD_PRODUCT_TO_CART_SUCCESS, product, totalPrice);
const addProductToCartFailure = error => failureCreator(ADD_PRODUCT_TO_CART_FAILURE, error);

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
        const { products, totals: totalPrice } = result;
        dispatch(removeProductsFromCartSuccess(products, totalPrice));
    } catch (error) {
        dispatch(removeProductsFromCartFailure(error));
    }
};

const removeProductsFromCartRequest = () => requestCreator(REMOVE_PRODUCTS_FROM_CART_REQUEST);
const removeProductsFromCartSuccess = (products, totalPrice) =>
    successCreator(REMOVE_PRODUCTS_FROM_CART_SUCCESS, products, totalPrice);
const removeProductsFromCartFailure = error => failureCreator(REMOVE_PRODUCTS_FROM_CART_FAILURE, error);

const requestCreator = type => {
    return { type: type };
};

const successCreator = (type, products, totalPrice) => dispatch => {
    dispatch({ type: type, payload: products, total: totalPrice });
};

const failureCreator = (type, error) => dispatch => {
    dispatch({ type: type, payload: error });
};
