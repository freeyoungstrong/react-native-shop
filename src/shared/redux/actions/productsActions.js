import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './actionTypes';
import { getProducts } from '../../services';

export const fetchProducts = ({ pageParameter }) => async dispatch => {
    dispatch(fetchProductsRequest());
    try {
        const response = await getProducts(pageParameter);
        const result = await response.json();
        const { rows: products, page, total } = result;
        dispatch(fetchProductsSuccess(products, page, total));
    } catch (error) {
        console.log('Error while fetching products: ', error);
        dispatch(fetchProductsFailure(error));
    }
};

const fetchProductsRequest = () => {
    return { type: FETCH_PRODUCTS_REQUEST };
};

const fetchProductsSuccess = (products, currentPage, pagesTotal) => dispatch => {
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, products: products, currentPage: currentPage, pagesTotal: pagesTotal });
};

const fetchProductsFailure = error => dispatch => {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error });
};
