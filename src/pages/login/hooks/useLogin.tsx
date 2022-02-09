import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
/** Actions */
import { setUserLogged } from 'store/user/actions';
/** Utils */
import { setLocalStorage } from 'utils/localStorage';
/** Constants */
import { CREDENTIALS } from 'constants/credentials';

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

	const handleClick = () => {
		if (JSON.stringify(credentials) === JSON.stringify(CREDENTIALS)) {
			dispatch(setUserLogged());
			setLocalStorage(credentials.email);
			setError(false);

			navigate('/');
		} else {
			console.log('FAIL');
			setError(true);
		}
	};

	return {
		credentials,
		handleChange,
		handleClick,
		error,
	};
};
