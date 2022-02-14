/** Libraries */
import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
/** Api */
import { logInWithEmailAndPassword, logout } from 'api/auth';
/** Actions */
import {
	setUserLogged,
	setUserLoginFailure,
	setUserLogout,
} from 'store/user/actions';

export const useLogin = () => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

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
		const userLogin = await logInWithEmailAndPassword(
			credentials.email,
			credentials.password
		);

		if (!userLogin) {
			setError(true);
			dispatch(setUserLoginFailure());
		} else {
			const userEmail = jwt_decode(userLogin);
			dispatch(setUserLogged(userEmail?.email));
			navigate('/dashboard');
		}
	};

	const handleLogout = () => {
		logout();
		dispatch(setUserLogout());
		navigate('/login');
	};

	return {
		credentials,
		handleChange,
		handleSubmit,
		error,
		handleLogout,
	};
};
