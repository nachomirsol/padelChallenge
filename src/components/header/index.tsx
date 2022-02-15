/** Libraries */
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
/** Constants */
import { ROUTES } from 'models/routes';
/** Types */
import { RouteType } from 'types/routes';
/** Assets */
import { UserIcon } from 'assets/icons/user';
/** Hooks */
import { useLogin } from 'hooks/useLogin';
/** Styles */
import './styles/header.scss';

export const Header = () => {
	const { handleLogout, userRedux } = useLogin();

	const email = userRedux?.email;
	const currentLocation = useLocation();
	return (
		<div className='header' role='header'>
			<div className='header__content'>
				<div className='title'>
					<div className='userInfo'>
						<span>
							<UserIcon />
						</span>
						<span>{email}</span>
					</div>
					<h1>
						<Link to={'/'}>Playtomic</Link>
					</h1>
				</div>

				<div className='header__content-links'>
					{ROUTES.filter((route: RouteType) => route.isNavbar === true).map(
						({ id, label, path }) => {
							return (
								<span
									key={id}
									className={`${
										currentLocation.pathname === path ? 'active' : ''
									}`}
								>
									<Link to={path}>{label}</Link>
								</span>
							);
						}
					)}

					<div className='logout' onClick={handleLogout}>
						logout
					</div>
				</div>
			</div>
		</div>
	);
};
