export type UserState = {
	isLogged: boolean;
	error: boolean;
	user: AuthInfo;
};

export type AuthInfo = {
	access_token: string;
	email: string | null;
};

export type SetUserLoggedAction = {
	type: string;
	payload: AuthInfo;
};

export type SetUserLogOut = {
	type: string;
};

export type SetUserLoginFailureAction = {
	type: string;
	payload: string;
};

export type UserActions = SetUserLoggedAction | SetUserLoginFailureAction;
