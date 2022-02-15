/** Libraries */
import { Navigate } from 'react-router-dom';
/** hooks */
import { useLogin } from 'hooks/useLogin';

export const RequireAuth: React.FC<{ children: JSX.Element }> = ({
	children,
}) => {
	const { verifyToken } = useLogin();
	if (verifyToken()) {
		return children;
	} else {
		return <Navigate to='/login' />;
	}
};
