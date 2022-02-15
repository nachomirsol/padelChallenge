import { AuthInfo } from 'store/user/types';

export const getLocalStorage = () => {
	const data = localStorage.getItem('playtomic_user');
	return JSON.parse(data);
};

export const setLocalStorage = (user: AuthInfo) => {
	localStorage.setItem('playtomic_user', JSON.stringify(user));
};

export const removeLocalStorage = () => {
	localStorage.removeItem('playtomic_user');
};
