/** Libraries */
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
/** Utils */
import { checkLocalStorage } from 'utils/localStorage';

export const RequireAuth: React.FC<{ children: JSX.Element }> = ({
	children,
}) => {
	const isLogged = useSelector((state) => state?.user.isLogged);
	//||jwt_decode(checkLocalStorage())?.email;
	// if (!isLogged) {
	// 	return <Navigate to='/login' />;
	// }

	return children;
};
