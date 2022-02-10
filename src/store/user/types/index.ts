export type User = {
	email: string;
	name: string | any;
};

export type UserState = {
	isLogged: boolean;
	user: User | null;
};

export type SetUserLoggedAction = {
	type: string;
	payload: User;
};

export type SetUserLoginFailureAction = {
	type: string;
};

export type UserActions = SetUserLoggedAction | SetUserLoginFailureAction;
