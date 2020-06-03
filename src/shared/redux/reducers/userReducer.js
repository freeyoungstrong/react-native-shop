import { USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAILURE } from '../actions/actionTypes';

let initialState = {
    firstname: '',
    lastname: '',
    email: '',
    error: null,
    isLoading: false,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST: {
            return { ...state, isLoading: true };
        }
        case USER_DETAILS_SUCCESS: {
            return {
                ...state,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                email: action.payload.email,
                isLoading: false,
            };
        }
        case USER_DETAILS_FAILURE: {
            return { ...state, error: action.payload, isLoading: false };
        }
        default:
            return state;
    }
};
