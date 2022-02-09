import { CREDENTIALS } from 'constants/credentials';

export const checkLocalStorage = () => {
	return localStorage.getItem('user') === JSON.stringify(CREDENTIALS.email);
};

export const setLocalStorage = (user: string) => {
	localStorage.setItem('user', JSON.stringify(user));
};

export const removeLocalStorage = () => {
	localStorage.removeItem('user');
};
