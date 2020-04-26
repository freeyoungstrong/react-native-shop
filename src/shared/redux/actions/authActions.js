import { Vibration } from 'react-native';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actionTypes';
import { storeData, deleteData } from 'shared/utils';
import { USER } from 'shared/constants';

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
        const response = await fetch('http://34.73.95.65/index.php?rt=a/account/login', requestOptions);
        const result = await response.json();
        if (result.status === 1) {
            await storeData(USER, `${result.userToken}`);
            dispatch(loginSuccess(result));
        } else {
            Vibration.vibrate(ONE_SECOND_IN_MS);
            dispatch(loginFailure({ status: result.status, error: result.error }));
        }
    } catch (error) {
        dispatch(loginFailure(error));
    }
};

const loginRequest = () => dispatch => {
    dispatch({ type: LOGIN_REQUEST });
};

const loginSuccess = ({ status, userToken }) => dispatch => {
    dispatch({ type: LOGIN_SUCCESS, payload: { status, userToken } });
};

const loginFailure = ({ status, error }) => dispatch => {
    dispatch({ type: LOGIN_FAILURE, payload: { status, error } });
};

export const logout = () => async dispatch => {
    await deleteData(USER);
    dispatch({ type: LOGOUT });
};
