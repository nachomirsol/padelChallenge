import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from '../actionTypes';
import { UserActions, UserState } from '../types';

const initialState: UserState = {
	isLogged: false,
	error: false,
	user: null,
};

const userReducer = (state: UserState = initialState, action: UserActions) => {
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
			return {
				user: action.payload,
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
