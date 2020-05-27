import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/actionTypes';

let initialState = {
    token: null,
    error: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return { ...state };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                token: action.payload.token,
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                error: action.payload.error,
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
