import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/actionTypes';

let initialState = {
    status: null,
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
                status: action.payload.status,
                token: action.payload.token,
                error: null,
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                status: action.payload.status,
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
