import { logInWithEmailAndPassword } from 'api/auth';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
/** Actions */
import { setUserLogged, setUserLoginFailure } from 'store/user/actions';
/** Utils */
import { setLocalStorage } from 'utils/localStorage';

export const useLogin = () => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const isLogged = useSelector((state) => state?.user?.isLogged);

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
			const userLogin = await logInWithEmailAndPassword(
				credentials.email,
				credentials.password
			);
			console.log(userLogin);
			dispatch(setUserLogged(userLogin));
			navigate('/');
		} catch (error) {
			setError(true);
			dispatch(setUserLoginFailure());
		}
	};

	return {
		credentials,
		handleChange,
		handleSubmit,
		error,
	};
};
