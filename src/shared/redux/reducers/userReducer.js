import { USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAILURE } from '../actions/actionTypes';

let initialState = {
    firstname: '',
    lastname: '',
    email: '',
    error: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST: {
            return { ...state };
        }
        case USER_DETAILS_SUCCESS: {
            return {
                ...state,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                email: action.payload.email,
            };
        }
        case USER_DETAILS_FAILURE: {
            return { ...state, error: action.payload };
        }
        default:
            return state;
    }
};
