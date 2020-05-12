import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from './actionTypes';
import { fetchCategories } from '../../services';

export const fetchCategories = () => async dispatch => {
    dispatch(fetchCategoriesRequest());
    try {
        const response = await fetchCategories();
        const result = await response.json();
        const categories = result.subcategories;
        dispatch(fetchCategoriesSuccess(categories));
    } catch (error) {
        console.log('Error while getting categories from API: ', error);
        dispatch(fetchCategoriesFailure(error));
    }
};

const fetchCategoriesRequest = () => dispatch => {
    dispatch({ type: FETCH_CATEGORIES_REQUEST });
};

const fetchCategoriesSuccess = categories => dispatch => {
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: categories });
};

const fetchCategoriesFailure = error => dispatch => {
    dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error });
};
