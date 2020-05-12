import { API_URL } from 'shared/constants';

export const getProducts = () => fetch(`${API_URL}?rt=a/product/filter&keyword=a&page=1&rows=10`);

export const getCategories = () => fetch(`${API_URL}?rt=a/product/category&category_id=0`);
