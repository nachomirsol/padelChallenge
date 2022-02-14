import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from '../actionTypes';
import { SetUserLoggedAction, UserActions, UserState } from '../types';

const initialState: UserState = {
	isLogged: false,
	error: false,
	user: null,
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
			};

		default:
			return state;
	}
};

export { userReducer };
