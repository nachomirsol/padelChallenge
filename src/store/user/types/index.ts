export type UserState = {
	isLogged: boolean;
	error: boolean;
	user: string | null;
};

export type SetUserLoggedAction = {
	type: string;
	payload: string;
};

export type SetUserLoginFailureAction = {
	type: string;
};

export type UserActions = SetUserLoggedAction | SetUserLoginFailureAction;
