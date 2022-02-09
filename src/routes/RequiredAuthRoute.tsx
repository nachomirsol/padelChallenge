/** Libraries */
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkLocalStorage } from 'utils/localStorage';

export const RequireAuth: React.FC<{ children: JSX.Element }> = ({
	children,
}) => {
	const isLogged =
		checkLocalStorage() || useSelector((state) => state?.user.isLogged);

	if (!isLogged) {
		return <Navigate to='/login' />;
	}

	return children;
};
