import { API_URL } from 'shared/constants';

export const getProducts = page => fetch(`${API_URL}?rt=a/product/filter&keyword=a&page=${page}&rows=10`);

export const getCategories = () => fetch(`${API_URL}?rt=a/product/category&category_id=0`);
