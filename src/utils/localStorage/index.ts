export const checkLocalStorage = () => {
	return localStorage.getItem('access_token');
};

export const setLocalStorage = (token: string) => {
	localStorage.setItem('access_token', JSON.stringify(token));
};

export const removeLocalStorage = () => {
	localStorage.removeItem('access_token');
};
