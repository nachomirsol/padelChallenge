const initialState = {
	isLogged: false,
	user: null,
};

const userReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case 'USER_LOGIN_SUCCESS':
			return {
				...state,
				...action.content,
			};

		default:
			return state;
	}
};

export { userReducer };
