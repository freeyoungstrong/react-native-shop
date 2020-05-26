import { ADD_PRODUCT_TO_CART_REQUEST, ADD_PRODUCT_TO_CART_SUCCESS, ADD_PRODUCT_TO_CART_FAILURE } from './actionTypes';
import { addToCart } from '../../services';

export const addProductTocart = (token, productId, quantity) => async dispatch => {
    dispatch(addProductToCartRequest());
    const formData = new FormData();
    formData.append('token', token);
    formData.append('product_id', productId);
    quantity >= 1 ? formData.append('quantity', quantity) : null;
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: formData,
    };
    try {
        const response = await addToCart(requestOptions);
        const result = await response.json();
        const product = result.products;
        dispatch(addProductToCartSuccess(product));
    } catch (error) {
        dispatch(addProductToCartFailure(error));
    }
};

const addProductToCartRequest = () => {
    return { type: ADD_PRODUCT_TO_CART_REQUEST };
};

const addProductToCartSuccess = product => dispatch => {
    dispatch({ type: ADD_PRODUCT_TO_CART_SUCCESS, payload: product });
};

const addProductToCartFailure = error => dispatch => {
    dispatch({ type: ADD_PRODUCT_TO_CART_FAILURE, payload: error });
};
