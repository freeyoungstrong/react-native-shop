import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from '../actions/actionTypes';

let initialState = {
    categories: [],
    error: null,
};

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST: {
            return { ...state };
        }
        case FETCH_CATEGORIES_SUCCESS: {
            return {
                ...state,
                categories: action.payload,
            };
        }
        case FETCH_CATEGORIES_FAILURE: {
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
