import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from '../actionTypes';
import { UserActions } from '../types';

export const setUserLogged = (user: string): UserActions => {
	return {
		type: USER_LOGIN_SUCCESS,
		payload: user,
	};
};

export const setUserLoginFailure = (): UserActions => ({
	type: USER_LOGIN_FAIL,
	payload: 'Error',
});

export const setUserLogout = (): UserActions => {
	return {
		type: USER_LOGOUT,
	};
};
