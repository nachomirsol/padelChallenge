import { useState } from 'react';
import { useDispatch } from 'react-redux';
/** Actions */
import { setUserLogged } from 'store/user/actions';
/** Constants */
import { CREDENTIALS } from 'constants/credentials';

export const useLogin = () => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

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
			setError(false);
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
