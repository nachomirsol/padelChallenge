import * as actions from '../actions';
import { USER_LOGIN_SUCCESS } from '../actionTypes';

describe('User actions', () => {
	it('Should return the action USER_LOGIN_SUCCESS', () => {
		const user = 'email@gmail.com';

		const expectedAction = {
			type: USER_LOGIN_SUCCESS,
			payload: user,
		};

		expect(actions.setUserLogged(user)).toEqual(expectedAction);
	});
});
