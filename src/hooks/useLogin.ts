/** Libraries */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
/** Api */
import { logInWithEmailAndPassword, logout } from 'api/auth';
/** Actions */
import {
	setUserLogged,
	setUserLoginFailure,
	setUserLogout,
} from 'store/user/actions';
/** Utild */
import {
	getLocalStorage,
	setLocalStorage,
	removeLocalStorage,
} from 'utils/localStorage';
/** Types */
import { UserState } from 'store/user/types';

export const useLogin = () => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const userRedux = useSelector((state:UserState) => state?.user?.user);
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const [error, setError] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
		setError(false);
	};

	const handleSubmit = async () => {
		try {
			const userAuthData = await logInWithEmailAndPassword(
				credentials.email,
				credentials.password
			);
			setLocalStorage(userAuthData);

			dispatch(setUserLogged(userAuthData));

			navigate('/dashboard');
		} catch (err) {
			setError(true);
			dispatch(setUserLoginFailure());
		}
	};

	const handleLogout = () => {
		logout();
		removeLocalStorage();
		dispatch(setUserLogout());
		navigate('/login');
	};
	const getUserInfo= () => {
		if (userRedux.access_token) {
			return userRedux;
		} else {
			const data = getLocalStorage();
			dispatch(setUserLogged(data));
			return data;
		}
	};
	const verifyToken = () => {
		try {
			const data = getUserInfo();

			const { access_token = null, email } = data;
			const { email: emailDecode } = jwt_decode(access_token);

			return email === emailDecode;
		} catch (error) {
			return false;
		}
	};

	return {
		credentials,
		handleChange,
		handleSubmit,
		error,
		handleLogout,
		navigate,
		verifyToken,
		userRedux,
	};
};
