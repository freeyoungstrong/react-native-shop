import { API_URL } from 'shared/constants';

export const getUserDetails = requestOptions => fetch(`${API_URL}?rt=a/account/account`, requestOptions);
