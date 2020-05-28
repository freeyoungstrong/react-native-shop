import { USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAILURE } from './actionTypes';
import { getUserDetails } from 'shared/services';

export const userDetails = token => async dispatch => {
    dispatch(userDetailsRequest());
    const formData = new FormData();
    formData.append('token', token);
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: formData,
    };
    try {
        const response = await getUserDetails(requestOptions);
        console.log('RESPONSE', response);
        const result = await response.json();
        console.log('RESULT', result);
        const { firstname, lastname, email } = result;
        dispatch(userDetailsSuccess({ firstname, lastname, email }));
    } catch (error) {
        console.log('Error while getting user details', error);
        dispatch(userDetailsFailure(error));
    }
};

const userDetailsRequest = () => {
    return { type: USER_DETAILS_REQUEST };
};

const userDetailsSuccess = ({ firstname, lastname, email }) => dispatch => {
    dispatch({ type: USER_DETAILS_SUCCESS, payload: { firstname, lastname, email } });
};

const userDetailsFailure = error => dispatch => {
    dispatch({ type: USER_DETAILS_FAILURE, payload: error });
};
