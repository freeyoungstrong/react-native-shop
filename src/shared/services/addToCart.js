import { API_URL } from 'shared/constants';

export const addToCart = requestOptions => fetch(`${API_URL}?rt=a/checkout/cart`, requestOptions);
