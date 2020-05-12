import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './actionTypes';
import { getProducts } from '../../services';

export const fetchProducts = () => async dispatch => {
    dispatch(fetchProductsRequest());
    try {
        const response = await getProducts();
        const result = await response.json();
        const { rows: products } = result;
        dispatch(fetchProductsSuccess(products));
    } catch (error) {
        console.log('Error while fetching products: ', error);
        dispatch(fetchProductsFailure(error));
    }
};

const fetchProductsRequest = () => {
    return { type: FETCH_PRODUCTS_REQUEST };
};

const fetchProductsSuccess = products => dispatch => {
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
};

const fetchProductsFailure = error => dispatch => {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error });
};
