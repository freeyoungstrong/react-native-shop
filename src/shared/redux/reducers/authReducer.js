import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/actionTypes';

let initialState = {
    token: null,
    error: null,
    isLoading: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return { ...state, isLoading: true };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                token: action.payload.token,
                isLoading: false,
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            };
        }
        case LOGOUT: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};
