import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './actionTypes';
import { fetchProducts } from '../../services';

export const fetchProducts = () => async dispatch => {
    dispatch(fetchProductsRequest());
    try {
        const response = await fetchProducts();
        const result = await response.json();
        const products = result.rows;
        dispatch(fetchProductsSuccess(products));
    } catch (error) {
        console.log('Error while fetching products: ', error);
        dispatch(fetchProductsFailure(error));
    }
};

const fetchProductsRequest = () => dispatch => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
};

const fetchProductsSuccess = products => dispatch => {
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
};

const fetchProductsFailure = error => dispatch => {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error });
};
