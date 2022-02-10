import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from '../actionTypes';
import { UserActions } from '../types';

export const setUserLogged = (user: any): UserActions => {
	return {
		type: USER_LOGIN_SUCCESS,
		payload: user,
	};
};

export const setUserLoginFailure = (): any => ({
	type: USER_LOGIN_FAIL,
	payload: 'Error',
});
