import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from '../actions/actionTypes';

let initialState = {
    categories: [],
    error: null,
    isLoading: false,
};

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST: {
            return { ...state, isLoading: true };
        }
        case FETCH_CATEGORIES_SUCCESS: {
            return {
                ...state,
                categories: action.payload,
                isLoading: false,
            };
        }
        case FETCH_CATEGORIES_FAILURE: {
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
