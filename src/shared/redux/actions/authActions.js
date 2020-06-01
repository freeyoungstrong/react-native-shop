import { Vibration } from 'react-native';
import * as Keychain from 'react-native-keychain';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actionTypes';
import { USER, API_URL } from 'shared/constants';

const ONE_SECOND_IN_MS = 1000;

export const login = ({ loginName, password }) => async dispatch => {
    dispatch(loginRequest());
    const formData = new FormData();
    formData.append('loginname', loginName);
    formData.append('password', password);
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: formData,
    };
    try {
        const response = await fetch(`${API_URL}?rt=a/account/login`, requestOptions);
        const result = await response.json();
        if (result.status === 1) {
            await Keychain.setGenericPassword(USER, `${result.token}`);
            dispatch(loginSuccess({ token: result.token }));
        } else {
            Vibration.vibrate(ONE_SECOND_IN_MS);
            dispatch(loginFailure({ error: result.error }));
        }
    } catch (error) {
        dispatch(loginFailure(error));
    }
};

const loginRequest = () => {
    return { type: LOGIN_REQUEST };
};

export const loginSuccess = ({ token }) => dispatch => {
    dispatch({ type: LOGIN_SUCCESS, payload: { token } });
};

const loginFailure = ({ error }) => dispatch => {
    dispatch({ type: LOGIN_FAILURE, payload: { error } });
};

export const logout = () => async dispatch => {
    await Keychain.resetGenericPassword();
    dispatch({ type: LOGOUT });
};
