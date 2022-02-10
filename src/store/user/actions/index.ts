/** Constants */
import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from '../actionTypes';
import { UserActions } from '../types';

export const setUserLogged = (): UserActions => {
	return {
		type: USER_LOGIN_SUCCESS,
	};
};

export const setUserLoginFailure = (): UserActions => ({
	type: USER_LOGIN_FAIL,
});
