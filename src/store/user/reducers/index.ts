import {
	USER_LOGIN_FAIL,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
} from '../actionTypes';
import { SetUserLoggedAction, UserState } from '../types';

const initialState: UserState = {
	isLogged: false,
	error: false,
	user: { access_token: '', email: '' },
};

const userReducer = (
	state: UserState = initialState,
	action: SetUserLoggedAction
) => {
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
			return {
				user: action.payload,
				isLogged: true,
			};
		case USER_LOGIN_FAIL:
			return {
				error: true,
				isLogged: false,
			};
		case USER_LOGOUT:
			return {
				user: null,
				isLogged: false,
			};

		default:
			return state;
	}
};

export { userReducer };
