import { UserActions, UserState } from '../types';

const initialState: UserState = {
	isLogged: false,
	user: null,
};

const userReducer = (state: UserState = initialState, action: UserActions) => {
	switch (action.type) {
		case 'USER_LOGIN_SUCCESS':
			return {
				...state,
				isLogged: true,
			};

		default:
			return state;
	}
};

export { userReducer };
