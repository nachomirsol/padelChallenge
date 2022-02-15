import {
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGOUT,
} from '../actionTypes';
import { AuthInfo, SetUserLogOut, UserActions } from '../types';

export const setUserLogged = (auth: AuthInfo): UserActions => {
	return {
		type: USER_LOGIN_SUCCESS,
		payload: auth,
	};
};

export const setUserLoginFailure = (): UserActions => ({
	type: USER_LOGIN_FAIL,
	payload: 'Error',
});

export const setUserLogout = (): SetUserLogOut => {
	return {
		type: USER_LOGOUT,
	};
};
