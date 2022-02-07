const initialState = {
	isLogged: false,
	user: null,
};

const userReducer = (state = initialState, action: any) => {
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
